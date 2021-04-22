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

# Module Warnings List

**The following list is the result of a few contributors any error and / or misunderstanding can be indicated by opening an issue in the project.**

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
|8   |[Token Drag Visibility (token-drag-visibility)](https://github.com/SteffanPoulsen/token-drag-visibility)|0.7.5||

## Broken Warnings

These modules is partially broken and is no longer being maintained. As it could break further with any Foundry update, it is recommended that you uninstall it.";

|ID|Module Deprecated | Foundry Version | Note |
|--- |--- |--- |--- |
|200 |Chat Autoloader (chat-autoloader)|0.6.6||
|201 |Chat colors and more (chat-colors-and-more)|0.6.6||
|202 |[Critical Fumble (critical-fumble)](https://github.com/JacobMcAuley/critical-fumble )|0.6.6||
|203 |[Foundry Token Patrol (foundry-patrol)](https://github.com/JacobMcAuley/foundry-patrol )|0.7.5| Is still followed on reddit and discord probably someone will probably retake the project|
|204 |Route Finder (route-finder)|0.7.5||
|205 |[Bullseye (bullseye)](https://gitlab.com/Ionshard/foundry-vtt-bullseye)|0.7.9|These projects are valuable alternatives [Easy Target (easy-target)](https://bitbucket.org/Fyorl/easy-target/src/master/ ) and [Target Enhancements -- FoundryVTT Module (target-enhancements p4535992 fork)](https://github.com/p4535992/target-enhancements ) on developing|
|206 |[Mindmap (mindmap)](https://gitlab.com/moerills-fvtt-modules/graphs)|0.7.5| There is a on developing project for try to revive this [Mindmap (foundryvtt-mindmap)](https://github.com/p4535992/foundryvtt-mindmap) on developing|
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
|311 |[vtta-party (vtta-party)](https://github.com/VTTAssets/vtta-party)|0.6.0|Use instead [Party Overview by LoFD (party-overview)](https://github.com/League-of-Foundry-Developers/party-overview ) or [Illandril's Token Tooltip](https://github.com/illandril/FoundryVTT-token-tooltips) or [Token Tooltip Alt](https://github.com/bmarian/token-tooltip-alt)|
|312 |[Roll20 NPC Importer, for 5e (roll20npcimporter)](https://github.com/syl3r86/roll20npcimporter)|0.6.6|Use instead the tool 'R20 Converteer' It is available via Kakaroto's Patreon.|
|313 |[M.E.S.S. Moerill’s Enhancing Super Suite (mess)](https://github.com/Moerill/mess )|0.7.5|Use instead [MARS 5e - Moerills alternative rolling style for 5e (mars-5e)](https://github.com/Moerill/fvtt-mars-5e )|
|314 |[Canvas Scroll (canvas-scroll)](https://github.com/ElfFriend-DnD/foundryvtt-canvasScroll)|0.7.5|Use instead [Zoom/Pan Options (zoom-pan-options)](https://github.com/itamarcu/ZoomPanOptions )|
|315 |[FVTT Token Animation Tools (token-animation-tools)](https://github.com/ruipin/fvtt-token-animation-tools)|0.7.5|Use instead [Automated Animations DnD5e (automated-jb2a-animations)](https://github.com/otigon/automated-jb2a-animations )|
|316 |[Advanced Lighting Toolkit (AdvancedLightingToolkit)](https://github.com/BlitzKraig/fvtt-AdvancedLightingToolkit)|0.7.5|Use instead [Community Lighting for FVTT (CommunityLighting)](https://github.com/BlitzKraig/fvtt-CommunityLighting )|
|317 |[Combat Ready (combatready)](https://github.com/smilligan93/combatready)|0.7.9|Use instead [Monk's Little Details (monks-little-details)](https://github.com/ironmonk88/monks-little-details)|
|318 |[Pings (pings)](https://gitlab.com/foundry-azzurite/pings)|0.7.9|Use instead [PnP - Pointer and Pings! (pointer)](https://github.com/Moerill/fvtt-pointer )
|319 |[Target Enhancements (target-enhancements)](https://github.com/eadorin/target-enhancements)|0.7.9|Use instead [Target Enhancements (target-enhancements p4535992 fork)](https://github.com/p4535992/target-enhancements ) on developing|
|320 |[Show Drag Dinstance (ShowDragDistance)](https://github.com/wsaunders1014/ShowDragDistance)|0.7.5| Use instead [Drag Ruler (drag-ruler)](https://github.com/manuelVo/foundryvtt-drag-ruler)|
|321 |[Chat Damage Buttons 5e (chatdamagebuttons5e)](https://gitlab.com/hooking/foundry-vtt---chat-damage-buttons)|0.4.5|Use instead [Midi Quality of Life Improvements (midi-qol)](https://gitlab.com/tposney/midi-qol ) or [Simple Chat Damage Buttons 5e (simple-chat-damage-buttons-5e)](https://github.com/Yidna/fvtt-simple-chat-damage-buttons)|
|322 |[Music Assist (music-assist)](https://github.com/temportalflux/MusicAssist)|0.5.5|Use instead [Bellows (bellows)](https://github.com/casualchameleon/Bellows)|
|323 |[Push Tokens Back (pushTokenBack)](https://github.com/David-Zvekic/pushTokenBack)|0.7.9|Use instead [Your Tokens Visible (TokensVisible)](https://github.com/David-Zvekic/TokensVisible)|
|324 |[Cycle Token Stack (fvtt-cycle-token-stack)](https://github.com/aka-beer-buddy/fvtt-cycle-token-stack)|0.7.9|Use instead [Your Tokens Visible (TokensVisible)](https://github.com/David-Zvekic/TokensVisible)|
|325 |[zsync (zsync)](https://github.com/Sk1mble/zsync)|0.7.9|Use instead [Your Tokens Visible (TokensVisible)](https://github.com/David-Zvekic/TokensVisible)|
|326 |[Everybody Look (everybody-look)](https://github.com/winks-vtt/everybody-look)|0.6.5|Use instead [Pull Players to Scene(pull-players-to-scene)](https://github.com/Mr-Byte/pull-players-to-scene)|
|327 |[Adjusted Movement (adjusted-movement)](https://github.com/eadorin/adjusted-movement)|0.7.7|Use instead [Not Your Turn! (NotYourTurn)](https://github.com/CDeenen/NotYourTurn)
|328 |[Lets Trade 5e (lets-trade-5e)](https://github.com/KageJittai/lets-trade-5e)|0.7.9|Use instead [FoundryVTT-GiveItem (give-item)](https://github.com/Sepichat/FoundryVTT-GiveItem )|
|329 |[Search Anywhere (searchanywhere)](https://gitlab.com/riccisi/foundryvtt-search-anywhere )|0.7.9|Use instead [Quick Insert (quick-insert)](https://gitlab.com/fvtt-modules-lab/quick-insert)|
|330 |[Token Health (token-health)](https://github.com/tonifisler/foundry-token-health)|0.7.3|Use instead [Midi Quality of Life Improvements (midi-qol)](https://gitlab.com/tposney/midi-qol )|
|331 |[Navigation Presets (navigation-presets)](https://github.com/earlSt1/vtt-navigation-presets )|0.7.9|Use instead [Monks Scene Navigation (monks-scene-navigation)](https://github.com/ironmonk88/monks-scene-navigation )|
|332 |[Foundry VTT Shared Token Visibility (shared-token-visibility)](https://github.com/sfuqua/fvtt-token-visibility )|0.7.9|[Shared Vision (SharedVision)](https://github.com/CDeenen/SharedVision )|

## Delisted Warnings

These modules has been removed from Foundry's official module repository because it is no longer being maintained.
You should consider uninstalling it, and it could break with any Foundry update.

|ID|Module Deprecated | Foundry Version | Note |
|--- |--- |--- |--- |
|500 |[Fog Tools (fog-tools)](https://github.com/VanceCole/fog-tools)|0.8.0||
|501 |[Self Token Delete for Foundry VTT (self-token-delete)](https://github.com/Corvimae/fvtt-self-token-delete)|0.7.5||
|502 |[VTTA Iconizer (vtta-iconizer)](https://github.com/VTTAssets/vtta-iconizer)|0.8.0|Use instead [VTTA Iconizer (vtta-iconizer) by Mr Primate](https://github.com/MrPrimate/vtta-iconizer)|
|503 |[VTTA Did you know (vtta-didyouknow)](https://github.com/VTTAssets/vtta-didyouknow)|0.8.0||
|504 |[Streaming Mode (streaming-mode)](https://github.com/cswendrowski/FoundryVTT-Streaming-Mode)|0.8.0||
|505 |[Cursor Hider (cursor-hider)](https://gitlab.com/foundry-azzurite/cursor-hider)|0.8.0||
|506 |[FoundryVTT Lingering Injuries (foundryvtt-lingering-injuries)](https://gitlab.com/p4535992/foundryvtt-lingering-injuries)|0.7.1| It's still working|

## Abbandoned Warnings 

Abandoned modules are a (potential) problem for Foundry, because users and/or other modules might rely on abandoned modules, which might break in future Foundry updates.

The modules are check like "abandoned" if all of the below cases apply:

- These modules/github pages has not received any updates in at least 3 months
- There is a no valid alternative module

|ID|Module Abbandoned| Foundry Version | Note |
|--- |--- |--- |--- |
|600 |[GM Notes (gm-notes)](https://github.com/syl3r86/gm-notes)|0.7.5|Seem to work with 0.7.9|
|601 |[GM Secrets (gm-secrets)](https://github.com/schultzcole/FVTT-GM-Secret-Block)|0.7.9|Seem to work with 0.7.9|
|602 |[FVTT Turn Alert (turnAlert)](https://github.com/schultzcole/FVTT-Turn-Alert)|0.7.9|Seem to work with 0.7.9|
|604 |[Workshop's Party Unit Frames (workshop-party-unit-frames)](https://github.com/Foundry-Workshop/party-unit-frames)|0.7.0||
|605 |[Ambient Doors (ambientdoors)](https://github.com/EndlesNights/ambientdoors)|0.7.9|Seem to work with 0.7.9|
|606 |[FVTT-Backgroundless-Pins (backgroundless-pins)](https://github.com/schultzcole/FVTT-Backgroundless-Pins)|0.7.9|Seem to work with 0.7.9|
|607 |[FVTT-SelectiveShow (selectiveshow)](https://github.com/moo-man/FVTT-SelectiveShow)|0.7.9|Seem to work with 0.7.9|
|608 |[FVTT Token Animation Tools (token-animation-tools)](https://github.com/ruipin/fvtt-token-animation-tools)|0.7.9|
|609 |[Foundry PLANT PLAyer Needs Tracker (FoundryPLANT)](https://github.com/GameMaker/FoundryPLANT)|0.7.7||
|610 |[I See You 5e (icu5e )](https://github.com/herasrobert/icu5e)|0.6.6||
|611 |[Point of Interest Teleporter (poi-teleport)](https://github.com/zeel01/poi-teleport)|0.7.8||
|612 |[Point of Vision (point-of-vision)](https://github.com/eadorin/point-of-vision)|0.6.0||

## [Changelog](./CHANGELOG.md)

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/League-of-Foundry-Developers/FoundryVTT-Deprecated-Modules/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## Acknowledgements

Bootstrapped with League of Extraordinary FoundryVTT Developers [foundry-vtt-types](https://github.com/League-of-Foundry-Developers/foundry-vtt-types).

Mad props to the 'League of Extraordinary FoundryVTT Developers' community which helped me figure out a lot.
