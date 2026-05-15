(function () {
  const STORAGE_KEY = 'ghost-in-machines-checklist-state-v1';
  const AUTH_KEY = 'ghost-in-machines-edit-unlocked';
  const EDIT_PASSWORD = 'GhostInMachines2026!';
  const STATUS_OPTIONS = ['Not Started', 'In Progress', 'Testing', 'Complete', 'Blocked'];
  const data = window.CHECKLIST_DATA;
  const state = loadState();
  const taskLookup = new Map();
  let isEditingUnlocked = sessionStorage.getItem(AUTH_KEY) === 'true';
  let pendingEdit = null;
  let passwordModal = null;
  let imageModal = null;
  let activeImageTaskId = null;

  const phaseList = document.getElementById('phaseList');
  const emptyState = document.getElementById('emptyState');
  const searchInput = document.getElementById('searchInput');
  const statusFilter = document.getElementById('statusFilter');
  const phaseFilter = document.getElementById('phaseFilter');
  const exportButton = document.getElementById('exportButton');
  const importButton = document.getElementById('importButton');
  const importFile = document.getElementById('importFile');
  const resetButton = document.getElementById('resetButton');
  const unlockButton = document.getElementById('unlockButton');
  const editMode = document.getElementById('editMode');
  const passwordForm = document.getElementById('passwordForm');
  const passwordInput = document.getElementById('passwordInput');
  const passwordError = document.getElementById('passwordError');
  const imageForm = document.getElementById('imageForm');
  const imageUrlInput = document.getElementById('imageUrlInput');
  const imageFileInput = document.getElementById('imageFileInput');
  const imagePreviewWrap = document.getElementById('imagePreviewWrap');
  const imagePreview = document.getElementById('imagePreview');
  const removeImageButton = document.getElementById('removeImageButton');

  init();

  function init() {
    indexTasks();
    renderPhaseFilter();
    renderStats();
    renderChecklist();
    updateProgress();
    bindEvents();
    updateAuthUi();
    document.getElementById('sourceName').textContent = data.source;
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function indexTasks() {
    data.phases.forEach((phase) => {
      phase.sections.forEach((section) => {
        section.tasks.forEach((task) => {
          taskLookup.set(task.id, { task, phase, section });
          if (!state.tasks[task.id]) {
            state.tasks[task.id] = { status: task.status || 'Not Started', checked: false };
          }
        });
      });
    });
  }

  function bindEvents() {
    searchInput.addEventListener('input', applyFilters);
    statusFilter.addEventListener('change', applyFilters);
    phaseFilter.addEventListener('change', applyFilters);
    exportButton.addEventListener('click', exportState);
    unlockButton.addEventListener('click', () => requestUnlock());
    importButton.addEventListener('click', () => requireEditing(() => importFile.click()));
    importFile.addEventListener('change', importState);
    resetButton.addEventListener('click', () => requireEditing(resetState));
    passwordForm.addEventListener('submit', handlePasswordSubmit);
    document.getElementById('passwordModal').addEventListener('shown.bs.modal', () => passwordInput.focus());
    imageForm.addEventListener('submit', handleImageSubmit);
    imageFileInput.addEventListener('change', handleImageFileChange);
    imageUrlInput.addEventListener('input', () => updateImagePreview(imageUrlInput.value.trim()));
    removeImageButton.addEventListener('click', removeTaskImage);
    document.getElementById('imageModal').addEventListener('shown.bs.modal', () => imageUrlInput.focus());
  }

  function renderPhaseFilter() {
    data.phases.forEach((phase) => {
      const option = document.createElement('option');
      option.value = phase.id;
      option.textContent = phase.title;
      phaseFilter.appendChild(option);
    });
  }

  function renderStats() {
    document.getElementById('statsGrid').innerHTML = [
      ['Total Tasks', getAllTasks().length],
      ['Complete', getStatusCount('Complete')],
      ['In Progress', getStatusCount('In Progress')],
      ['Blocked', getStatusCount('Blocked')]
    ].map(([label, value]) => (
      '<div class="stat-card">' +
        '<div class="stat-label">' + escapeHtml(label) + '</div>' +
        '<div class="stat-value">' + value + '</div>' +
      '</div>'
    )).join('');
  }

  function renderChecklist() {
    const taskWeight = getTaskWeight();
    phaseList.innerHTML = data.phases.map((phase) => {
      const phaseStats = getPhaseStats(phase);
      const sections = phase.sections.map((section) => {
        const tasks = section.tasks.map((task) => renderTaskCard(task, phase, section, taskWeight)).join('');
        return (
          '<div class="section-block" data-section-id="' + section.id + '">' +
            '<h3 class="section-title">' + escapeHtml(section.title) + '</h3>' +
            '<div class="task-grid">' + tasks + '</div>' +
          '</div>'
        );
      }).join('');

      return (
        '<section class="phase-section" data-phase-id="' + phase.id + '">' +
          '<div class="phase-header">' +
            '<div>' +
              '<h2 class="phase-title">' + escapeHtml(phase.title) + '</h2>' +
              '<div class="phase-count" data-phase-count="' + phase.id + '">' + phaseStats.complete + ' / ' + phaseStats.total + ' tasks complete</div>' +
            '</div>' +
            '<div class="phase-progress">' +
              '<strong data-phase-percent="' + phase.id + '">' + formatPercent(phaseStats.percent) + '</strong>' +
              '<div class="progress" role="progressbar" aria-label="' + escapeHtml(phase.title) + ' progress" aria-valuemin="0" aria-valuemax="100">' +
                '<div class="progress-bar" data-phase-bar="' + phase.id + '" style="width: ' + phaseStats.percent + '%">' + formatPercent(phaseStats.percent) + '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          sections +
        '</section>'
      );
    }).join('');

    phaseList.querySelectorAll('[data-task-card]').forEach((card) => {
      card.addEventListener('click', () => requireEditing(() => toggleTask(card)));
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          requireEditing(() => toggleTask(card));
        }
      });
    });

    phaseList.querySelectorAll('.status-select').forEach((select) => {
      select.addEventListener('click', (event) => event.stopPropagation());
      select.addEventListener('keydown', (event) => event.stopPropagation());
      select.addEventListener('change', handleStatusChange);
    });

    phaseList.querySelectorAll('[data-image-button]').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        const card = event.target.closest('[data-task-card]');
        requireEditing(() => openImageModal(card.dataset.taskId));
      });
      button.addEventListener('keydown', (event) => event.stopPropagation());
    });

    updateAuthUi();
  }

  function renderTaskCard(task, phase, section, taskWeight) {
    const taskState = getTaskState(task.id);
    const status = taskState.status;
    const checked = taskState.checked || status === 'Complete';
    const imageUrl = taskState.imageUrl || '';
    const classes = ['card', 'task-card'];
    if (checked) {
      classes.push('is-complete');
    }
    if (status === 'Blocked') {
      classes.push('is-blocked');
    }
    if (imageUrl) {
      classes.push('has-image');
    }

    const options = STATUS_OPTIONS.map((option) => (
      '<option value="' + option + '"' + (option === status ? ' selected' : '') + '>' + option + '</option>'
    )).join('');

    return (
      '<article class="' + classes.join(' ') + '" tabindex="0" role="button" aria-pressed="' + checked + '" data-task-card data-task-id="' + task.id + '" data-phase-id="' + phase.id + '" data-phase-title="' + escapeHtml(phase.title).toLowerCase() + '" data-section-title="' + escapeHtml(section.title).toLowerCase() + '" data-task-title="' + escapeHtml(task.title).toLowerCase() + '" data-status="' + status + '">' +
        (imageUrl ? '<div class="task-media"><img src="' + escapeHtml(imageUrl) + '" alt=""></div>' : '') +
        '<div class="card-body">' +
          '<div class="task-main">' +
            '<span class="task-state-icon" aria-hidden="true"><i data-lucide="check"></i></span>' +
            '<p class="task-title">' + escapeHtml(task.title) + '</p>' +
          '</div>' +
          '<div class="task-footer">' +
            '<select class="form-select form-select-sm status-select" aria-label="Status for ' + escapeHtml(task.title) + '"' + (isEditingUnlocked ? '' : ' disabled') + '>' + options + '</select>' +
            '<button class="btn btn-sm task-image-button" type="button" data-image-button aria-label="Add or change image"><i data-lucide="' + (imageUrl ? 'image' : 'image-plus') + '"></i><span>Image</span></button>' +
            '<span class="task-weight">+' + taskWeight.toFixed(2) + '%</span>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }

  function toggleTask(card) {
    const taskId = card.dataset.taskId;
    const taskState = getTaskState(taskId);
    taskState.checked = !isComplete(taskId);
    taskState.status = taskState.checked ? 'Complete' : 'Not Started';
    card.querySelector('.status-select').value = taskState.status;
    saveState();
    refreshTaskCard(card, taskState);
    updateProgress();
    applyFilters();
  }

  function handleStatusChange(event) {
    if (!isEditingUnlocked) {
      event.preventDefault();
      requestUnlock();
      return;
    }

    const card = event.target.closest('[data-task-card]');
    const taskId = card.dataset.taskId;
    const taskState = getTaskState(taskId);
    taskState.status = event.target.value;
    taskState.checked = event.target.value === 'Complete';
    saveState();
    refreshTaskCard(card, taskState);
    updateProgress();
    applyFilters();
  }

  function refreshTaskCard(card, taskState) {
    card.dataset.status = taskState.status;
    card.setAttribute('aria-pressed', taskState.checked || taskState.status === 'Complete');
    card.classList.toggle('is-complete', taskState.checked || taskState.status === 'Complete');
    card.classList.toggle('is-blocked', taskState.status === 'Blocked');
  }

  function requireEditing(action) {
    if (isEditingUnlocked) {
      action();
      return;
    }

    pendingEdit = action;
    requestUnlock();
  }

  function requestUnlock() {
    if (isEditingUnlocked) {
      lockEditing();
      return;
    }

    passwordInput.value = '';
    passwordError.classList.add('d-none');
    if (!passwordModal) {
      passwordModal = new bootstrap.Modal(document.getElementById('passwordModal'));
    }
    passwordModal.show();
  }

  function handlePasswordSubmit(event) {
    event.preventDefault();
    if (passwordInput.value !== EDIT_PASSWORD) {
      passwordError.classList.remove('d-none');
      passwordInput.select();
      return;
    }

    isEditingUnlocked = true;
    sessionStorage.setItem(AUTH_KEY, 'true');
    passwordError.classList.add('d-none');
    if (passwordModal) {
      passwordModal.hide();
    }
    updateAuthUi();

    if (pendingEdit) {
      const edit = pendingEdit;
      pendingEdit = null;
      edit();
    }
  }

  function lockEditing() {
    isEditingUnlocked = false;
    pendingEdit = null;
    sessionStorage.removeItem(AUTH_KEY);
    updateAuthUi();
  }

  function updateAuthUi() {
    editMode.textContent = isEditingUnlocked ? 'Editing unlocked' : 'Editing locked';
    unlockButton.classList.toggle('btn-primary', isEditingUnlocked);
    unlockButton.classList.toggle('btn-outline-primary', !isEditingUnlocked);
    unlockButton.innerHTML = isEditingUnlocked
      ? '<i data-lucide="unlock"></i><span>Lock</span>'
      : '<i data-lucide="lock"></i><span>Unlock</span>';
    document.querySelectorAll('.status-select').forEach((select) => {
      select.disabled = !isEditingUnlocked;
    });
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function openImageModal(taskId) {
    activeImageTaskId = taskId;
    const taskState = getTaskState(taskId);
    imageUrlInput.value = taskState.imageUrl || '';
    imageFileInput.value = '';
    updateImagePreview(imageUrlInput.value);

    if (!imageModal) {
      imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    }
    imageModal.show();
  }

  function handleImageSubmit(event) {
    event.preventDefault();
    if (!activeImageTaskId) {
      return;
    }

    const taskState = getTaskState(activeImageTaskId);
    taskState.imageUrl = imageUrlInput.value.trim();
    saveState();
    imageModal.hide();
    renderChecklist();
    updateProgress();
    applyFilters();
  }

  function handleImageFileChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      imageUrlInput.value = reader.result;
      updateImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function removeTaskImage() {
    if (!activeImageTaskId) {
      return;
    }

    const taskState = getTaskState(activeImageTaskId);
    delete taskState.imageUrl;
    saveState();
    imageUrlInput.value = '';
    imageFileInput.value = '';
    updateImagePreview('');
    imageModal.hide();
    renderChecklist();
    updateProgress();
    applyFilters();
  }

  function updateImagePreview(value) {
    imagePreview.src = value || '';
    imagePreviewWrap.classList.toggle('d-none', !value);
  }

  function updateProgress() {
    const allTasks = getAllTasks();
    const complete = allTasks.filter((task) => isComplete(task.id)).length;
    const percent = allTasks.length ? (complete / allTasks.length) * 100 : 0;
    const formatted = formatPercent(percent);

    document.getElementById('overallPercent').textContent = formatted;
    document.getElementById('overallBar').style.width = percent + '%';
    document.getElementById('overallBar').textContent = formatted;
    document.getElementById('taskSummary').textContent = complete + ' / ' + allTasks.length + ' tasks complete';
    document.getElementById('progressDetail').textContent = 'Each task contributes ' + getTaskWeight().toFixed(2) + '% of total progress.';
    document.getElementById('lastSaved').textContent = state.savedAt ? 'Saved ' + new Date(state.savedAt).toLocaleString() : 'Not saved yet';

    data.phases.forEach((phase) => {
      const stats = getPhaseStats(phase);
      const phasePercent = document.querySelector('[data-phase-percent="' + phase.id + '"]');
      const phaseBar = document.querySelector('[data-phase-bar="' + phase.id + '"]');
      const phaseCount = document.querySelector('[data-phase-count="' + phase.id + '"]');
      if (phasePercent && phaseBar && phaseCount) {
        phasePercent.textContent = formatPercent(stats.percent);
        phaseBar.style.width = stats.percent + '%';
        phaseBar.textContent = formatPercent(stats.percent);
        phaseCount.textContent = stats.complete + ' / ' + stats.total + ' tasks complete';
      }
    });

    renderStats();
  }

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const status = statusFilter.value;
    const phaseId = phaseFilter.value;
    let visibleCards = 0;

    document.querySelectorAll('[data-task-card]').forEach((card) => {
      const searchable = [card.dataset.taskTitle, card.dataset.sectionTitle, card.dataset.phaseTitle].join(' ');
      const matchesQuery = !query || searchable.includes(query);
      const matchesStatus = status === 'all' || card.dataset.status === status;
      const matchesPhase = phaseId === 'all' || card.dataset.phaseId === phaseId;
      const isVisible = matchesQuery && matchesStatus && matchesPhase;
      card.classList.toggle('d-none', !isVisible);
      if (isVisible) {
        visibleCards += 1;
      }
    });

    document.querySelectorAll('.section-block').forEach((section) => {
      const hasVisibleTask = Boolean(section.querySelector('[data-task-card]:not(.d-none)'));
      section.classList.toggle('d-none', !hasVisibleTask);
    });

    document.querySelectorAll('.phase-section').forEach((phase) => {
      const hasVisibleTask = Boolean(phase.querySelector('[data-task-card]:not(.d-none)'));
      phase.classList.toggle('d-none', !hasVisibleTask);
    });

    emptyState.classList.toggle('d-none', visibleCards !== 0);
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function exportState() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ghost-in-machines-checklist-progress.json';
    link.click();
    URL.revokeObjectURL(url);
  }

  function importState(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(reader.result);
        if (!imported.tasks || typeof imported.tasks !== 'object') {
          throw new Error('Missing tasks object');
        }
        Object.keys(state.tasks).forEach((taskId) => {
          if (imported.tasks[taskId]) {
            const importedTask = imported.tasks[taskId];
            state.tasks[taskId] = {
              status: STATUS_OPTIONS.includes(importedTask.status) ? importedTask.status : 'Not Started',
              checked: Boolean(importedTask.checked || importedTask.status === 'Complete'),
              imageUrl: importedTask.imageUrl || ''
            };
          }
        });
        saveState();
        renderChecklist();
        updateProgress();
        applyFilters();
      } catch (error) {
        window.alert('Could not import that progress file.');
      } finally {
        importFile.value = '';
      }
    };
    reader.readAsText(file);
  }

  function resetState() {
    if (!window.confirm('Reset all checklist progress?')) {
      return;
    }
    Object.keys(state.tasks).forEach((taskId) => {
      state.tasks[taskId] = { status: 'Not Started', checked: false };
    });
    saveState();
    renderChecklist();
    updateProgress();
    applyFilters();
  }

  function getTaskState(taskId) {
    return state.tasks[taskId] || { status: 'Not Started', checked: false };
  }

  function isComplete(taskId) {
    const taskState = getTaskState(taskId);
    return taskState.checked || taskState.status === 'Complete';
  }

  function getAllTasks() {
    return data.phases.flatMap((phase) => phase.sections.flatMap((section) => section.tasks));
  }

  function getStatusCount(status) {
    return getAllTasks().filter((task) => getTaskState(task.id).status === status).length;
  }

  function getPhaseStats(phase) {
    const tasks = phase.sections.flatMap((section) => section.tasks);
    const complete = tasks.filter((task) => isComplete(task.id)).length;
    return {
      total: tasks.length,
      complete,
      percent: tasks.length ? (complete / tasks.length) * 100 : 0
    };
  }

  function getTaskWeight() {
    const total = getAllTasks().length;
    return total ? 100 / total : 0;
  }

  function formatPercent(value) {
    if (value === 0 || value === 100) {
      return Math.round(value) + '%';
    }
    return value.toFixed(1) + '%';
  }

  function loadState() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (stored && stored.tasks) {
        return stored;
      }
    } catch (error) {
      localStorage.removeItem(STORAGE_KEY);
    }

    return { version: 1, savedAt: null, tasks: {} };
  }

  function saveState() {
    state.savedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
})();
