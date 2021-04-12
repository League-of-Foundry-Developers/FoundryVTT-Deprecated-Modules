# Deprecated Modules

Deprecated Modules is a module that will warn game masters whenever they use a module that they shouldn't be using anymore. This includes modules that have been integrated into core Foundry, modules that have been entirely replaced by other modules, and modules that have broken and are no longer being maintained.

Deprecated Modules is smart about which version of Foundry you're using when it checks your modules. For example, Deselection is a module that was integrated into core Foundry in 0.7.3. If you're using Deselection in an earlier version of Foundry, Deprecated Modules will not warn you about it.

![Example](ExampleWarning.png)

# Module Developers

Deprecated Modules is integrated with Manifest+ to make it easier for you to mark your module as deprecated when you stop maintaining it.
Simply add the following fields to your module.json file, and any users who have Deprecated Modules installed will receive a warning for it. (The "reason" field is required, the rest are optional.)

```
"deprecated": {
  "coreVersion": "0.7.0",
  "reason": "This was added to foundry core.",
  "alternatives": [
    {
      "name": "module_name",
      "manifest": "https://link.com/to/manifest.json"
    }
  ]
}
```

For more information about Manifest+, [go here](https://foundryvtt.wiki/en/development/manifest-plus).

# License
Deprecated Modules is licensed under the MIT License (see LICENSE file), as well as Foundry VTT's [Limited License Agreement for Module Development 05/29/2020](https://foundryvtt.com/article/license/).

## Core Warnings

These modules has been integrated into core Foundry, so it should be uninstalled.

|ID|Module Deprecated | Foundry Version | Note |
|--- |--- |--- |--- |
|0   |[Deselection (deselection)](https://github.com/Sky-Captain-13/foundry/tree/master/deselection )|0.7.5||
|1   |[Quick Scene View (quicksceneview)](https://gitlab.com/reichler/quicksceneview/ )|0.7.5||
|2   |[Batch Permissions Folder (BatchPermissionsByFolder)](https://github.com/wsaunders1014/BatchPermissionsByFolder )|0.7.5||
|3   |Note Text Color (note-text-color)|0.7.5||
|4   |No summon vision (no-summon-vision)|0.7.5||
|5   |No back (noback)|0.7.5||
|6   |Token Owner Selection (token-owner-selection-tweak)|0.7.1||
|7   |[Return to setup (returntosetup)](https://github.com/ardittristan/VTTReturnToSetup)|0.7.4||
## Broken Warnings

These modules is partially broken and is no longer being maintained. As it could break further with any Foundry update, it is recommended that you uninstall it.";

|ID|Module Deprecated | Foundry Version | Note |
|--- |--- |--- |--- |
|200 |Chat Autoloader (chat-autoloader)|0.6.6||
|201 |Chat colors and more (chat-colors-and-more)|0.6.6||
|202 |[Critical Fumble (critical-fumble)](https://github.com/JacobMcAuley/critical-fumble )|0.6.6||
|203 |[Foundry Token Patrol (foundry-patrol)](https://github.com/JacobMcAuley/foundry-patrol )|0.7.5| Is still followed on reddit and discord probably someone will probably retake the project|
|204 |Route Finder (route-finder)|0.7.5||
|205 |[Bullseye (bullseye)](https://gitlab.com/Ionshard/foundry-vtt-bullseye)|0.7.9|These projects are valuable alternatives [Easy Target (easy-target)](https://bitbucket.org/Fyorl/easy-target/src/master/ ) and [Target Enhancements -- FoundryVTT Module (target-enhancements p4535992 fork)](https://github.com/p4535992/target-enhancements ) |
|206 |[Mindmap (mindmap)](https://gitlab.com/moerills-fvtt-modules/graphs)|0.7.5| There is a on developing project for try to revive this [Mindmap (foundryvtt-mindmap)](https://github.com/p4535992/foundryvtt-mindmap)|
|207 |[conditions5e](https://github.com/trdischat/conditions5e )|0.7.5|Just use [CUB](https://github.com/death-save/combat-utility-belt )|

## Replaced Warnings

These modules is no longer being maintained and could break with any Foundry update, if it hasn't already. It is recommended that you replace it with

|ID|Module Deprecated | Foundry Version | Note |
|--- |--- |--- |--- |
|300 |[Dynamic Effects (dynamiceffects)](https://gitlab.com/tposney/dynamiceffects )|0.7.0|Use instead [Dynamic Active Effects (dae)](https://gitlab.com/tposney/dae )|
|301 |[Teleport (teleport)](https://github.com/knassher/FVTT-Teleport )|0.7.0|Use instead [Multilevel Tokens (foundryvtt-multilevel-tokens)](https://github.com/grandseiken/foundryvtt-multilevel-tokens )|
|302 |[Dancing Lights (DancingLights)](https://github.com/BlitzKraig/fvtt-DancingLights )|0.7.5|Use instead [Community Lighting for FVTT (CommunityLighting)](https://github.com/BlitzKraig/fvtt-CommunityLighting )|
|303 |[Darker Vision for 5e (darker-vision-for-5e)](https://github.com/Voldemalort/darker-vision-for-5e )|0.7.5|Use instead [Perfect Vision (perfect-vision)](https://github.com/dev7355608/perfect-vision )|
|304 |[Darkvision5e (darkvision5e)](https://gitlab.com/Nessin/darkvision5e)|0.7.5|Use instead [Perfect Vision (perfect-vision)](https://github.com/dev7355608/perfect-vision )|
|305 |[Minor Quality of Life Improvements (minor-qol)]()|0.7.5|Use instead [Midi Quality of Life Improvements (midi-qol)](https://gitlab.com/tposney/midi-qol )|
|306 |[GM Scene Background (gm-bg)](https://github.com/death-save/gm-bg )|0.7.5|Use instead [Scenery (scenery)](https://github.com/VanceCole/scenery )|
|307 |[Cursor Zoom (cursor-zoom)](https://github.com/itamarcu/CursorZoom )|0.6.0|Use instead [Zoom/Pan Options (zoom-pan-options)](https://github.com/itamarcu/ZoomPanOptions )|
|308 |[VTTA D&D Beyond Importer (vtta-dndbeyond)](https://github.com/VTTAssets/vtta-dndbeyond)|0.6.0|Use instead [D&D Beyond Importer (ddb-importer) by Mr Primate](https://github.com/MrPrimate/ddb-importer)|
|309 |[D&D Beyond Importer (ddb-importer)](https://github.com/sillvva/foundry-vtt-modules/tree/master/ddb-importer)|0.6.0|Use instead [D&D Beyond Importer (ddb-importer) by Mr Primate](https://github.com/MrPrimate/ddb-importer)|
|310 |[fvtt-party (fvtt-party)](https://github.com/shwill/fvtt-party)|0.6.0|Use instead [Party Overview by LoFD (party-overview)](https://github.com/League-of-Foundry-Developers/party-overview )|
|311 |[vtta-party (vtta-party)](https://github.com/VTTAssets/vtta-party)|0.6.0|Use instead [Party Overview by LoFD (party-overview)](https://github.com/League-of-Foundry-Developers/party-overview )|
|312 |[Roll20 NPC Importer, for 5e (roll20npcimporter)](https://github.com/syl3r86/roll20npcimporter)|0.6.6|Use instead the tool 'R20 Converteer' It is available via Kakaroto's Patreon.|
|313 |[M.E.S.S. Moerill’s Enhancing Super Suite (mess)](https://github.com/Moerill/mess )|0.7.5|Use instead [MARS 5e - Moerills alternative rolling style for 5e (mars-5e)](https://github.com/Moerill/fvtt-mars-5e )|
|314 |[Canvas Scroll (canvas-scroll)](https://github.com/ElfFriend-DnD/foundryvtt-canvasScroll)|0.7.5|Use instead [Zoom/Pan Options (zoom-pan-options)](https://github.com/itamarcu/ZoomPanOptions )|
|315 |[FVTT Token Animation Tools (token-animation-tools)](https://github.com/ruipin/fvtt-token-animation-tools)|0.7.5|Use instead [Automated Animations DnD5e (automated-jb2a-animations)](https://github.com/otigon/automated-jb2a-animations )|
|316 |[Advanced Lighting Toolkit (AdvancedLightingToolkit)](https://github.com/BlitzKraig/fvtt-AdvancedLightingToolkit)|0.7.5|Use instead [Community Lighting for FVTT (CommunityLighting)](https://github.com/BlitzKraig/fvtt-CommunityLighting )|
|317 |[Combat Ready (combatready)](https://github.com/smilligan93/combatready)|0.7.9|Use instead [Monk's Little Details (monks-little-details)](https://github.com/ironmonk88/monks-little-details)|
|318 |[Pings (pings)](https://gitlab.com/foundry-azzurite/pings)|0.7.9|Use instead [PnP - Pointer and Pings! (pointer)](https://gitlab.com/tposney/dae )

## Delisted Warnings

These modules has been removed from Foundry's official module repository because it is no longer being maintained.
You should consider uninstalling it, and it could break with any Foundry update.

|ID|Module Deprecated | Foundry Version | Note |
|--- |--- |--- |--- |
|500 |[ (fog-tools)]()

{
        id: 500,
        module: "fog-tools",
        category: WarningCategory.Delisted,
        message: DefaultMessages.delisted(),
        coreVersion: "0.8.0"
    },
    {
        id: 501,
        module: "self-token-delete",
        category: WarningCategory.Delisted,
        message: DefaultMessages.delisted(),
        coreVersion: "0.7.5"
    },
    {
        id: 502,
        module: "vtta-iconizer",
        category: WarningCategory.Delisted,
        message: DefaultMessages.delisted(),
        coreVersion: "0.8.0"
    },
    {
        id: 503,
        module: "vtta-didyouknow",
        category: WarningCategory.Delisted,
        message: DefaultMessages.delisted(),
        coreVersion: "0.8.0"
    },
    {
        id: 504,
        module: "streaming-mode",
        category: WarningCategory.Delisted,
        message: DefaultMessages.delisted(),
        coreVersion: "0.8.0"
    },
    {
        id: 505,
        module: "cursor-hider",
        category: WarningCategory.Delisted,
        message: DefaultMessages.delisted(),
        coreVersion: "0.8.0"
    }

## Beta or on Developing 

This is similar to 'Replaced Warnings' but for project on developing or not present for unknown reasons on the module repository, but linked for anyone want to know they existed 

## [Changelog](./changelog.md)

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/League-of-Foundry-Developers/FoundryVTT-Deprecated-Modules/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## Acknowledgements

Bootstrapped with League of Extraordinary FoundryVTT Developers [foundry-vtt-types](https://github.com/League-of-Foundry-Developers/foundry-vtt-types).

Mad props to the 'League of Extraordinary FoundryVTT Developers' community which helped me figure out a lot.
