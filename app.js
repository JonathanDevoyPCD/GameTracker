(function () {
  const STATUS_OPTIONS = ['Not Started', 'In Progress', 'Testing', 'Complete', 'Blocked'];
  const data = window.CHECKLIST_DATA;

  const phaseList = document.getElementById('phaseList');
  const emptyState = document.getElementById('emptyState');
  const searchInput = document.getElementById('searchInput');
  const statusFilter = document.getElementById('statusFilter');
  const phaseFilter = document.getElementById('phaseFilter');
  const updates = window.DEV_UPDATES || [];
  const updatesList = document.getElementById('updatesList');
  const updatesSummary = document.getElementById('updatesSummary');

  init();

  function init() {
    renderUpdates();
    renderPhaseFilter();
    renderStats();
    renderChecklist();
    updateProgress();
    bindEvents();
    document.getElementById('sourceName').textContent = data.source;
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function bindEvents() {
    searchInput.addEventListener('input', applyFilters);
    statusFilter.addEventListener('change', applyFilters);
    phaseFilter.addEventListener('change', applyFilters);
  }

  function renderPhaseFilter() {
    data.phases.forEach((phase) => {
      const option = document.createElement('option');
      option.value = phase.id;
      option.textContent = phase.title;
      phaseFilter.appendChild(option);
    });
  }

  function renderUpdates() {
    if (!updatesList) {
      return;
    }

    updatesSummary.textContent = updates.length + ' updates migrated';
    updatesList.innerHTML = updates.map((update, index) => renderUpdateCard(update, index)).join('');
  }

  function renderUpdateCard(update, index) {
    const classes = ['update-card'];
    if (!update.imageUrl) {
      classes.push('text-only');
    }
    if (index === 0) {
      classes.push('latest-update');
    }

    return (
      '<article class="' + classes.join(' ') + '">' +
        (update.imageUrl ? '<div class="update-media"><img src="' + escapeHtml(update.imageUrl) + '" alt=""></div>' : '') +
        '<div class="update-content">' +
          '<div class="update-meta">' +
            '<span class="status-chip status-in-progress">' + escapeHtml(update.version) + '</span>' +
            (update.date ? '<time>' + escapeHtml(update.date) + '</time>' : '') +
            (index === 0 ? '<span class="latest-chip">Most Recent</span>' : '') +
          '</div>' +
          '<h3>' + escapeHtml(update.title) + '</h3>' +
          (update.body ? '<p>' + escapeHtml(update.body) + '</p>' : '') +
        '</div>' +
      '</article>'
    );
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
  }

  function renderTaskCard(task, phase, section, taskWeight) {
    const status = normalizeStatus(task.status);
    const complete = isComplete(task);
    const imageUrl = task.imageUrl || '';
    const classes = ['card', 'task-card'];
    if (complete) {
      classes.push('is-complete');
    }
    if (status === 'Blocked') {
      classes.push('is-blocked');
    }
    if (imageUrl) {
      classes.push('has-image');
    }

    return (
      '<article class="' + classes.join(' ') + '" data-task-card data-task-id="' + task.id + '" data-phase-id="' + phase.id + '" data-phase-title="' + escapeHtml(phase.title).toLowerCase() + '" data-section-title="' + escapeHtml(section.title).toLowerCase() + '" data-task-title="' + escapeHtml(task.title).toLowerCase() + '" data-status="' + status + '">' +
        (imageUrl ? '<div class="task-media"><img src="' + escapeHtml(imageUrl) + '" alt=""></div>' : '') +
        '<div class="card-body">' +
          '<div class="task-main">' +
            '<p class="task-title">' + escapeHtml(task.title) + '</p>' +
            (task.description ? '<p class="task-description">' + escapeHtml(task.description) + '</p>' : '') +
          '</div>' +
          '<div class="task-footer read-only-footer">' +
            '<span class="status-chip status-' + slug(status) + '">' + escapeHtml(status) + '</span>' +
            '<span class="task-weight">+' + taskWeight.toFixed(2) + '%</span>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }

  function updateProgress() {
    const allTasks = getAllTasks();
    const complete = allTasks.filter(isComplete).length;
    const percent = allTasks.length ? (complete / allTasks.length) * 100 : 0;
    const formatted = formatPercent(percent);

    document.getElementById('overallPercent').textContent = formatted;
    document.getElementById('overallBar').style.width = percent + '%';
    document.getElementById('overallBar').textContent = formatted;
    document.getElementById('taskSummary').textContent = complete + ' / ' + allTasks.length + ' tasks complete';
    document.getElementById('progressDetail').textContent = 'Read-only tracker. Each task contributes ' + getTaskWeight().toFixed(2) + '% of total progress.';
    document.getElementById('lastSaved').textContent = 'Updated from checklist data';

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

  function getAllTasks() {
    return data.phases.flatMap((phase) => phase.sections.flatMap((section) => section.tasks));
  }

  function getStatusCount(status) {
    return getAllTasks().filter((task) => normalizeStatus(task.status) === status).length;
  }

  function getPhaseStats(phase) {
    const tasks = phase.sections.flatMap((section) => section.tasks);
    const complete = tasks.filter(isComplete).length;
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

  function isComplete(task) {
    return normalizeStatus(task.status) === 'Complete';
  }

  function normalizeStatus(status) {
    return STATUS_OPTIONS.includes(status) ? status : 'Not Started';
  }

  function formatPercent(value) {
    if (value === 0 || value === 100) {
      return Math.round(value) + '%';
    }
    return value.toFixed(1) + '%';
  }

  function slug(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
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
