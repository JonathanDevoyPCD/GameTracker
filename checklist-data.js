// Phase 1-only development checklist for Ghost in Machines.
// Manually update task "status" values: Not Started, In Progress, Testing, Complete, Blocked.
window.CHECKLIST_DATA = {
  "project": "Ghost in Machines",
  "source": "Ghosts_in_Machines_Phase_1_Core_Foundation_Checklist_v0.1.pdf",
  "generatedAt": "2026-05-18",
  "phases": [
    {
      "id": "phase-1-01-game-framework-foundation",
      "title": "1. Game Framework Foundation",
      "sections": [
        {
          "id": "phase-1-01-tasks",
          "title": "Set up the high-level classes that every system will connect to.",
          "tasks": [
            { "id": "p1-01-001", "title": "Create/verify BP_GIM_GameInstance", "description": "Asset/Type: Game Instance. Stores global references, save slots, settings access, and future persistent data.", "status": "Not Started" },
            { "id": "p1-01-002", "title": "Create/verify BP_GIM_GameMode", "description": "Asset/Type: Game Mode Base. Controls default pawn, controller, and basic game rules for test maps.", "status": "Not Started" },
            { "id": "p1-01-003", "title": "Create/verify BP_GIM_GameState", "description": "Asset/Type: Game State. Reserved for future world/match state such as day/night, survivors, and maze status.", "status": "Not Started" },
            { "id": "p1-01-004", "title": "Create/verify BP_PlayerController", "description": "Asset/Type: Player Controller. Handles input context switching, UI open/close, cursor mode, and pause state.", "status": "Not Started" },
            { "id": "p1-01-005", "title": "Create/verify BP_PlayerSurvivorCharacter", "description": "Asset/Type: Character. Main playable character using first-person setup and future animation system.", "status": "Not Started" },
            { "id": "p1-01-006", "title": "Create/verify BP_UIManager", "description": "Asset/Type: Actor / Manager. Central place to create, show, hide, and switch UI widgets.", "status": "Not Started" },
            { "id": "p1-01-007", "title": "Create/verify BP_SaveLoadManager", "description": "Asset/Type: Actor / Manager. Central place for save/load requests and slot handling.", "status": "Not Started" },
            { "id": "p1-01-008", "title": "Set project Maps & Modes for test map", "description": "Asset/Type: Project Settings. Use Map_TestSystems as the startup map until menus are ready.", "status": "Not Started" },
            { "id": "p1-01-009", "title": "Create a Phase 1 test level", "description": "Asset/Type: Map. Use a clean test area for player, UI, interaction, inventory, and stats testing.", "status": "Not Started" },
            { "id": "p1-01-010", "title": "Commit framework skeleton", "description": "Asset/Type: Git. Commit before adding logic so you can roll back safely.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-02-enhanced-input-and-player-controls",
      "title": "2. Enhanced Input and Player Controls",
      "sections": [
        {
          "id": "phase-1-02-tasks",
          "title": "Create the core inputs that every Phase 1 system will use.",
          "tasks": [
            { "id": "p1-02-001", "title": "Create/verify IMC_Player", "description": "Asset/Type: Input Mapping Context. Gameplay controls for movement and interaction.", "status": "Not Started" },
            { "id": "p1-02-002", "title": "Create/verify IMC_UI", "description": "Asset/Type: Input Mapping Context. Menu, pause, accept, back, and navigation controls.", "status": "Not Started" },
            { "id": "p1-02-003", "title": "Create/verify IMC_Inventory", "description": "Asset/Type: Input Mapping Context. Inventory-specific controls for drag/drop, splitting, and hotbar actions.", "status": "Not Started" },
            { "id": "p1-02-004", "title": "Create IA_Move", "description": "Asset/Type: Input Action. WASD movement.", "status": "Not Started" },
            { "id": "p1-02-005", "title": "Create IA_Look", "description": "Asset/Type: Input Action. Mouse/gamepad camera look.", "status": "Not Started" },
            { "id": "p1-02-006", "title": "Create IA_Jump", "description": "Asset/Type: Input Action. Jump input.", "status": "Not Started" },
            { "id": "p1-02-007", "title": "Create IA_Sprint", "description": "Asset/Type: Input Action. Sprint input.", "status": "Not Started" },
            { "id": "p1-02-008", "title": "Create IA_Crouch", "description": "Asset/Type: Input Action. Crouch input.", "status": "Not Started" },
            { "id": "p1-02-009", "title": "Create IA_Interact", "description": "Asset/Type: Input Action. Tap/hold interaction input, default E.", "status": "Not Started" },
            { "id": "p1-02-010", "title": "Create IA_Attack", "description": "Asset/Type: Input Action. Default left mouse; reserved for later combat.", "status": "Not Started" },
            { "id": "p1-02-011", "title": "Create IA_AimOrBlock", "description": "Asset/Type: Input Action. Default right mouse; reserved for later.", "status": "Not Started" },
            { "id": "p1-02-012", "title": "Create IA_Flashlight", "description": "Asset/Type: Input Action. Toggle flashlight, default F.", "status": "Not Started" },
            { "id": "p1-02-013", "title": "Create IA_OpenInventory", "description": "Asset/Type: Input Action. Open/close backpack inventory, default TAB.", "status": "Not Started" },
            { "id": "p1-02-014", "title": "Create IA_OpenCrafting", "description": "Asset/Type: Input Action. Open crafting UI later, default C.", "status": "Not Started" },
            { "id": "p1-02-015", "title": "Create IA_OpenJournal", "description": "Asset/Type: Input Action. Open journal later, default J.", "status": "Not Started" },
            { "id": "p1-02-016", "title": "Create IA_Pause", "description": "Asset/Type: Input Action. Pause menu, default ESC.", "status": "Not Started" },
            { "id": "p1-02-017", "title": "Create IA_Hotbar_1 to IA_Hotbar_6", "description": "Asset/Type: Input Actions. Quick slots for belt/hotbar.", "status": "Not Started" },
            { "id": "p1-02-018", "title": "Map all keys inside IMC_Player", "description": "Asset/Type: Input Mapping. Assign default keyboard/mouse mappings.", "status": "Not Started" },
            { "id": "p1-02-019", "title": "Test input events in debug mode", "description": "Asset/Type: Testing. Confirm inputs fire before system logic is built.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-03-character-animation-foundation",
      "title": "3. Character Animation Foundation",
      "sections": [
        {
          "id": "phase-1-03-tasks",
          "title": "Bring in movement animation early, but do not overbuild combat animation yet.",
          "tasks": [
            { "id": "p1-03-001", "title": "Create a backup before importing sample content", "description": "Asset/Type: Git/Backup. Commit before importing Game Animation Sample assets.", "status": "Not Started" },
            { "id": "p1-03-002", "title": "Add Epic Games Game Animation Sample to project", "description": "Asset/Type: Asset Import. Import/merge the animation sample carefully into the project.", "status": "Not Started" },
            { "id": "p1-03-003", "title": "Place sample assets in organised folders", "description": "Asset/Type: Content Hygiene. Keep animation sample assets under a clear imported/sample folder if possible.", "status": "Not Started" },
            { "id": "p1-03-004", "title": "Retarget or connect the sample character setup", "description": "Asset/Type: Animation. Prepare the player character to use the sample locomotion system.", "status": "Not Started" },
            { "id": "p1-03-005", "title": "Confirm idle animation", "description": "Asset/Type: Animation Test. Player displays idle correctly.", "status": "Not Started" },
            { "id": "p1-03-006", "title": "Confirm walk animation", "description": "Asset/Type: Animation Test. Walk blend works correctly.", "status": "Not Started" },
            { "id": "p1-03-007", "title": "Confirm run animation", "description": "Asset/Type: Animation Test. Run movement works correctly.", "status": "Not Started" },
            { "id": "p1-03-008", "title": "Confirm sprint animation", "description": "Asset/Type: Animation Test. Sprint speed/animation feels natural.", "status": "Not Started" },
            { "id": "p1-03-009", "title": "Confirm jump and land animation", "description": "Asset/Type: Animation Test. Jump, fall, and land transitions are acceptable.", "status": "Not Started" },
            { "id": "p1-03-010", "title": "Confirm crouch animation", "description": "Asset/Type: Animation Test. Crouch movement and camera height are acceptable.", "status": "Not Started" },
            { "id": "p1-03-011", "title": "Add animation debug notes", "description": "Asset/Type: Documentation. Record what works, what is temporary, and what needs later polish.", "status": "Not Started" },
            { "id": "p1-03-012", "title": "Do not build combat animation yet", "description": "Asset/Type: Scope Control. Keep combat, weapons, and takedowns for a later phase.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-04-menu-and-ui-shells",
      "title": "4. Menu and UI Shells",
      "sections": [
        {
          "id": "phase-1-04-tasks",
          "title": "Create the main UI screens and navigation flow before adding final styling.",
          "tasks": [
            { "id": "p1-04-001", "title": "Create WBP_MainMenu", "description": "Asset/Type: Widget Blueprint. Start Game, Load Game, Settings, Credits, Exit.", "status": "Not Started" },
            { "id": "p1-04-002", "title": "Create WBP_PauseMenu", "description": "Asset/Type: Widget Blueprint. Resume, Save, Load, Settings, Exit to Main Menu.", "status": "Not Started" },
            { "id": "p1-04-003", "title": "Create WBP_SettingsMenu", "description": "Asset/Type: Widget Blueprint. Container for video, graphics, audio, controls, gameplay, and accessibility tabs.", "status": "Not Started" },
            { "id": "p1-04-004", "title": "Create WBP_LoadingScreen", "description": "Asset/Type: Widget Blueprint. Loading spinner, tips, lore text, and background image placeholder.", "status": "Not Started" },
            { "id": "p1-04-005", "title": "Create WBP_ConfirmPopup", "description": "Asset/Type: Widget Blueprint. Reusable confirmation popup for new game, load, save, delete, and exit.", "status": "Not Started" },
            { "id": "p1-04-006", "title": "Create WBP_SaveSlot", "description": "Asset/Type: Widget Blueprint. Reusable row/card for save/load slot list.", "status": "Not Started" },
            { "id": "p1-04-007", "title": "Create WBP_DeathScreen placeholder", "description": "Asset/Type: Widget Blueprint. Death summary and restart/return options later.", "status": "Not Started" },
            { "id": "p1-04-008", "title": "Create WBP_HUD shell", "description": "Asset/Type: Widget Blueprint. Vitals, hotbar, interaction prompt, and notifications.", "status": "Not Started" },
            { "id": "p1-04-009", "title": "Create UI style guide note", "description": "Asset/Type: Documentation. Define fonts, colors, spacing, panel style, and icon direction.", "status": "Not Started" },
            { "id": "p1-04-010", "title": "Wire Main Menu buttons as placeholders", "description": "Asset/Type: UI Flow. Buttons can print/debug or navigate to empty screens.", "status": "Not Started" },
            { "id": "p1-04-011", "title": "Wire Pause Menu open/close placeholder", "description": "Asset/Type: UI Flow. ESC opens/closes pause menu.", "status": "Not Started" },
            { "id": "p1-04-012", "title": "Add UI audio placeholders", "description": "Asset/Type: Audio Hook. Click, hover, error, and open/close sounds.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-05-save-and-load-foundation",
      "title": "5. Save and Load Foundation",
      "sections": [
        {
          "id": "phase-1-05-tasks",
          "title": "Build the structure for game saves and settings saves before saving complex systems.",
          "tasks": [
            { "id": "p1-05-001", "title": "Create BP_GIM_SaveGame", "description": "Asset/Type: Save Game. Main save object for world/player progress.", "status": "Not Started" },
            { "id": "p1-05-002", "title": "Create BP_SettingsSaveGame", "description": "Asset/Type: Save Game. Separate save object for graphics, audio, video, controls, and accessibility.", "status": "Not Started" },
            { "id": "p1-05-003", "title": "Define save slot naming rule", "description": "Asset/Type: Design. Example: Slot_01, Slot_02, autosave, quicksave later.", "status": "Not Started" },
            { "id": "p1-05-004", "title": "Add save slot display name field", "description": "Asset/Type: Data. Shown in UI, e.g. 'Safe Zone - Day 01'.", "status": "Not Started" },
            { "id": "p1-05-005", "title": "Add timestamp field", "description": "Asset/Type: Data. Used for menu display.", "status": "Not Started" },
            { "id": "p1-05-006", "title": "Add saved map name field", "description": "Asset/Type: Data. Map to load when slot is selected.", "status": "Not Started" },
            { "id": "p1-05-007", "title": "Add player transform field", "description": "Asset/Type: Data. Location/rotation placeholder.", "status": "Not Started" },
            { "id": "p1-05-008", "title": "Add player stats fields", "description": "Asset/Type: Data. Health, stamina, hunger, thirst, and battery placeholders.", "status": "Not Started" },
            { "id": "p1-05-009", "title": "Add inventory save array placeholder", "description": "Asset/Type: Data. Item ID and quantity per slot.", "status": "Not Started" },
            { "id": "p1-05-010", "title": "Add hotbar save array placeholder", "description": "Asset/Type: Data. Hotbar slot references.", "status": "Not Started" },
            { "id": "p1-05-011", "title": "Add container save placeholder", "description": "Asset/Type: Data. Container contents saved by ID later.", "status": "Not Started" },
            { "id": "p1-05-012", "title": "Create save confirmation popup", "description": "Asset/Type: UI. Confirm before overwriting a slot.", "status": "Not Started" },
            { "id": "p1-05-013", "title": "Create load confirmation popup", "description": "Asset/Type: UI. Confirm before loading a slot.", "status": "Not Started" },
            { "id": "p1-05-014", "title": "Create delete save confirmation popup", "description": "Asset/Type: UI. Confirm before deleting a save.", "status": "Not Started" },
            { "id": "p1-05-015", "title": "Test settings save/load first", "description": "Asset/Type: Testing. Start with settings because it is safer than world saves.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-06-full-settings-system",
      "title": "6. Full Settings System",
      "sections": [
        {
          "id": "phase-1-06-tasks",
          "title": "Build a proper settings foundation early so testers can change performance and accessibility options.",
          "tasks": [
            { "id": "p1-06-001", "title": "Create settings tab structure", "description": "Asset/Type: UI. Video, Graphics, Audio, Controls, Gameplay, Accessibility.", "status": "Not Started" },
            { "id": "p1-06-002", "title": "Add resolution selector placeholder", "description": "Asset/Type: Video. List current supported resolutions later.", "status": "Not Started" },
            { "id": "p1-06-003", "title": "Add window mode selector", "description": "Asset/Type: Video. Fullscreen, windowed fullscreen, windowed.", "status": "Not Started" },
            { "id": "p1-06-004", "title": "Add VSync toggle", "description": "Asset/Type: Video. On/off.", "status": "Not Started" },
            { "id": "p1-06-005", "title": "Add frame rate limit selector", "description": "Asset/Type: Video. 30, 60, 120, unlimited placeholder.", "status": "Not Started" },
            { "id": "p1-06-006", "title": "Add overall quality preset", "description": "Asset/Type: Graphics. Low, Medium, High, Epic, Custom.", "status": "Not Started" },
            { "id": "p1-06-007", "title": "Add shadows quality selector", "description": "Asset/Type: Graphics. Important for foliage/maze performance.", "status": "Not Started" },
            { "id": "p1-06-008", "title": "Add foliage quality selector", "description": "Asset/Type: Graphics. Important for dense overgrowth.", "status": "Not Started" },
            { "id": "p1-06-009", "title": "Add effects quality selector", "description": "Asset/Type: Graphics. Fog, particles, machine effects.", "status": "Not Started" },
            { "id": "p1-06-010", "title": "Add view distance selector", "description": "Asset/Type: Graphics. Maze visibility and performance.", "status": "Not Started" },
            { "id": "p1-06-011", "title": "Add master volume slider", "description": "Asset/Type: Audio. 0-100%.", "status": "Not Started" },
            { "id": "p1-06-012", "title": "Add music volume slider", "description": "Asset/Type: Audio. 0-100%.", "status": "Not Started" },
            { "id": "p1-06-013", "title": "Add SFX volume slider", "description": "Asset/Type: Audio. 0-100%.", "status": "Not Started" },
            { "id": "p1-06-014", "title": "Add ambience volume slider", "description": "Asset/Type: Audio. 0-100%.", "status": "Not Started" },
            { "id": "p1-06-015", "title": "Add voice/broadcast volume slider", "description": "Asset/Type: Audio. 0-100%.", "status": "Not Started" },
            { "id": "p1-06-016", "title": "Add mouse sensitivity slider", "description": "Asset/Type: Controls. Basic mouse sensitivity.", "status": "Not Started" },
            { "id": "p1-06-017", "title": "Add invert Y toggle", "description": "Asset/Type: Controls. Optional accessibility/control setting.", "status": "Not Started" },
            { "id": "p1-06-018", "title": "Add keybind placeholder page", "description": "Asset/Type: Controls. Full rebinding can come later.", "status": "Not Started" },
            { "id": "p1-06-019", "title": "Add UI scale slider", "description": "Asset/Type: Accessibility. Helpful for different screens.", "status": "Not Started" },
            { "id": "p1-06-020", "title": "Add brightness/gamma slider", "description": "Asset/Type: Accessibility. Useful for horror/dark scenes.", "status": "Not Started" },
            { "id": "p1-06-021", "title": "Add camera shake toggle", "description": "Asset/Type: Accessibility. Reduce motion option.", "status": "Not Started" },
            { "id": "p1-06-022", "title": "Add motion blur toggle", "description": "Asset/Type: Accessibility. Reduce motion option.", "status": "Not Started" },
            { "id": "p1-06-023", "title": "Add subtitles toggle placeholder", "description": "Asset/Type: Accessibility. For broadcasts and future dialogue.", "status": "Not Started" },
            { "id": "p1-06-024", "title": "Save and load settings", "description": "Asset/Type: Testing. Settings persist between sessions.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-07-interaction-foundation",
      "title": "7. Interaction Foundation",
      "sections": [
        {
          "id": "phase-1-07-tasks",
          "title": "Create the reusable system for looking at objects and interacting with them.",
          "tasks": [
            { "id": "p1-07-001", "title": "Create/verify BPI_Interactable", "description": "Asset/Type: Blueprint Interface. Core interface for interactable actors.", "status": "Not Started" },
            { "id": "p1-07-002", "title": "Create/verify BP_InteractionComponent", "description": "Asset/Type: Actor Component. Line trace, current target, tap/hold logic.", "status": "Not Started" },
            { "id": "p1-07-003", "title": "Add interaction trace distance variable", "description": "Asset/Type: Component Variable. Default around 250-350 units.", "status": "Not Started" },
            { "id": "p1-07-004", "title": "Add current interactable variable", "description": "Asset/Type: Component Variable. Stores the focused interactable.", "status": "Not Started" },
            { "id": "p1-07-005", "title": "Add interact prompt text support", "description": "Asset/Type: UI Hook. Object name and action text.", "status": "Not Started" },
            { "id": "p1-07-006", "title": "Add interaction icon support", "description": "Asset/Type: UI Hook. Default E icon / hold E progress later.", "status": "Not Started" },
            { "id": "p1-07-007", "title": "Add tap interaction flow", "description": "Asset/Type: Interaction. Press E to pick up/open/use.", "status": "Not Started" },
            { "id": "p1-07-008", "title": "Add hold interaction placeholder", "description": "Asset/Type: Interaction. Hold E for crates, harvesting, doors later.", "status": "Not Started" },
            { "id": "p1-07-009", "title": "Create WBP_InteractionPrompt", "description": "Asset/Type: Widget Blueprint. Displays icon, object name, and action text.", "status": "Not Started" },
            { "id": "p1-07-010", "title": "Create BP_TestInteractable", "description": "Asset/Type: Actor. Simple object to test prompt and E press.", "status": "Not Started" },
            { "id": "p1-07-011", "title": "Test prompt appears/disappears", "description": "Asset/Type: Testing. Prompt only appears when looking at interactable.", "status": "Not Started" },
            { "id": "p1-07-012", "title": "Test no prompt on non-interactable objects", "description": "Asset/Type: Testing. Line trace ignores normal props.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-08-item-data-and-world-item-foundation",
      "title": "8. Item Data and World Item Foundation",
      "sections": [
        {
          "id": "phase-1-08-tasks",
          "title": "Create the item structure that drives pickups, inventory, hotbar, containers, and consumables.",
          "tasks": [
            { "id": "p1-08-001", "title": "Create/verify E_ItemType", "description": "Asset/Type: Blueprint Enum. Weapon, Tool, Food, Water, Medicine, Material, Battery, Anima, Misc.", "status": "Not Started" },
            { "id": "p1-08-002", "title": "Create/verify E_ItemRarity", "description": "Asset/Type: Blueprint Enum. Common, Uncommon, Rare, Epic, Unique if needed.", "status": "Not Started" },
            { "id": "p1-08-003", "title": "Create/verify ST_ItemData", "description": "Asset/Type: Blueprint Struct. Item ID, name, description, icon, type, stack size, use/equip/drop flags.", "status": "Not Started" },
            { "id": "p1-08-004", "title": "Create/verify ST_InventorySlot", "description": "Asset/Type: Blueprint Struct. Slot index, item data/ID, quantity, occupied flag.", "status": "Not Started" },
            { "id": "p1-08-005", "title": "Create/verify DT_Items", "description": "Asset/Type: Data Table. Master list of all starter items.", "status": "Not Started" },
            { "id": "p1-08-006", "title": "Add Wood row", "description": "Asset/Type: Data Table. Crafting material.", "status": "Not Started" },
            { "id": "p1-08-007", "title": "Add Stone row", "description": "Asset/Type: Data Table. Crafting material.", "status": "Not Started" },
            { "id": "p1-08-008", "title": "Add Fibre row", "description": "Asset/Type: Data Table. Crafting material.", "status": "Not Started" },
            { "id": "p1-08-009", "title": "Add Berry row", "description": "Asset/Type: Data Table. Low-tier food.", "status": "Not Started" },
            { "id": "p1-08-010", "title": "Add WaterBottle row", "description": "Asset/Type: Data Table. Low-tier water consumable.", "status": "Not Started" },
            { "id": "p1-08-011", "title": "Add Bandage row", "description": "Asset/Type: Data Table. Medicine consumable.", "status": "Not Started" },
            { "id": "p1-08-012", "title": "Add Battery row", "description": "Asset/Type: Data Table. Battery consumable.", "status": "Not Started" },
            { "id": "p1-08-013", "title": "Add AnimaShard row", "description": "Asset/Type: Data Table. Maze/resource placeholder.", "status": "Not Started" },
            { "id": "p1-08-014", "title": "Create BP_ItemBase", "description": "Asset/Type: Actor. Base world item actor.", "status": "Not Started" },
            { "id": "p1-08-015", "title": "Create BP_ItemPickup", "description": "Asset/Type: Actor. Physical pickup using item row ID and quantity.", "status": "Not Started" },
            { "id": "p1-08-016", "title": "Create placeholder item icons", "description": "Asset/Type: UI Asset. Simple icons until final art exists.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-09-inventory-and-hotbar-foundation",
      "title": "9. Inventory and Hotbar Foundation",
      "sections": [
        {
          "id": "phase-1-09-tasks",
          "title": "Create the backpack and belt systems before containers and consumables depend on them.",
          "tasks": [
            { "id": "p1-09-001", "title": "Create/verify BP_InventoryComponent", "description": "Asset/Type: Actor Component. Stores inventory slots and item functions.", "status": "Not Started" },
            { "id": "p1-09-002", "title": "Create inventory slot count variable", "description": "Asset/Type: Component Variable. Start with 20 slots or chosen backpack size.", "status": "Not Started" },
            { "id": "p1-09-003", "title": "Create add item function placeholder", "description": "Asset/Type: Component Function. Adds item by item ID and quantity.", "status": "Not Started" },
            { "id": "p1-09-004", "title": "Create remove item function placeholder", "description": "Asset/Type: Component Function. Removes item by slot or item ID.", "status": "Not Started" },
            { "id": "p1-09-005", "title": "Create move item function placeholder", "description": "Asset/Type: Component Function. Moves item between inventory slots.", "status": "Not Started" },
            { "id": "p1-09-006", "title": "Create split stack function placeholder", "description": "Asset/Type: Component Function. Splits a stack into two slots.", "status": "Not Started" },
            { "id": "p1-09-007", "title": "Create drop item function placeholder", "description": "Asset/Type: Component Function. Spawns BP_ItemPickup into world.", "status": "Not Started" },
            { "id": "p1-09-008", "title": "Create use item function placeholder", "description": "Asset/Type: Component Function. Calls consumable/equipment logic later.", "status": "Not Started" },
            { "id": "p1-09-009", "title": "Create/verify BP_HotbarComponent", "description": "Asset/Type: Actor Component. Stores 6 belt/hotbar slots.", "status": "Not Started" },
            { "id": "p1-09-010", "title": "Create hotbar slot count variable", "description": "Asset/Type: Component Variable. Start with 6 slots.", "status": "Not Started" },
            { "id": "p1-09-011", "title": "Create assign to hotbar function", "description": "Asset/Type: Component Function. Links item to hotbar slot.", "status": "Not Started" },
            { "id": "p1-09-012", "title": "Create selected hotbar slot variable", "description": "Asset/Type: Component Variable. Tracks active slot.", "status": "Not Started" },
            { "id": "p1-09-013", "title": "Create WBP_Inventory", "description": "Asset/Type: Widget Blueprint. Main backpack UI matching mockup style.", "status": "Not Started" },
            { "id": "p1-09-014", "title": "Create WBP_InventorySlot", "description": "Asset/Type: Widget Blueprint. Individual slot with icon and stack count.", "status": "Not Started" },
            { "id": "p1-09-015", "title": "Create WBP_Hotbar", "description": "Asset/Type: Widget Blueprint. Belt/hotbar display.", "status": "Not Started" },
            { "id": "p1-09-016", "title": "Create WBP_HotbarSlot", "description": "Asset/Type: Widget Blueprint. Individual belt slot.", "status": "Not Started" },
            { "id": "p1-09-017", "title": "Create WBP_ItemDetailsPanel", "description": "Asset/Type: Widget Blueprint. Selected item icon, name, description, and actions.", "status": "Not Started" },
            { "id": "p1-09-018", "title": "Open/close inventory with TAB", "description": "Asset/Type: Input/UI. Player can toggle inventory.", "status": "Not Started" },
            { "id": "p1-09-019", "title": "Pause gameplay/cursor mode while inventory is open", "description": "Asset/Type: UI Flow. Mouse cursor visible and player look disabled.", "status": "Not Started" },
            { "id": "p1-09-020", "title": "Test empty inventory UI", "description": "Asset/Type: Testing. Widget opens/closes without logic errors.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-10-containers-and-storage",
      "title": "10. Containers and Storage",
      "sections": [
        {
          "id": "phase-1-10-tasks",
          "title": "Add storage screens that use the same inventory slot logic.",
          "tasks": [
            { "id": "p1-10-001", "title": "Create BP_StorageContainer", "description": "Asset/Type: Actor. Base container/storage actor.", "status": "Not Started" },
            { "id": "p1-10-002", "title": "Create BP_LootContainer", "description": "Asset/Type: Actor. Lootable crate/bag/container.", "status": "Not Started" },
            { "id": "p1-10-003", "title": "Create container inventory component/reference", "description": "Asset/Type: Component. Containers should use reusable slot logic.", "status": "Not Started" },
            { "id": "p1-10-004", "title": "Create WBP_ContainerInventory", "description": "Asset/Type: Widget Blueprint. Side-by-side inventory and container view.", "status": "Not Started" },
            { "id": "p1-10-005", "title": "Create container title field", "description": "Asset/Type: UI. Displays crate/storage name.", "status": "Not Started" },
            { "id": "p1-10-006", "title": "Add open container interaction", "description": "Asset/Type: Interaction. Press E opens container UI.", "status": "Not Started" },
            { "id": "p1-10-007", "title": "Display player inventory on left", "description": "Asset/Type: UI. Backpack slots.", "status": "Not Started" },
            { "id": "p1-10-008", "title": "Display container inventory on right", "description": "Asset/Type: UI. Storage slots.", "status": "Not Started" },
            { "id": "p1-10-009", "title": "Add transfer single item placeholder", "description": "Asset/Type: UI/Logic. Move selected quantity.", "status": "Not Started" },
            { "id": "p1-10-010", "title": "Add transfer stack placeholder", "description": "Asset/Type: UI/Logic. Move full stack.", "status": "Not Started" },
            { "id": "p1-10-011", "title": "Add transfer all placeholder", "description": "Asset/Type: UI/Logic. Move all compatible items.", "status": "Not Started" },
            { "id": "p1-10-012", "title": "Add drag across inventory/container", "description": "Asset/Type: UI/Logic. Drag item from backpack to container and back.", "status": "Not Started" },
            { "id": "p1-10-013", "title": "Test opening empty container", "description": "Asset/Type: Testing. UI opens and closes cleanly.", "status": "Not Started" },
            { "id": "p1-10-014", "title": "Test container with starter items", "description": "Asset/Type: Testing. Items appear in correct slots.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-11-stats-system",
      "title": "11. Stats System",
      "sections": [
        {
          "id": "phase-1-11-tasks",
          "title": "Implement the survival values that consumables, HUD, damage, and future gameplay depend on.",
          "tasks": [
            { "id": "p1-11-001", "title": "Create/verify BP_SurvivalStatsComponent", "description": "Asset/Type: Actor Component. Core player/NPC stats.", "status": "Not Started" },
            { "id": "p1-11-002", "title": "Add Health and MaxHealth", "description": "Asset/Type: Variable. Player life value.", "status": "Not Started" },
            { "id": "p1-11-003", "title": "Add Stamina and MaxStamina", "description": "Asset/Type: Variable. Sprint/action resource.", "status": "Not Started" },
            { "id": "p1-11-004", "title": "Add Hunger and MaxHunger", "description": "Asset/Type: Variable. Food survival stat.", "status": "Not Started" },
            { "id": "p1-11-005", "title": "Add Thirst and MaxThirst", "description": "Asset/Type: Variable. Water survival stat.", "status": "Not Started" },
            { "id": "p1-11-006", "title": "Add Battery and MaxBattery", "description": "Asset/Type: Variable. Flashlight/equipment resource.", "status": "Not Started" },
            { "id": "p1-11-007", "title": "Add stat drain rates", "description": "Asset/Type: Variables. Hunger, thirst, stamina, battery drain.", "status": "Not Started" },
            { "id": "p1-11-008", "title": "Add stat regeneration rates", "description": "Asset/Type: Variables. Stamina regen, later healing/rest.", "status": "Not Started" },
            { "id": "p1-11-009", "title": "Add ApplyDamage function", "description": "Asset/Type: Function. Reduces health.", "status": "Not Started" },
            { "id": "p1-11-010", "title": "Add Heal function", "description": "Asset/Type: Function. Restores health.", "status": "Not Started" },
            { "id": "p1-11-011", "title": "Add ModifyHunger function", "description": "Asset/Type: Function. Adds/removes hunger.", "status": "Not Started" },
            { "id": "p1-11-012", "title": "Add ModifyThirst function", "description": "Asset/Type: Function. Adds/removes thirst.", "status": "Not Started" },
            { "id": "p1-11-013", "title": "Add ModifyBattery function", "description": "Asset/Type: Function. Adds/removes battery.", "status": "Not Started" },
            { "id": "p1-11-014", "title": "Add death event dispatcher", "description": "Asset/Type: Event Dispatcher. Triggers player death flow later.", "status": "Not Started" },
            { "id": "p1-11-015", "title": "Create WBP_VitalsPanel", "description": "Asset/Type: Widget Blueprint. Displays stats in inventory/HUD.", "status": "Not Started" },
            { "id": "p1-11-016", "title": "Connect stats to HUD placeholder", "description": "Asset/Type: UI Binding. Show current values or bars.", "status": "Not Started" },
            { "id": "p1-11-017", "title": "Test stat changes through debug keys", "description": "Asset/Type: Testing. Decrease/increase stats without consumables first.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-12-consumables",
      "title": "12. Consumables",
      "sections": [
        {
          "id": "phase-1-12-tasks",
          "title": "Make food, water, medicine, and battery items affect player stats.",
          "tasks": [
            { "id": "p1-12-001", "title": "Define consumable item categories", "description": "Asset/Type: Design/Data. Food, water, medicine, battery, special.", "status": "Not Started" },
            { "id": "p1-12-002", "title": "Add Food_Group1 items", "description": "Asset/Type: Data. Small food items like berries/snacks.", "status": "Not Started" },
            { "id": "p1-12-003", "title": "Add Food_Group2 items", "description": "Asset/Type: Data. Medium food items like cooked meat/cans.", "status": "Not Started" },
            { "id": "p1-12-004", "title": "Add Food_Group3 items", "description": "Asset/Type: Data. Large/high-value meals or rare food.", "status": "Not Started" },
            { "id": "p1-12-005", "title": "Add Water_Group1 items", "description": "Asset/Type: Data. Small water sources.", "status": "Not Started" },
            { "id": "p1-12-006", "title": "Add Water_Group2 items", "description": "Asset/Type: Data. Medium water bottles/canteens.", "status": "Not Started" },
            { "id": "p1-12-007", "title": "Add Water_Group3 items", "description": "Asset/Type: Data. Large/high-value water.", "status": "Not Started" },
            { "id": "p1-12-008", "title": "Add Medicine_Group1 items", "description": "Asset/Type: Data. Bandage/status treatment.", "status": "Not Started" },
            { "id": "p1-12-009", "title": "Add Medicine_Group2 items", "description": "Asset/Type: Data. Small heal items.", "status": "Not Started" },
            { "id": "p1-12-010", "title": "Add Medicine_Group3 items", "description": "Asset/Type: Data. Large heal/rare medicine.", "status": "Not Started" },
            { "id": "p1-12-011", "title": "Add Battery_Group1 items", "description": "Asset/Type: Data. Small battery refill.", "status": "Not Started" },
            { "id": "p1-12-012", "title": "Add Battery_Group2 items", "description": "Asset/Type: Data. Large battery refill.", "status": "Not Started" },
            { "id": "p1-12-013", "title": "Create consumable effect fields", "description": "Asset/Type: Struct/Data. Health restore, hunger restore, thirst restore, battery restore, status removal.", "status": "Not Started" },
            { "id": "p1-12-014", "title": "Use item from inventory", "description": "Asset/Type: Logic. Right click/use button consumes the item.", "status": "Not Started" },
            { "id": "p1-12-015", "title": "Use item from hotbar", "description": "Asset/Type: Logic. Hotbar key uses assigned item.", "status": "Not Started" },
            { "id": "p1-12-016", "title": "Reduce item stack after use", "description": "Asset/Type: Logic. Quantity decreases or item is removed.", "status": "Not Started" },
            { "id": "p1-12-017", "title": "Show notification after use", "description": "Asset/Type: UI. Example: Drank Water Bottle +25 Thirst.", "status": "Not Started" },
            { "id": "p1-12-018", "title": "Test all starter consumables", "description": "Asset/Type: Testing. Each consumable modifies correct stat.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-13-notifications-and-feedback",
      "title": "13. Notifications and Feedback",
      "sections": [
        {
          "id": "phase-1-13-tasks",
          "title": "Create feedback so the player understands what happened.",
          "tasks": [
            { "id": "p1-13-001", "title": "Create WBP_NotificationFeed", "description": "Asset/Type: Widget Blueprint. Queue of small messages.", "status": "Not Started" },
            { "id": "p1-13-002", "title": "Create WBP_NotificationItem", "description": "Asset/Type: Widget Blueprint. Single notification row/card.", "status": "Not Started" },
            { "id": "p1-13-003", "title": "Create BP_NotificationManager", "description": "Asset/Type: Actor/Manager. Central sender for messages.", "status": "Not Started" },
            { "id": "p1-13-004", "title": "Add pickup notification", "description": "Asset/Type: Feedback. Picked up Wood x3.", "status": "Not Started" },
            { "id": "p1-13-005", "title": "Add inventory full notification", "description": "Asset/Type: Feedback. Inventory full.", "status": "Not Started" },
            { "id": "p1-13-006", "title": "Add item used notification", "description": "Asset/Type: Feedback. Ate Berries +10 Hunger.", "status": "Not Started" },
            { "id": "p1-13-007", "title": "Add save complete notification", "description": "Asset/Type: Feedback. Game saved.", "status": "Not Started" },
            { "id": "p1-13-008", "title": "Add cannot interact notification", "description": "Asset/Type: Feedback. Cannot use this yet.", "status": "Not Started" },
            { "id": "p1-13-009", "title": "Add low stat warnings", "description": "Asset/Type: Feedback. You are hungry/thirsty/exhausted.", "status": "Not Started" },
            { "id": "p1-13-010", "title": "Add UI animation placeholder", "description": "Asset/Type: UI Polish. Fade in/out or slide animation later.", "status": "Not Started" },
            { "id": "p1-13-011", "title": "Test notification queue", "description": "Asset/Type: Testing. Multiple messages display without overlap.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-14-debug-and-testing-tools",
      "title": "14. Debug and Testing Tools",
      "sections": [
        {
          "id": "phase-1-14-tasks",
          "title": "Build simple debug helpers so every future system is easier to test.",
          "tasks": [
            { "id": "p1-14-001", "title": "Create BP_DebugSpawner", "description": "Asset/Type: Actor. Spawns test items, NPCs, or containers later.", "status": "Not Started" },
            { "id": "p1-14-002", "title": "Create BP_DebugTrigger", "description": "Asset/Type: Actor. Triggers test events manually.", "status": "Not Started" },
            { "id": "p1-14-003", "title": "Create WBP_DebugPanel placeholder", "description": "Asset/Type: Widget Blueprint. Displays current values if needed.", "status": "Not Started" },
            { "id": "p1-14-004", "title": "Add debug give item action", "description": "Asset/Type: Debug. Adds a selected item to inventory.", "status": "Not Started" },
            { "id": "p1-14-005", "title": "Add debug clear inventory action", "description": "Asset/Type: Debug. Clears all inventory slots.", "status": "Not Started" },
            { "id": "p1-14-006", "title": "Add debug damage player action", "description": "Asset/Type: Debug. Tests health/death.", "status": "Not Started" },
            { "id": "p1-14-007", "title": "Add debug restore stats action", "description": "Asset/Type: Debug. Restores health/stamina/hunger/thirst/battery.", "status": "Not Started" },
            { "id": "p1-14-008", "title": "Add debug save/load test action", "description": "Asset/Type: Debug. Triggers save/load quickly.", "status": "Not Started" },
            { "id": "p1-14-009", "title": "Add debug open all menus", "description": "Asset/Type: Debug. Quickly validates UI widgets.", "status": "Not Started" },
            { "id": "p1-14-010", "title": "Create Phase 1 test checklist", "description": "Asset/Type: Testing. A written checklist for each system.", "status": "Not Started" },
            { "id": "p1-14-011", "title": "Commit after every working system", "description": "Asset/Type: Git. One system per commit when possible.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-15-basic-audio-hooks",
      "title": "15. Basic Audio Hooks",
      "sections": [
        {
          "id": "phase-1-15-tasks",
          "title": "Add placeholder sounds early so UI and interactions feel responsive.",
          "tasks": [
            { "id": "p1-15-001", "title": "Add UI click sound placeholder", "description": "Asset/Type: Audio. Used by buttons.", "status": "Not Started" },
            { "id": "p1-15-002", "title": "Add UI hover sound placeholder", "description": "Asset/Type: Audio. Used by menu buttons.", "status": "Not Started" },
            { "id": "p1-15-003", "title": "Add inventory open sound", "description": "Asset/Type: Audio. TAB open.", "status": "Not Started" },
            { "id": "p1-15-004", "title": "Add inventory close sound", "description": "Asset/Type: Audio. TAB close.", "status": "Not Started" },
            { "id": "p1-15-005", "title": "Add pickup sound", "description": "Asset/Type: Audio. Item pickup feedback.", "status": "Not Started" },
            { "id": "p1-15-006", "title": "Add drop item sound", "description": "Asset/Type: Audio. World item drop feedback.", "status": "Not Started" },
            { "id": "p1-15-007", "title": "Add eat sound placeholder", "description": "Asset/Type: Audio. Food consumable.", "status": "Not Started" },
            { "id": "p1-15-008", "title": "Add drink sound placeholder", "description": "Asset/Type: Audio. Water consumable.", "status": "Not Started" },
            { "id": "p1-15-009", "title": "Add error/blocked sound", "description": "Asset/Type: Audio. Cannot interact/use.", "status": "Not Started" },
            { "id": "p1-15-010", "title": "Add save complete sound", "description": "Asset/Type: Audio. Save feedback.", "status": "Not Started" },
            { "id": "p1-15-011", "title": "Wire sounds as optional hooks", "description": "Asset/Type: Implementation. No final mix needed yet.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-16-integration-test",
      "title": "16. Phase 1 Integration Test",
      "sections": [
        {
          "id": "phase-1-16-tasks",
          "title": "The final gate before moving into maze, crafting depth, enemies, and world systems.",
          "tasks": [
            { "id": "p1-16-001", "title": "Start from Main Menu", "description": "Asset/Type: Integration Test. Game launches into menu or test flow.", "status": "Not Started" },
            { "id": "p1-16-002", "title": "Start game into Map_TestSystems", "description": "Asset/Type: Integration Test. Player spawns correctly.", "status": "Not Started" },
            { "id": "p1-16-003", "title": "Move, sprint, crouch, jump", "description": "Asset/Type: Integration Test. Player controls work.", "status": "Not Started" },
            { "id": "p1-16-004", "title": "Open and close Pause Menu", "description": "Asset/Type: Integration Test. ESC pause flow works.", "status": "Not Started" },
            { "id": "p1-16-005", "title": "Open and close Inventory", "description": "Asset/Type: Integration Test. TAB inventory flow works.", "status": "Not Started" },
            { "id": "p1-16-006", "title": "Pick up item", "description": "Asset/Type: Integration Test. Item enters inventory.", "status": "Not Started" },
            { "id": "p1-16-007", "title": "Drag item between slots", "description": "Asset/Type: Integration Test. Slot movement works.", "status": "Not Started" },
            { "id": "p1-16-008", "title": "Split stack", "description": "Asset/Type: Integration Test. Stack split works.", "status": "Not Started" },
            { "id": "p1-16-009", "title": "Drag item to hotbar", "description": "Asset/Type: Integration Test. Hotbar assignment works.", "status": "Not Started" },
            { "id": "p1-16-010", "title": "Use food consumable", "description": "Asset/Type: Integration Test. Hunger changes and stack decreases.", "status": "Not Started" },
            { "id": "p1-16-011", "title": "Use water consumable", "description": "Asset/Type: Integration Test. Thirst changes and stack decreases.", "status": "Not Started" },
            { "id": "p1-16-012", "title": "Open container", "description": "Asset/Type: Integration Test. Container UI appears.", "status": "Not Started" },
            { "id": "p1-16-013", "title": "Move item between backpack and container", "description": "Asset/Type: Integration Test. Transfer works.", "status": "Not Started" },
            { "id": "p1-16-014", "title": "Save game", "description": "Asset/Type: Integration Test. Save slot is created/updated.", "status": "Not Started" },
            { "id": "p1-16-015", "title": "Load game", "description": "Asset/Type: Integration Test. Player data restores.", "status": "Not Started" },
            { "id": "p1-16-016", "title": "Change settings", "description": "Asset/Type: Integration Test. Settings apply and persist.", "status": "Not Started" },
            { "id": "p1-16-017", "title": "Receive notifications", "description": "Asset/Type: Integration Test. Messages appear for actions.", "status": "Not Started" },
            { "id": "p1-16-018", "title": "Package a quick development build", "description": "Asset/Type: Build Test. Optional but useful after Phase 1.", "status": "Not Started" },
            { "id": "p1-16-019", "title": "Commit Phase 1 complete", "description": "Asset/Type: Git. Stable checkpoint before Phase 2.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-completion-gate",
      "title": "Phase 1 Completion Gate",
      "sections": [
        {
          "id": "phase-1-completion-gate-tasks",
          "title": "Required before starting Phase 2.",
          "tasks": [
            { "id": "p1-gate-001", "title": "All Phase 1 maps and assets compile/open correctly", "description": "Asset/Type: Project Health. Required before starting Phase 2.", "status": "Not Started" },
            { "id": "p1-gate-002", "title": "No critical Blueprint compile errors remain", "description": "Asset/Type: Project Health. Required before starting Phase 2.", "status": "Not Started" },
            { "id": "p1-gate-003", "title": "Game can start from menu or test map", "description": "Asset/Type: Flow. Required before starting Phase 2.", "status": "Not Started" },
            { "id": "p1-gate-004", "title": "Player controls work", "description": "Asset/Type: Player. Required before starting Phase 2.", "status": "Not Started" },
            { "id": "p1-gate-005", "title": "Inventory opens and closes with TAB", "description": "Asset/Type: Inventory. Required before starting Phase 2.", "status": "Not Started" },
            { "id": "p1-gate-006", "title": "Items can be picked up, moved, stacked, split, dropped, and used", "description": "Asset/Type: Inventory. Required before starting Phase 2.", "status": "Not Started" },
            { "id": "p1-gate-007", "title": "Containers open and allow item transfer", "description": "Asset/Type: Containers. Required before starting Phase 2.", "status": "Not Started" },
            { "id": "p1-gate-008", "title": "Stats update and consumables affect them", "description": "Asset/Type: Survival. Required before starting Phase 2.", "status": "Not Started" },
            { "id": "p1-gate-009", "title": "Settings save and reload", "description": "Asset/Type: Settings. Required before starting Phase 2.", "status": "Not Started" },
            { "id": "p1-gate-010", "title": "Save/load can store and restore basic player data", "description": "Asset/Type: Save/Load. Required before starting Phase 2.", "status": "Not Started" },
            { "id": "p1-gate-011", "title": "Notifications show player feedback", "description": "Asset/Type: UI. Required before starting Phase 2.", "status": "Not Started" },
            { "id": "p1-gate-012", "title": "A stable Git commit marks Phase 1 complete", "description": "Asset/Type: Version Control. Required before starting Phase 2.", "status": "Not Started" }
          ]
        }
      ]
    }
  ]
};
