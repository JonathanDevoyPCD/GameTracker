// Curated production roadmap for Ghost in Machines.
// Edit task "status" values manually: Not Started, In Progress, Testing, Complete, Blocked.
// Optional task image: add "imageUrl": "images/example.jpg".
window.CHECKLIST_DATA = {
  "project": "Ghost in Machines",
  "source": "Curated roadmap based on the provided GameDev planning PDFs",
  "generatedAt": "2026-05-15",
  "phases": [
    {
      "id": "phase-00-milestone-gates",
      "title": "Phase 00 - Milestone Gates",
      "sections": [
        {
          "id": "00-01-production-gates",
          "title": "00.01 Production Gates",
          "tasks": [
            {
              "id": "task-00-01-001",
              "title": "Concept gate approved",
              "description": "The game identity, target platform, core loop, and IP-safe direction are clear enough for production decisions.",
              "status": "Not Started"
            },
            {
              "id": "task-00-01-002",
              "title": "Foundation gate approved",
              "description": "Repository, Unreal project, folder structure, plugins, input setup, and base maps exist and are committed.",
              "status": "Not Started"
            },
            {
              "id": "task-00-01-003",
              "title": "Prototype gate approved",
              "description": "A small test map proves movement, interaction, inventory, survival stats, and one basic threat loop.",
              "status": "Not Started"
            },
            {
              "id": "task-00-01-004",
              "title": "AI gate approved",
              "description": "NPC Survivors and machine enemies can perceive, move, attack or flee, die, and update match state.",
              "status": "Not Started"
            },
            {
              "id": "task-00-01-005",
              "title": "Vertical slice gate approved",
              "description": "One polished playable run exists from menu to spawn, exploration, encounter, death or survival outcome.",
              "status": "Not Started"
            },
            {
              "id": "task-00-01-006",
              "title": "Alpha gate approved",
              "description": "All major planned systems are implemented at rough quality and can be tested together.",
              "status": "Not Started"
            },
            {
              "id": "task-00-01-007",
              "title": "Beta gate approved",
              "description": "The game is content-complete for the first release target and work shifts mainly to fixing and balancing.",
              "status": "Not Started"
            },
            {
              "id": "task-00-01-008",
              "title": "Steam readiness gate approved",
              "description": "Store page, builds, screenshots, trailer, depots, and review requirements are ready for submission.",
              "status": "Not Started"
            },
            {
              "id": "task-00-01-009",
              "title": "Launch gate approved",
              "description": "Release candidate is approved, public messaging is ready, and hotfix support is prepared.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-01-creative-foundation",
      "title": "Phase 01 - Creative Foundation",
      "sections": [
        {
          "id": "01-01-project-identity",
          "title": "01.01 Project Identity",
          "tasks": [
            {
              "id": "task-01-01-001",
              "title": "Lock the core pitch",
              "description": "Write a one-sentence pitch that explains the Maze, Safe Zone, machine threat, Survivors, and survival loop.",
              "status": "Not Started"
            },
            {
              "id": "task-01-01-002",
              "title": "Confirm final working title",
              "description": "Use Ghost in Machines consistently across files, UI, repo names, docs, and public-facing tracker copy.",
              "status": "Not Started"
            },
            {
              "id": "task-01-01-003",
              "title": "Define the player fantasy",
              "description": "Describe what the player should feel minute to minute: vulnerable, watched, resourceful, and hunted.",
              "status": "Not Started"
            },
            {
              "id": "task-01-01-004",
              "title": "Define the first playable scope",
              "description": "Limit the first target to one Safe Zone, one small Maze section, one machine enemy, and a few NPC Survivors.",
              "status": "Not Started"
            },
            {
              "id": "task-01-01-005",
              "title": "Write the anti-scope-creep rules",
              "description": "List features that are future scope, including multiplayer, huge procedural maps, deep story branches, and full release content.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "01-02-world-rules",
          "title": "01.02 World Rules",
          "tasks": [
            {
              "id": "task-01-02-001",
              "title": "Define Safe Zone rules",
              "description": "Document what the player can safely do in the hub area and what dangers still remain there.",
              "status": "Not Started"
            },
            {
              "id": "task-01-02-002",
              "title": "Define Maze rules",
              "description": "Document when gates open, what the player can find inside, and why the Maze becomes dangerous.",
              "status": "Not Started"
            },
            {
              "id": "task-01-02-003",
              "title": "Define machine threat classes",
              "description": "Create clear Class C, Class B, and Class A enemy roles so enemy development scales logically.",
              "status": "Not Started"
            },
            {
              "id": "task-01-02-004",
              "title": "Define Survivor NPC role",
              "description": "Clarify whether NPC Survivors are rivals, allies, temporary threats, story flavor, or all of those depending on archetype.",
              "status": "Not Started"
            },
            {
              "id": "task-01-02-005",
              "title": "Create IP-safe terminology list",
              "description": "Keep original terms for all public text and avoid protected or too-similar terminology from existing arena-survival fiction.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-02-documentation-and-planning",
      "title": "Phase 02 - Documentation and Planning",
      "sections": [
        {
          "id": "02-01-core-documents",
          "title": "02.01 Core Documents",
          "tasks": [
            {
              "id": "task-02-01-001",
              "title": "Create the merged GDD",
              "description": "Replace older project naming and merge the Ghost in Machines concept with the useful survival-trial systems.",
              "status": "Not Started"
            },
            {
              "id": "task-02-01-002",
              "title": "Create the prototype specification",
              "description": "Write exactly what must be playable in the first prototype and how success will be judged.",
              "status": "Not Started"
            },
            {
              "id": "task-02-01-003",
              "title": "Create the vertical slice specification",
              "description": "Define the higher-quality demo target: map area, systems, enemy count, UI, audio, and win/fail conditions.",
              "status": "Not Started"
            },
            {
              "id": "task-02-01-004",
              "title": "Create a testing checklist template",
              "description": "Standardize how every system is tested before it is considered done.",
              "status": "Not Started"
            },
            {
              "id": "task-02-01-005",
              "title": "Create a changelog format",
              "description": "Use a repeatable format for devlogs, internal notes, build versions, and public updates.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "02-02-production-tracking",
          "title": "02.02 Production Tracking",
          "tasks": [
            {
              "id": "task-02-02-001",
              "title": "Finalize this public progress tracker",
              "description": "Keep the public page read-only and use it as the high-level status board for the team and followers.",
              "status": "Not Started"
            },
            {
              "id": "task-02-02-002",
              "title": "Create internal issue labels",
              "description": "Prepare labels such as planning, blueprint, ui, ai, combat, world, bug, polish, blocker, and steam.",
              "status": "Not Started"
            },
            {
              "id": "task-02-02-003",
              "title": "Create milestone buckets",
              "description": "Use Foundation, Prototype, AI, Vertical Slice, Alpha, Beta, Steam, and Launch as main planning buckets.",
              "status": "Not Started"
            },
            {
              "id": "task-02-02-004",
              "title": "Define done criteria",
              "description": "For each feature, require implementation, test map proof, UI feedback if needed, bug pass, and commit evidence.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-03-repository-and-unreal-foundation",
      "title": "Phase 03 - Repository and Unreal Foundation",
      "sections": [
        {
          "id": "03-01-repository",
          "title": "03.01 Repository",
          "tasks": [
            {
              "id": "task-03-01-001",
              "title": "Create the Unreal repository",
              "description": "Create the actual game repository separately from the public tracker if the tracker remains a standalone website.",
              "status": "Not Started"
            },
            {
              "id": "task-03-01-002",
              "title": "Add Unreal .gitignore",
              "description": "Ignore generated folders like Binaries, Intermediate, Saved, DerivedDataCache, and local build output.",
              "status": "Not Started"
            },
            {
              "id": "task-03-01-003",
              "title": "Configure Git LFS",
              "description": "Track Unreal binary assets such as uasset, umap, wav, png, fbx, and other large art files before adding them.",
              "status": "Not Started"
            },
            {
              "id": "task-03-01-004",
              "title": "Create branch rules",
              "description": "Use main for stable work, dev for integration, and feature branches for individual systems.",
              "status": "Not Started"
            },
            {
              "id": "task-03-01-005",
              "title": "Commit initial docs and folder layout",
              "description": "Make the first commit only after the repo contains a readable structure and essential planning documents.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "03-02-unreal-project",
          "title": "03.02 Unreal Project",
          "tasks": [
            {
              "id": "task-03-02-001",
              "title": "Install and verify Unreal Engine 5.7",
              "description": "Confirm the target engine opens cleanly on the main development machine before project creation.",
              "status": "Not Started"
            },
            {
              "id": "task-03-02-002",
              "title": "Create a Blueprint-first project",
              "description": "Start with a clean project suitable for modular Blueprint systems and later C++ only where needed.",
              "status": "Not Started"
            },
            {
              "id": "task-03-02-003",
              "title": "Enable required plugins",
              "description": "Enable Enhanced Input, Gameplay Tags, AI tools, Navigation, Niagara, PCG, Modeling Tools, and NoGlyph support.",
              "status": "Not Started"
            },
            {
              "id": "task-03-02-004",
              "title": "Create content folder structure",
              "description": "Create folders for Blueprints, Player, AI, Machines, UI, Maps, Items, Data, Materials, Audio, and Dev/Test.",
              "status": "Not Started"
            },
            {
              "id": "task-03-02-005",
              "title": "Create baseline test maps",
              "description": "Create Map_TestSystems, Map_TestAI, Map_TestMaze, Map_PrototypeSafeZone, and Map_MainMenu.",
              "status": "Not Started"
            },
            {
              "id": "task-03-02-006",
              "title": "Save and commit the clean baseline",
              "description": "Commit before any experimental gameplay work so the project has a known-good starting point.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-04-core-architecture",
      "title": "Phase 04 - Core Architecture",
      "sections": [
        {
          "id": "04-01-data-and-tags",
          "title": "04.01 Data and Tags",
          "tasks": [
            {
              "id": "task-04-01-001",
              "title": "Create gameplay tag categories",
              "description": "Define tags for items, damage types, status effects, AI states, zones, machines, and interaction types.",
              "status": "Not Started"
            },
            {
              "id": "task-04-01-002",
              "title": "Create shared data structs",
              "description": "Create item, inventory slot, crafting recipe, damage event, status effect, and AI archetype structs.",
              "status": "Not Started"
            },
            {
              "id": "task-04-01-003",
              "title": "Create data tables",
              "description": "Create initial tables for items, recipes, NPC archetypes, machine classes, loot pools, and event definitions.",
              "status": "Not Started"
            },
            {
              "id": "task-04-01-004",
              "title": "Create base interfaces",
              "description": "Define interactable, damageable, inventory owner, and AI stimulus interfaces before implementing specific actors.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "04-02-managers-and-components",
          "title": "04.02 Managers and Components",
          "tasks": [
            {
              "id": "task-04-02-001",
              "title": "Create game state manager",
              "description": "Track match phase, survivor count, time state, event state, and win/loss conditions from one reliable place.",
              "status": "Not Started"
            },
            {
              "id": "task-04-02-002",
              "title": "Create reusable health component",
              "description": "Use the same health, damage, death, and healing logic for player, NPC Survivors, and machines where appropriate.",
              "status": "Not Started"
            },
            {
              "id": "task-04-02-003",
              "title": "Create reusable inventory component",
              "description": "Build inventory as a component so player, NPCs, crates, caches, and backpacks can share inventory behavior.",
              "status": "Not Started"
            },
            {
              "id": "task-04-02-004",
              "title": "Create debug tools",
              "description": "Add debug UI or console helpers for time, AI state, player stats, inventory contents, and event triggering.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-05-player-foundation",
      "title": "Phase 05 - Player Foundation",
      "sections": [
        {
          "id": "05-01-character-and-input",
          "title": "05.01 Character and Input",
          "tasks": [
            {
              "id": "task-05-01-001",
              "title": "Create player character Blueprint",
              "description": "Build the first-person player actor with camera, collision, movement component, and core references.",
              "status": "Not Started"
            },
            {
              "id": "task-05-01-002",
              "title": "Implement Enhanced Input actions",
              "description": "Add movement, look, jump, sprint, crouch, interact, inventory, hotbar, flashlight, pause, and debug mappings.",
              "status": "Not Started"
            },
            {
              "id": "task-05-01-003",
              "title": "Implement movement states",
              "description": "Make walking, sprinting, crouching, jumping, and exhaustion-related movement changes work in test maps.",
              "status": "Not Started"
            },
            {
              "id": "task-05-01-004",
              "title": "Add camera feedback placeholders",
              "description": "Add simple camera shake, FOV, head bob, or hit feedback placeholders only where they support gameplay readability.",
              "status": "Not Started"
            },
            {
              "id": "task-05-01-005",
              "title": "Test player traversal",
              "description": "Verify the player can move through test corridors, stairs, gates, foliage gaps, and tight Maze spaces without snagging.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "05-02-hud-foundation",
          "title": "05.02 HUD Foundation",
          "tasks": [
            {
              "id": "task-05-02-001",
              "title": "Create main HUD widget",
              "description": "Create the base HUD shell that can show survival stats, prompts, notifications, and match information.",
              "status": "Not Started"
            },
            {
              "id": "task-05-02-002",
              "title": "Display survival stats",
              "description": "Show health, stamina, hunger, thirst, and battery in a readable layout that works during movement.",
              "status": "Not Started"
            },
            {
              "id": "task-05-02-003",
              "title": "Display match state placeholders",
              "description": "Add Survivor count, current zone, day/night state, and current event placeholders before wiring final systems.",
              "status": "Not Started"
            },
            {
              "id": "task-05-02-004",
              "title": "Create notification queue",
              "description": "Support warnings, item pickups, Survivor deaths, gate changes, and event alerts without overlapping UI.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-06-interaction-inventory-and-items",
      "title": "Phase 06 - Interaction, Inventory, and Items",
      "sections": [
        {
          "id": "06-01-interaction-system",
          "title": "06.01 Interaction System",
          "tasks": [
            {
              "id": "task-06-01-001",
              "title": "Create interaction trace",
              "description": "Use a first-person trace to detect interactable objects and keep the current target updated.",
              "status": "Not Started"
            },
            {
              "id": "task-06-01-002",
              "title": "Create interaction prompt",
              "description": "Show clear prompt text for tap, hold, locked, missing tool, and cannot-use interaction states.",
              "status": "Not Started"
            },
            {
              "id": "task-06-01-003",
              "title": "Implement tap and hold interactions",
              "description": "Support quick pickups and longer actions such as harvesting, opening heavy crates, or repairing gates.",
              "status": "Not Started"
            },
            {
              "id": "task-06-01-004",
              "title": "Create test interactables",
              "description": "Make pickup item, crate, door, water source, harvestable plant, machine panel, and corpse/carcass test actors.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "06-02-inventory-and-hotbar",
          "title": "06.02 Inventory and Hotbar",
          "tasks": [
            {
              "id": "task-06-02-001",
              "title": "Implement inventory slots",
              "description": "Add fixed slot count, stack rules, add/remove/drop/use functions, and basic validation.",
              "status": "Not Started"
            },
            {
              "id": "task-06-02-002",
              "title": "Create starter item set",
              "description": "Add placeholder rows for food, water, bandage, battery, scrap, wood, stone, fiber, knife, spear, and trap.",
              "status": "Not Started"
            },
            {
              "id": "task-06-02-003",
              "title": "Create inventory UI",
              "description": "Show slots, icons, names, stack counts, selected item details, and open/close behavior.",
              "status": "Not Started"
            },
            {
              "id": "task-06-02-004",
              "title": "Create six-slot hotbar",
              "description": "Allow assignment and quick use of selected consumables, tools, weapons, and flashlight-related items.",
              "status": "Not Started"
            },
            {
              "id": "task-06-02-005",
              "title": "Test item pickup and use loop",
              "description": "Verify item pickup, stacking, use, drop, hotbar assignment, and UI refresh in Map_TestSystems.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-07-survival-and-crafting",
      "title": "Phase 07 - Survival and Crafting",
      "sections": [
        {
          "id": "07-01-survival-stats",
          "title": "07.01 Survival Stats",
          "tasks": [
            {
              "id": "task-07-01-001",
              "title": "Implement health and damage",
              "description": "Support damage, healing, death state, damage source display, and HUD updates.",
              "status": "Not Started"
            },
            {
              "id": "task-07-01-002",
              "title": "Implement stamina",
              "description": "Support sprint drain, regeneration, exhaustion, and movement penalties.",
              "status": "Not Started"
            },
            {
              "id": "task-07-01-003",
              "title": "Implement hunger and thirst",
              "description": "Drain stats over time, trigger warnings, allow food and water consumption, and apply starvation/dehydration damage.",
              "status": "Not Started"
            },
            {
              "id": "task-07-01-004",
              "title": "Implement status effects",
              "description": "Add bleeding, poison, injury, exhaustion, UI icons, treatment items, and removal testing.",
              "status": "Not Started"
            },
            {
              "id": "task-07-01-005",
              "title": "Balance first survival values",
              "description": "Set early values so survival pressure exists but does not block testing the rest of the prototype.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "07-02-crafting-and-harvesting",
          "title": "07.02 Crafting and Harvesting",
          "tasks": [
            {
              "id": "task-07-02-001",
              "title": "Create recipe data",
              "description": "Define recipe rows for bandage, spear, knife, trap, torch/flashlight support item, and simple repair item.",
              "status": "Not Started"
            },
            {
              "id": "task-07-02-002",
              "title": "Implement crafting component",
              "description": "Check required materials, consume ingredients, show progress, complete the craft, and add the result to inventory.",
              "status": "Not Started"
            },
            {
              "id": "task-07-02-003",
              "title": "Create crafting UI",
              "description": "Show known recipes, requirements, owned materials, craft button, progress state, and blocked reasons.",
              "status": "Not Started"
            },
            {
              "id": "task-07-02-004",
              "title": "Implement harvestable resources",
              "description": "Create wood, stone, fiber, herbs, berries, scrap, and carcass resources with tool checks where needed.",
              "status": "Not Started"
            },
            {
              "id": "task-07-02-005",
              "title": "Test gather-craft-use loop",
              "description": "Verify the player can collect resources, craft a useful item, and use it in the same test session.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-08-world-blockout",
      "title": "Phase 08 - World Blockout",
      "sections": [
        {
          "id": "08-01-safe-zone",
          "title": "08.01 Safe Zone",
          "tasks": [
            {
              "id": "task-08-01-001",
              "title": "Block out the Safe Zone",
              "description": "Create the central hub layout with player spawn, storage area, crafting area, gate access, and clear landmarks.",
              "status": "Not Started"
            },
            {
              "id": "task-08-01-002",
              "title": "Add Safe Zone trigger volumes",
              "description": "Detect entering and leaving the hub so HUD, audio, AI behavior, and rules can react.",
              "status": "Not Started"
            },
            {
              "id": "task-08-01-003",
              "title": "Add Safe Zone resource placeholders",
              "description": "Place enough starter resources and interactables to test early player preparation.",
              "status": "Not Started"
            },
            {
              "id": "task-08-01-004",
              "title": "Add hub ambience placeholder",
              "description": "Use simple audio and lighting differences so the hub immediately feels distinct from the Maze.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "08-02-maze",
          "title": "08.02 Maze",
          "tasks": [
            {
              "id": "task-08-02-001",
              "title": "Create modular Maze kit",
              "description": "Create basic wall, corner, broken wall, corridor, junction, dead-end, gate, and floor pieces.",
              "status": "Not Started"
            },
            {
              "id": "task-08-02-002",
              "title": "Build first small Maze section",
              "description": "Create a compact test layout with a clear entrance, branching route, resource area, danger area, and return path.",
              "status": "Not Started"
            },
            {
              "id": "task-08-02-003",
              "title": "Add Maze navigation mesh",
              "description": "Make sure player traversal and AI movement can be tested inside the Maze from the start.",
              "status": "Not Started"
            },
            {
              "id": "task-08-02-004",
              "title": "Add first overgrowth pass",
              "description": "Use moss, vines, foliage, grime, and debris placeholders to prove the visual direction without over-polishing.",
              "status": "Not Started"
            },
            {
              "id": "task-08-02-005",
              "title": "Test Maze readability",
              "description": "Verify the player can navigate, get tense, but still understand exits, landmarks, and important interactables.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-09-time-gates-and-events",
      "title": "Phase 09 - Time, Gates, and Events",
      "sections": [
        {
          "id": "09-01-time-and-gates",
          "title": "09.01 Time and Gates",
          "tasks": [
            {
              "id": "task-09-01-001",
              "title": "Create time-of-day system",
              "description": "Support day, warning, night, and debug time controls for testing gameplay rules quickly.",
              "status": "Not Started"
            },
            {
              "id": "task-09-01-002",
              "title": "Implement Maze gate states",
              "description": "Support locked, opening, open, closing, closed, malfunctioning, and forced-open states.",
              "status": "Not Started"
            },
            {
              "id": "task-09-01-003",
              "title": "Add gate warnings",
              "description": "Notify the player before gates close, when gates malfunction, and when night danger escalates.",
              "status": "Not Started"
            },
            {
              "id": "task-09-01-004",
              "title": "Test day/night gameplay loop",
              "description": "Verify day exploration, warning return pressure, night danger, and Safe Zone recovery feel connected.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "09-02-event-system",
          "title": "09.02 Event System",
          "tasks": [
            {
              "id": "task-09-02-001",
              "title": "Create event manager",
              "description": "Schedule, warn, start, and end events from a central manager that can be debug-triggered.",
              "status": "Not Started"
            },
            {
              "id": "task-09-02-002",
              "title": "Implement first supply/cache event",
              "description": "Spawn a useful resource cache or drop that draws the player and NPCs toward a risk/reward location.",
              "status": "Not Started"
            },
            {
              "id": "task-09-02-003",
              "title": "Implement first machine surge event",
              "description": "Temporarily increase machine activity or patrol danger to prove the event system can change pacing.",
              "status": "Not Started"
            },
            {
              "id": "task-09-02-004",
              "title": "Implement first visibility/weather event",
              "description": "Add fog, darkness, sparks, or environmental noise that changes stealth and navigation.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-10-stealth-perception-and-combat",
      "title": "Phase 10 - Stealth, Perception, and Combat",
      "sections": [
        {
          "id": "10-01-stealth-and-noise",
          "title": "10.01 Stealth and Noise",
          "tasks": [
            {
              "id": "task-10-01-001",
              "title": "Implement noise generation",
              "description": "Generate noise values for sprinting, jumping, harvesting, opening crates, attacking, and using loud tools.",
              "status": "Not Started"
            },
            {
              "id": "task-10-01-002",
              "title": "Implement visibility score",
              "description": "Track visibility changes from crouching, foliage, darkness, flashlight use, movement speed, and open spaces.",
              "status": "Not Started"
            },
            {
              "id": "task-10-01-003",
              "title": "Connect stealth to AI perception",
              "description": "Make machines and NPCs react to noise and visibility in predictable but tense ways.",
              "status": "Not Started"
            },
            {
              "id": "task-10-01-004",
              "title": "Add debug perception visualization",
              "description": "Display hearing radius, sight cones, current suspicion, and target state during testing.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "10-02-combat",
          "title": "10.02 Combat",
          "tasks": [
            {
              "id": "task-10-02-001",
              "title": "Implement basic melee attack",
              "description": "Support hit detection, damage, stamina cost, feedback, and simple weapon data.",
              "status": "Not Started"
            },
            {
              "id": "task-10-02-002",
              "title": "Implement simple ranged or thrown item test",
              "description": "Prototype one ranged option only if it supports the survival loop and does not derail the prototype.",
              "status": "Not Started"
            },
            {
              "id": "task-10-02-003",
              "title": "Implement trap placement",
              "description": "Allow the player to place a simple trap that machines or NPCs can trigger.",
              "status": "Not Started"
            },
            {
              "id": "task-10-02-004",
              "title": "Test combat danger",
              "description": "Tune early combat so fighting is useful but risky, and stealth or avoidance remain valid options.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-11-npc-survivors",
      "title": "Phase 11 - NPC Survivors",
      "sections": [
        {
          "id": "11-01-survivor-data-and-character",
          "title": "11.01 Survivor Data and Character",
          "tasks": [
            {
              "id": "task-11-01-001",
              "title": "Create Survivor archetypes",
              "description": "Define Aggressor, Runner, Trapper, Hunter, Coward, Strategist, Helper, and Scavenger behavior profiles.",
              "status": "Not Started"
            },
            {
              "id": "task-11-01-002",
              "title": "Create NPC Survivor character",
              "description": "Build a basic NPC character with health, stamina, inventory placeholder, animation placeholders, and AI controller.",
              "status": "Not Started"
            },
            {
              "id": "task-11-01-003",
              "title": "Create NPC spawning system",
              "description": "Spawn a small number of Survivors in test maps first, then support full match counts later.",
              "status": "Not Started"
            },
            {
              "id": "task-11-01-004",
              "title": "Track living Survivor count",
              "description": "Update UI and match state when NPCs spawn, die, flee, or are removed from the active trial.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "11-02-survivor-ai",
          "title": "11.02 Survivor AI",
          "tasks": [
            {
              "id": "task-11-02-001",
              "title": "Implement wander and investigate behavior",
              "description": "Make NPCs move through the Safe Zone and Maze, react to sounds, and inspect interesting locations.",
              "status": "Not Started"
            },
            {
              "id": "task-11-02-002",
              "title": "Implement loot behavior",
              "description": "Allow NPCs to find and claim useful items, caches, or resources without needing full inventory complexity at first.",
              "status": "Not Started"
            },
            {
              "id": "task-11-02-003",
              "title": "Implement fight, flee, and hide behavior",
              "description": "NPCs should choose simple survival responses based on health, threat, archetype, and nearby cover.",
              "status": "Not Started"
            },
            {
              "id": "task-11-02-004",
              "title": "Test first three NPC Survivors",
              "description": "Prove three NPCs can coexist with the player, react to threats, and die or escape without breaking state.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-12-machine-enemies",
      "title": "Phase 12 - Machine Enemies",
      "sections": [
        {
          "id": "12-01-class-c-machines",
          "title": "12.01 Class C Machines",
          "tasks": [
            {
              "id": "task-12-01-001",
              "title": "Create base machine enemy",
              "description": "Build shared machine health, perception, patrol, alert, attack, disabled, and destroyed states.",
              "status": "Not Started"
            },
            {
              "id": "task-12-01-002",
              "title": "Create basic drone",
              "description": "Prototype a small patrol machine that spots, follows, alarms, or attacks the player.",
              "status": "Not Started"
            },
            {
              "id": "task-12-01-003",
              "title": "Create basic turret",
              "description": "Prototype a stationary machine threat that controls space and teaches line-of-sight danger.",
              "status": "Not Started"
            },
            {
              "id": "task-12-01-004",
              "title": "Create basic machine trap",
              "description": "Prototype a hidden or visible hazard that punishes careless movement through the Maze.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "12-02-higher-threat-machines",
          "title": "12.02 Higher-Threat Machines",
          "tasks": [
            {
              "id": "task-12-02-001",
              "title": "Create Watcher prototype",
              "description": "Build the first Class B machine with stronger patrol, hearing, chase, and search behavior.",
              "status": "Not Started"
            },
            {
              "id": "task-12-02-002",
              "title": "Create Class A concept prototype",
              "description": "Prototype one late-game high-threat machine encounter in rough form before investing in final art.",
              "status": "Not Started"
            },
            {
              "id": "task-12-02-003",
              "title": "Implement machine spawn rules",
              "description": "Control which machines can appear by time, zone, event, player progress, or vertical slice needs.",
              "status": "Not Started"
            },
            {
              "id": "task-12-02-004",
              "title": "Test machine encounter readability",
              "description": "Ensure the player can understand detection, warning, attack, escape, and disable opportunities.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-13-death-save-settings",
      "title": "Phase 13 - Death, Save, and Settings",
      "sections": [
        {
          "id": "13-01-death-and-recovery",
          "title": "13.01 Death and Recovery",
          "tasks": [
            {
              "id": "task-13-01-001",
              "title": "Implement player death screen",
              "description": "Show cause of death, basic outcome text, restart option, and return-to-menu option.",
              "status": "Not Started"
            },
            {
              "id": "task-13-01-002",
              "title": "Implement backpack drop",
              "description": "Store inventory on death, spawn a backpack actor, and allow retrieval if the design keeps this loop.",
              "status": "Not Started"
            },
            {
              "id": "task-13-01-003",
              "title": "Implement respawn rules",
              "description": "Define whether prototype respawn returns to Safe Zone, restarts the run, or depends on difficulty.",
              "status": "Not Started"
            },
            {
              "id": "task-13-01-004",
              "title": "Test death-recovery loop",
              "description": "Verify death does not corrupt inventory, UI, match state, AI state, or save data.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "13-02-save-and-settings",
          "title": "13.02 Save and Settings",
          "tasks": [
            {
              "id": "task-13-02-001",
              "title": "Create settings menu",
              "description": "Add resolution, graphics quality, audio sliders, mouse sensitivity, and placeholder keybind support.",
              "status": "Not Started"
            },
            {
              "id": "task-13-02-002",
              "title": "Save and load settings",
              "description": "Persist player settings locally and apply them correctly after restarting the game.",
              "status": "Not Started"
            },
            {
              "id": "task-13-02-003",
              "title": "Create prototype save object",
              "description": "Save player stats, inventory, current map, Safe Zone state, and basic progression markers.",
              "status": "Not Started"
            },
            {
              "id": "task-13-02-004",
              "title": "Test save/load in a test map",
              "description": "Verify saving and loading works before connecting it to the full vertical slice.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-14-ui-menus-and-audio",
      "title": "Phase 14 - UI, Menus, and Audio",
      "sections": [
        {
          "id": "14-01-menus",
          "title": "14.01 Menus",
          "tasks": [
            {
              "id": "task-14-01-001",
              "title": "Create main menu",
              "description": "Add start game, settings, credits, exit, and a simple background scene or image.",
              "status": "Not Started"
            },
            {
              "id": "task-14-01-002",
              "title": "Create pause menu",
              "description": "Add resume, settings, exit-to-menu, and later save/load hooks if appropriate.",
              "status": "Not Started"
            },
            {
              "id": "task-14-01-003",
              "title": "Create loading screen",
              "description": "Add a stable loading screen with lore facts, tips, or status text that does not break map transitions.",
              "status": "Not Started"
            },
            {
              "id": "task-14-01-004",
              "title": "Create onboarding prompts",
              "description": "Add minimal tutorial prompts for movement, interaction, inventory, crafting, gates, stealth, and machine danger.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "14-02-audio",
          "title": "14.02 Audio",
          "tasks": [
            {
              "id": "task-14-02-001",
              "title": "Add Safe Zone ambience",
              "description": "Create a calmer hub sound bed that supports recovery and preparation.",
              "status": "Not Started"
            },
            {
              "id": "task-14-02-002",
              "title": "Add Maze ambience",
              "description": "Create separate day and night layers with wind, foliage, distant machinery, and environmental tension.",
              "status": "Not Started"
            },
            {
              "id": "task-14-02-003",
              "title": "Add machine audio cues",
              "description": "Add idle, patrol, alert, chase, attack, disabled, and destroyed sounds for machine readability.",
              "status": "Not Started"
            },
            {
              "id": "task-14-02-004",
              "title": "Add UI audio cues",
              "description": "Add restrained sounds for inventory, menu hover/click, warnings, item pickup, and gate alerts.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-15-vertical-slice",
      "title": "Phase 15 - Vertical Slice",
      "sections": [
        {
          "id": "15-01-slice-content",
          "title": "15.01 Slice Content",
          "tasks": [
            {
              "id": "task-15-01-001",
              "title": "Build vertical slice map path",
              "description": "Create a playable route from menu to Safe Zone, through one gate, into the Maze, and back or onward to an outcome.",
              "status": "Not Started"
            },
            {
              "id": "task-15-01-002",
              "title": "Place slice resources and loot",
              "description": "Add enough resources, caches, tools, and consumables to support one complete short run.",
              "status": "Not Started"
            },
            {
              "id": "task-15-01-003",
              "title": "Place slice NPC Survivors",
              "description": "Use three NPC Survivors with different behaviors so the world feels active without overwhelming testing.",
              "status": "Not Started"
            },
            {
              "id": "task-15-01-004",
              "title": "Place slice machine encounter",
              "description": "Use one readable machine enemy encounter that creates danger and teaches stealth, avoidance, or combat.",
              "status": "Not Started"
            },
            {
              "id": "task-15-01-005",
              "title": "Place one event sequence",
              "description": "Use one supply, gate, fog, or machine surge event to prove the game can shift pacing mid-run.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "15-02-slice-polish",
          "title": "15.02 Slice Polish",
          "tasks": [
            {
              "id": "task-15-02-001",
              "title": "Fix slice blockers",
              "description": "Resolve crashes, progression breaks, stuck states, missing references, and map-breaking issues first.",
              "status": "Not Started"
            },
            {
              "id": "task-15-02-002",
              "title": "Improve player feedback",
              "description": "Polish prompts, damage feedback, item pickup feedback, warnings, AI tells, and objective clarity.",
              "status": "Not Started"
            },
            {
              "id": "task-15-02-003",
              "title": "Record vertical slice footage",
              "description": "Capture footage for internal review, public updates, Steam page planning, and future trailer cuts.",
              "status": "Not Started"
            },
            {
              "id": "task-15-02-004",
              "title": "Run internal slice playtest",
              "description": "Have the team play the slice without guidance and log confusion, frustration, bugs, and strong moments.",
              "status": "Not Started"
            }
          ]
        }
      ]
    },
    {
      "id": "phase-16-alpha-beta-steam",
      "title": "Phase 16 - Alpha, Beta, and Steam",
      "sections": [
        {
          "id": "16-01-alpha-beta",
          "title": "16.01 Alpha and Beta",
          "tasks": [
            {
              "id": "task-16-01-001",
              "title": "Expand from slice to alpha scope",
              "description": "Add remaining planned systems and content at rough quality after the vertical slice proves the core loop.",
              "status": "Not Started"
            },
            {
              "id": "task-16-01-002",
              "title": "Create external playtest process",
              "description": "Prepare tester instructions, feedback forms, known issues, build delivery, and bug triage rules.",
              "status": "Not Started"
            },
            {
              "id": "task-16-01-003",
              "title": "Balance survival and enemy difficulty",
              "description": "Tune resource scarcity, stat drain, stealth forgiveness, machine danger, and NPC pressure using playtest feedback.",
              "status": "Not Started"
            },
            {
              "id": "task-16-01-004",
              "title": "Performance optimization pass",
              "description": "Profile GPU, CPU, AI tick rates, foliage density, shadows, materials, and loading behavior.",
              "status": "Not Started"
            },
            {
              "id": "task-16-01-005",
              "title": "Bug stabilization pass",
              "description": "Fix blockers, crashes, save corruption, broken UI, stuck AI, map holes, and input issues before Steam work.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "16-02-steam-readiness",
          "title": "16.02 Steam Readiness",
          "tasks": [
            {
              "id": "task-16-02-001",
              "title": "Create Steamworks app",
              "description": "Set up app information, developer/publisher details, tax/payment details, and basic Steamworks configuration.",
              "status": "Not Started"
            },
            {
              "id": "task-16-02-002",
              "title": "Prepare Steam store assets",
              "description": "Create capsule art, screenshots, short description, long description, trailer, tags, and system requirements.",
              "status": "Not Started"
            },
            {
              "id": "task-16-02-003",
              "title": "Create packaged build pipeline",
              "description": "Create repeatable shipping builds, version numbers, local testing steps, and SteamPipe upload process.",
              "status": "Not Started"
            },
            {
              "id": "task-16-02-004",
              "title": "Submit store page for review",
              "description": "Submit the store page only when visuals, copy, tags, Early Access text, and trailer accurately represent the game.",
              "status": "Not Started"
            },
            {
              "id": "task-16-02-005",
              "title": "Prepare public demo or Early Access candidate",
              "description": "Package the release candidate, test Steam launch flow, verify inputs/settings, and prepare launch communication.",
              "status": "Not Started"
            }
          ]
        },
        {
          "id": "16-03-post-launch",
          "title": "16.03 Post-Launch",
          "tasks": [
            {
              "id": "task-16-03-001",
              "title": "Create hotfix branch process",
              "description": "Prepare a quick path for emergency fixes without destabilizing active development work.",
              "status": "Not Started"
            },
            {
              "id": "task-16-03-002",
              "title": "Maintain known issues list",
              "description": "Publish clear known issues and update them as bugs are fixed or workarounds are found.",
              "status": "Not Started"
            },
            {
              "id": "task-16-03-003",
              "title": "Publish roadmap updates",
              "description": "Keep the public tracker and devlog aligned with actual development priorities after launch.",
              "status": "Not Started"
            },
            {
              "id": "task-16-03-004",
              "title": "Plan content expansion",
              "description": "Add future Maze sections, machines, Survivor archetypes, events, lore entries, and craftable items after stability.",
              "status": "Not Started"
            }
          ]
        }
      ]
    }
  ]
};
