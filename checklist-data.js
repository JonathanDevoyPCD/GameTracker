// Phase 1 simplified checklist for Ghost in Machines.
// Manually update task "status" values: Not Started, In Progress, Testing, Complete, Blocked.
window.CHECKLIST_DATA = {
  "project": "Ghost in Machines",
  "source": "Ghosts_in_Machines_Phase_1_Simplified_Checklist_v0.2.pdf",
  "generatedAt": "2026-05-18",
  "phases": [
    {
      "id": "phase-1-character-animation",
      "title": "Character Animation",
      "sections": [
        {
          "id": "character-animation-tasks",
          "title": "Using Epic Games Game Animation Sample and pulling it into the project.",
          "tasks": [
            { "id": "p1-anim-001", "title": "Import or add the Game Animation Sample to the project", "description": "Bring Epic's Game Animation Sample into the Unreal project carefully, ideally after a backup or clean commit so imported assets can be reviewed safely.", "status": "Not Started" },
            { "id": "p1-anim-002", "title": "Create or confirm the player character animation setup", "description": "Make sure the player character has the correct skeletal mesh, animation blueprint path, movement references, and folder structure for Phase 1 locomotion work.", "status": "Not Started" },
            { "id": "p1-anim-003", "title": "Set up idle, walk, run, sprint, jump, land, and crouch animations", "description": "Focus only on core movement animations needed for testing the player foundation. Combat, weapon handling, and cinematic animation should stay out of this phase.", "status": "Not Started" },
            { "id": "p1-anim-004", "title": "Connect animation blueprint to BP_PlayerSurvivorCharacter", "description": "Wire the animation blueprint into the player survivor character and confirm movement state changes are driving animation transitions correctly.", "status": "Not Started" },
            { "id": "p1-anim-005", "title": "Test movement animations in Map_TestSystems", "description": "Use the Phase 1 test map to check idle, walking, running, sprinting, jumping, landing, and crouching in a clean controlled area.", "status": "Not Started" },
            { "id": "p1-anim-006", "title": "Keep advanced combat animations for a later phase", "description": "This is an explicit scope guard. Do not build takedowns, weapon combos, finishers, or full combat animation systems until the basic player foundation is stable.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-menus",
      "title": "Menus",
      "sections": [
        {
          "id": "menus-tasks",
          "title": "Main Menu, Pause Menu, Inventory/Backpack, Containers/Storage, and supporting menu screens.",
          "tasks": [
            { "id": "p1-menu-001", "title": "Create Main Menu shell", "description": "Create the first usable menu screen with placeholder buttons for starting, loading, settings, credits, and exiting.", "status": "Not Started" },
            { "id": "p1-menu-002", "title": "Create Pause Menu shell", "description": "Create the in-game pause screen with placeholder Resume, Save, Load, Settings, and Exit to Main Menu options.", "status": "Not Started" },
            { "id": "p1-menu-003", "title": "Create Inventory/Backpack menu shell", "description": "Build the base inventory screen before final inventory logic is complete, so slot layout and navigation can be tested early.", "status": "Not Started" },
            { "id": "p1-menu-004", "title": "Create Container/Storage menu shell", "description": "Create a storage view that can later show the player inventory and the container inventory side by side.", "status": "Not Started" },
            { "id": "p1-menu-005", "title": "Create Loading Screen shell", "description": "Create a simple loading screen with placeholder visual treatment, tip/lore text, and loading feedback.", "status": "Not Started" },
            { "id": "p1-menu-006", "title": "Create Death Screen placeholder", "description": "Create a non-final death screen placeholder for later restart, return, and summary behavior.", "status": "Not Started" },
            { "id": "p1-menu-007", "title": "Create confirmation popups", "description": "Create reusable confirmation popups for New Game, Load Game, Save Game, Exit, and Delete Save actions so destructive choices are not instant.", "status": "Not Started" },
            { "id": "p1-menu-008", "title": "Create a basic UI Manager to open, close, and switch menus", "description": "Centralize UI creation and navigation so player controller and gameplay systems are not directly managing every widget.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-save-and-load",
      "title": "Save and Load",
      "sections": [
        {
          "id": "save-and-load-tasks",
          "title": "Built into the Main Menu and Pause Menu.",
          "tasks": [
            { "id": "p1-save-001", "title": "Create save game object for game progress", "description": "Create the main SaveGame class that will eventually store map, player, inventory, hotbar, stats, and container state.", "status": "Not Started" },
            { "id": "p1-save-002", "title": "Create separate settings save object", "description": "Keep game progress and user settings separate so graphics, audio, controls, and accessibility options can persist independently.", "status": "Not Started" },
            { "id": "p1-save-003", "title": "Add Save Game button to Pause Menu", "description": "Let the player trigger a save from the in-game pause menu once the basic save object exists.", "status": "Not Started" },
            { "id": "p1-save-004", "title": "Add Load Game button to Main Menu", "description": "Expose saved slots from the main menu so a player can continue from a previous test session.", "status": "Not Started" },
            { "id": "p1-save-005", "title": "Add Load Game option to Pause Menu if needed", "description": "Optional but useful for testing. Add it if loading during a session will help validate save state faster.", "status": "Not Started" },
            { "id": "p1-save-006", "title": "Save player location, current map, stats, inventory, hotbar, and containers", "description": "This is the core save payload for Phase 1. Keep it simple and stable before future systems add maze, AI, events, or world state.", "status": "Not Started" },
            { "id": "p1-save-007", "title": "Save slot name and timestamp", "description": "Store readable metadata so save slots are understandable in the UI.", "status": "Not Started" },
            { "id": "p1-save-008", "title": "Add confirmation popup before loading/deleting saves", "description": "Protect the user from losing current progress or deleting a save accidentally.", "status": "Not Started" },
            { "id": "p1-save-009", "title": "Test save/load in Map_TestSystems before using it in the main prototype", "description": "Validate save/load in a controlled test map first. Do not connect it to a larger prototype map until it reliably restores basic player data.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-settings",
      "title": "Settings",
      "sections": [
        {
          "id": "settings-tasks",
          "title": "Controls, Graphics, Audio, Video, Gameplay, and Accessibility.",
          "tasks": [
            { "id": "p1-settings-001", "title": "Create Settings Menu shell", "description": "Create the base settings screen and tab structure before wiring every setting to engine behavior.", "status": "Not Started" },
            { "id": "p1-settings-002", "title": "Add Video settings", "description": "Add resolution, fullscreen/windowed mode, and brightness/gamma controls.", "status": "Not Started" },
            { "id": "p1-settings-003", "title": "Add Graphics settings", "description": "Add quality preset, shadows, textures, foliage, effects, and view distance settings so performance can be adjusted early.", "status": "Not Started" },
            { "id": "p1-settings-004", "title": "Add Audio settings", "description": "Add master, music, SFX, ambience, and voice volume controls.", "status": "Not Started" },
            { "id": "p1-settings-005", "title": "Add Controls settings", "description": "Add mouse sensitivity, invert look, and keybind placeholder controls. Full rebinding can come later.", "status": "Not Started" },
            { "id": "p1-settings-006", "title": "Add Gameplay settings", "description": "Add subtitles, interaction prompts, and camera shake toggle settings.", "status": "Not Started" },
            { "id": "p1-settings-007", "title": "Add Accessibility settings", "description": "Add UI scale, motion blur toggle, and high-contrast prompts placeholder so usability concerns are considered early.", "status": "Not Started" },
            { "id": "p1-settings-008", "title": "Save and load settings separately from game progress", "description": "Settings should persist between sessions without depending on a game save slot.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-interactions-and-enhanced-input",
      "title": "Interactions and Enhanced Input",
      "sections": [
        {
          "id": "interactions-and-enhanced-input-tasks",
          "title": "Movement, pickup, drop, use, open, and interact prompts/icons.",
          "tasks": [
            { "id": "p1-input-001", "title": "Confirm Enhanced Input Mapping Contexts are created", "description": "Make sure player, UI, and inventory input contexts exist and can be switched when gameplay, menus, or inventory are active.", "status": "Not Started" },
            { "id": "p1-input-002", "title": "Set up core input actions", "description": "Set up movement, look, jump, sprint, crouch, interact, inventory, hotbar, flashlight, and pause inputs.", "status": "Not Started" },
            { "id": "p1-input-003", "title": "Create reusable interaction component", "description": "Build interaction behavior as a reusable component so the player can detect and interact with pickups, containers, doors, and later systems consistently.", "status": "Not Started" },
            { "id": "p1-input-004", "title": "Add first-person line trace interaction", "description": "Use a trace from the player camera to determine what object is currently interactable.", "status": "Not Started" },
            { "id": "p1-input-005", "title": "Show E icon/prompt on interactable objects", "description": "Display a clear prompt when the player looks at an interactable object.", "status": "Not Started" },
            { "id": "p1-input-006", "title": "Support tap interact and hold interact", "description": "Tap handles quick interactions like pickup/open. Hold is a placeholder for crates, harvesting, doors, or other longer actions.", "status": "Not Started" },
            { "id": "p1-input-007", "title": "Add pickup interaction", "description": "Let interactable world items enter inventory when the player uses the interaction key.", "status": "Not Started" },
            { "id": "p1-input-008", "title": "Add drop item interaction", "description": "Let inventory items return to the world as pickups where appropriate.", "status": "Not Started" },
            { "id": "p1-input-009", "title": "Add open container interaction", "description": "Let storage actors open the container interface when interacted with.", "status": "Not Started" },
            { "id": "p1-input-010", "title": "Add door/gate interaction placeholder", "description": "Add a simple placeholder interaction for future gates and doors without building full maze gate systems yet.", "status": "Not Started" },
            { "id": "p1-input-011", "title": "Add harvest/use station placeholders for later", "description": "Add only enough placeholder support to prove the interaction system can handle later harvesting or station-based actions.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-inventory-and-container-interactions",
      "title": "Inventory and Container Interactions",
      "sections": [
        {
          "id": "inventory-and-container-interactions-tasks",
          "title": "Backpack, hotbar, drag/drop, stacking, splitting, containers, and storage transfer.",
          "tasks": [
            { "id": "p1-inventory-001", "title": "Create item data system", "description": "Create item enum, rarity enum, item struct, inventory slot struct, and DT_Items so inventory behavior is data-driven.", "status": "Not Started" },
            { "id": "p1-inventory-002", "title": "Create inventory component", "description": "Store inventory slots and add, remove, move, split, drop, and use behavior in one reusable component.", "status": "Not Started" },
            { "id": "p1-inventory-003", "title": "Create hotbar/belt component", "description": "Support a small quick-use belt or hotbar that can hold assigned inventory items.", "status": "Not Started" },
            { "id": "p1-inventory-004", "title": "Create inventory UI based on the mockup", "description": "Build the visual structure for backpack slots, selected item details, actions, and hotbar integration.", "status": "Not Started" },
            { "id": "p1-inventory-005", "title": "Open/close inventory with TAB", "description": "TAB should reliably toggle inventory and switch input/cursor mode correctly.", "status": "Not Started" },
            { "id": "p1-inventory-006", "title": "Display item icons, names, stack counts, and selected item details", "description": "The inventory should communicate what the player has and what the selected item does.", "status": "Not Started" },
            { "id": "p1-inventory-007", "title": "Drag items around inventory slots", "description": "Allow moving items between backpack slots using the UI.", "status": "Not Started" },
            { "id": "p1-inventory-008", "title": "Stack matching items", "description": "Matching stackable items should combine up to their max stack size.", "status": "Not Started" },
            { "id": "p1-inventory-009", "title": "Split item stacks", "description": "Allow a stack to be divided into two slots for inventory and container management.", "status": "Not Started" },
            { "id": "p1-inventory-010", "title": "Drop item from inventory into the world", "description": "Dropping an item should remove it from inventory and spawn the correct pickup actor in the world.", "status": "Not Started" },
            { "id": "p1-inventory-011", "title": "Drag item to hotbar/belt", "description": "Let players assign inventory items to quick-use slots.", "status": "Not Started" },
            { "id": "p1-inventory-012", "title": "Open container/storage UI when interacting with storage", "description": "Interacting with a container should open the combined player inventory and storage interface.", "status": "Not Started" },
            { "id": "p1-inventory-013", "title": "Show player inventory and container storage side-by-side", "description": "The container UI should clearly separate backpack slots from storage slots.", "status": "Not Started" },
            { "id": "p1-inventory-014", "title": "Transfer single item between inventory and container", "description": "Support moving one item or one quantity at a time between player inventory and storage.", "status": "Not Started" },
            { "id": "p1-inventory-015", "title": "Transfer full stack between inventory and container", "description": "Support moving the whole stack in one action.", "status": "Not Started" },
            { "id": "p1-inventory-016", "title": "Transfer all matching items or all items where needed", "description": "Add convenience transfer behavior for testing and future quality of life.", "status": "Not Started" },
            { "id": "p1-inventory-017", "title": "Add item tooltip/hover info", "description": "Show item name, description, stack rules, and use category on hover or selection.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-stats",
      "title": "Stats",
      "sections": [
        {
          "id": "stats-tasks",
          "title": "Health, stamina, hunger, thirst, battery, and optional future status effects.",
          "tasks": [
            { "id": "p1-stats-001", "title": "Create Survival Stats component", "description": "Create the component that owns health, stamina, hunger, thirst, battery, and stat update behavior.", "status": "Not Started" },
            { "id": "p1-stats-002", "title": "Add Health and Max Health", "description": "Health is the core life value affected by damage, hunger/thirst failure, and future hazards.", "status": "Not Started" },
            { "id": "p1-stats-003", "title": "Add Stamina and Max Stamina", "description": "Stamina supports sprinting and future physical actions.", "status": "Not Started" },
            { "id": "p1-stats-004", "title": "Add Hunger and Max Hunger", "description": "Hunger creates survival pressure and connects to food consumables.", "status": "Not Started" },
            { "id": "p1-stats-005", "title": "Add Thirst and Max Thirst", "description": "Thirst creates survival pressure and connects to water consumables.", "status": "Not Started" },
            { "id": "p1-stats-006", "title": "Add Battery/Flashlight power if used in Phase 1", "description": "Only add active battery drain if flashlight power is included in Phase 1 testing.", "status": "Not Started" },
            { "id": "p1-stats-007", "title": "Connect stats to HUD and Inventory Vitals panel", "description": "Stats should be visible in gameplay and inventory so consumable effects can be tested clearly.", "status": "Not Started" },
            { "id": "p1-stats-008", "title": "Make sprint drain stamina and regenerate when not sprinting", "description": "Implement the first live stat loop before hunger/thirst complexity.", "status": "Not Started" },
            { "id": "p1-stats-009", "title": "Make hunger and thirst drain over time", "description": "Use simple Phase 1 rates that prove the system works without making testing frustrating.", "status": "Not Started" },
            { "id": "p1-stats-010", "title": "Make zero hunger/thirst affect health", "description": "When hunger or thirst reaches zero, apply health pressure or damage according to the prototype rules.", "status": "Not Started" },
            { "id": "p1-stats-011", "title": "Add low-stat warning notifications", "description": "Notify the player when health, stamina, hunger, thirst, or battery values become low.", "status": "Not Started" },
            { "id": "p1-stats-012", "title": "Add placeholders for future status effects", "description": "Add placeholders for bleeding, poison, injury, oxygen, and temperature without building those full systems yet.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-consumables",
      "title": "Consumables",
      "sections": [
        {
          "id": "consumables-tasks",
          "title": "Water, food groups, medicine, batteries, and stat restoration values.",
          "tasks": [
            { "id": "p1-consumables-001", "title": "Create consumable item type/category", "description": "Consumables should be identifiable by item data so inventory and hotbar use can call the correct stat effect.", "status": "Not Started" },
            { "id": "p1-consumables-002", "title": "Create Water Group 1, Group 2, Group 3 items", "description": "Create water items with different thirst restore values so small, medium, and high-value water can be tested.", "status": "Not Started" },
            { "id": "p1-consumables-003", "title": "Create Food Group 1, Group 2, Group 3 items", "description": "Create food items with different hunger restore values so food balance can be tested later.", "status": "Not Started" },
            { "id": "p1-consumables-004", "title": "Create medicine consumables", "description": "Add basic medicine such as bandage and simple healing item for Phase 1 testing.", "status": "Not Started" },
            { "id": "p1-consumables-005", "title": "Create battery consumables if flashlight battery is active", "description": "Only add battery consumables if battery power is part of the active Phase 1 stats setup.", "status": "Not Started" },
            { "id": "p1-consumables-006", "title": "Define restore values in item data", "description": "Store restore values in DT_Items or a consumable data table so effects are data-driven.", "status": "Not Started" },
            { "id": "p1-consumables-007", "title": "Allow consumables to be used from inventory", "description": "Using a consumable from inventory should apply the correct effect and update the UI.", "status": "Not Started" },
            { "id": "p1-consumables-008", "title": "Allow consumables to be used from hotbar", "description": "Hotbar use should trigger the same effect as inventory use.", "status": "Not Started" },
            { "id": "p1-consumables-009", "title": "Decrease/remove item stack after use", "description": "After consuming an item, reduce its quantity or remove it from the slot if the stack reaches zero.", "status": "Not Started" },
            { "id": "p1-consumables-010", "title": "Show notification after consuming item", "description": "Tell the player what changed, such as +25 Thirst or +10 Hunger.", "status": "Not Started" },
            { "id": "p1-consumables-011", "title": "Test each consumable group against the stats system", "description": "Verify every starter consumable modifies the intended stat and does not break stacks, hotbar use, or HUD updates.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-notifications",
      "title": "Notifications",
      "sections": [
        {
          "id": "notifications-tasks",
          "title": "Small feedback messages for pickups, saves, warnings, errors, and system events.",
          "tasks": [
            { "id": "p1-notify-001", "title": "Create Notification Feed widget", "description": "Create the widget that displays queued messages in a consistent location.", "status": "Not Started" },
            { "id": "p1-notify-002", "title": "Create notification manager or simple UI event system", "description": "Centralize message sending so pickups, saves, warnings, and errors use the same feedback path.", "status": "Not Started" },
            { "id": "p1-notify-003", "title": "Show pickup notifications", "description": "Display short feedback such as Picked up Wood x3.", "status": "Not Started" },
            { "id": "p1-notify-004", "title": "Show inventory full notification", "description": "Tell the player when an item cannot be picked up because inventory is full.", "status": "Not Started" },
            { "id": "p1-notify-005", "title": "Show save complete notification", "description": "Confirm that a save action succeeded.", "status": "Not Started" },
            { "id": "p1-notify-006", "title": "Show low health/stamina/hunger/thirst warnings", "description": "Warn the player when important survival values become low.", "status": "Not Started" },
            { "id": "p1-notify-007", "title": "Show interaction blocked notification", "description": "Explain when an action cannot be performed yet, such as missing a tool or using an unavailable object.", "status": "Not Started" },
            { "id": "p1-notify-008", "title": "Show item used/consumed notification", "description": "Confirm item use and communicate the effect to the player.", "status": "Not Started" },
            { "id": "p1-notify-009", "title": "Test notification queue", "description": "Make sure multiple messages appear in order and do not overlap badly.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-debug-and-testing-tools",
      "title": "Debug and Testing Tools",
      "sections": [
        {
          "id": "debug-and-testing-tools-tasks",
          "title": "Simple tools to speed up testing while building systems.",
          "tasks": [
            { "id": "p1-debug-001", "title": "Create debug spawner for test items", "description": "Add a simple way to spawn known test items without manually placing every item in the level.", "status": "Not Started" },
            { "id": "p1-debug-002", "title": "Create debug keys or buttons to damage/heal player", "description": "Add fast controls to test health, damage, healing, death thresholds, and UI updates.", "status": "Not Started" },
            { "id": "p1-debug-003", "title": "Create debug keys or buttons to drain/refill hunger and thirst", "description": "Make survival stat testing quick without waiting for long drain timers.", "status": "Not Started" },
            { "id": "p1-debug-004", "title": "Create debug action to add test items to inventory", "description": "Add selected items directly to inventory for testing UI, stacks, hotbar, and consumables.", "status": "Not Started" },
            { "id": "p1-debug-005", "title": "Create debug action to clear inventory", "description": "Reset the inventory quickly between test runs.", "status": "Not Started" },
            { "id": "p1-debug-006", "title": "Create debug action to save/load test slot", "description": "Trigger a known save slot quickly while testing save/load behavior.", "status": "Not Started" },
            { "id": "p1-debug-007", "title": "Create debug text or on-screen values", "description": "Show current stats and inventory counts while systems are being built.", "status": "Not Started" },
            { "id": "p1-debug-008", "title": "Keep debug tools out of final shipping build", "description": "Make sure debug shortcuts and panels are development-only and can be disabled before packaging release builds.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-basic-audio-hooks",
      "title": "Basic Audio Hooks",
      "sections": [
        {
          "id": "basic-audio-hooks-tasks",
          "title": "Placeholder sounds for UI and core item interactions.",
          "tasks": [
            { "id": "p1-audio-001", "title": "Add UI click sound placeholder", "description": "Add a temporary click sound for menu and UI button feedback.", "status": "Not Started" },
            { "id": "p1-audio-002", "title": "Add inventory open sound placeholder", "description": "Play a small placeholder sound when the inventory opens.", "status": "Not Started" },
            { "id": "p1-audio-003", "title": "Add inventory close sound placeholder", "description": "Play a small placeholder sound when the inventory closes.", "status": "Not Started" },
            { "id": "p1-audio-004", "title": "Add pickup item sound placeholder", "description": "Play feedback when the player picks up an item.", "status": "Not Started" },
            { "id": "p1-audio-005", "title": "Add drop item sound placeholder", "description": "Play feedback when the player drops an item into the world.", "status": "Not Started" },
            { "id": "p1-audio-006", "title": "Add eat sound placeholder", "description": "Play feedback when food is consumed.", "status": "Not Started" },
            { "id": "p1-audio-007", "title": "Add drink sound placeholder", "description": "Play feedback when water is consumed.", "status": "Not Started" },
            { "id": "p1-audio-008", "title": "Add save complete sound placeholder", "description": "Play feedback when saving succeeds.", "status": "Not Started" },
            { "id": "p1-audio-009", "title": "Add error/blocked sound placeholder", "description": "Play feedback when an action cannot be completed.", "status": "Not Started" }
          ]
        }
      ]
    },
    {
      "id": "phase-1-final-integration-test",
      "title": "Phase 1 Final Integration Test",
      "sections": [
        {
          "id": "phase-1-final-integration-test-tasks",
          "title": "Everything in Phase 1 should work together before moving to maze gates, crafting, enemies, or AI.",
          "tasks": [
            { "id": "p1-final-001", "title": "Start from Main Menu", "description": "Launch the game and begin from the menu flow rather than directly from a test map.", "status": "Not Started" },
            { "id": "p1-final-002", "title": "Open Settings and change at least one value", "description": "Confirm settings UI works and that a changed value is applied and saved.", "status": "Not Started" },
            { "id": "p1-final-003", "title": "Start game into test map", "description": "Use the intended Phase 1 test map to validate systems together.", "status": "Not Started" },
            { "id": "p1-final-004", "title": "Move, sprint, crouch, jump, and interact", "description": "Confirm the full basic player control loop works with interaction enabled.", "status": "Not Started" },
            { "id": "p1-final-005", "title": "Pick up items", "description": "Verify item pickups enter inventory and trigger feedback.", "status": "Not Started" },
            { "id": "p1-final-006", "title": "Open inventory with TAB", "description": "Confirm inventory opens, closes, and switches input/cursor state correctly.", "status": "Not Started" },
            { "id": "p1-final-007", "title": "Drag items, stack items, split stacks, and drop items", "description": "Validate the core inventory manipulation loop.", "status": "Not Started" },
            { "id": "p1-final-008", "title": "Move item to hotbar and use it", "description": "Confirm hotbar assignment and quick-use behavior work.", "status": "Not Started" },
            { "id": "p1-final-009", "title": "Open a container and transfer items both ways", "description": "Confirm storage UI opens and item transfer works from player to container and back.", "status": "Not Started" },
            { "id": "p1-final-010", "title": "Eat and drink consumables", "description": "Use food and water items through the intended UI/hotbar paths.", "status": "Not Started" },
            { "id": "p1-final-011", "title": "Confirm stats update", "description": "Check that health, stamina, hunger, thirst, and battery update correctly where relevant.", "status": "Not Started" },
            { "id": "p1-final-012", "title": "Save from Pause Menu", "description": "Create or update a save slot from the pause menu.", "status": "Not Started" },
            { "id": "p1-final-013", "title": "Return to Main Menu and load save", "description": "Leave the session, return to the main menu, and load the saved slot.", "status": "Not Started" },
            { "id": "p1-final-014", "title": "Confirm inventory, stats, location, and settings persist", "description": "Verify the loaded state restores the important Phase 1 data correctly.", "status": "Not Started" },
            { "id": "p1-final-015", "title": "Commit Phase 1 stable build to GitHub", "description": "Create a stable GitHub checkpoint before moving into Phase 2 work.", "status": "Not Started" }
          ]
        }
      ]
    }
  ]
};
