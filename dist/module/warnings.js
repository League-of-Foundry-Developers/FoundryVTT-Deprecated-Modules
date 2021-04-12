import { ModuleStateCategory, WarningCategory } from "./utils.js";
// class DefaultMessages {
//     static core(details?) {
//         let message = "{} has been integrated into core Foundry, so it should be uninstalled.";
//         if(details) {
//             message += " " + details;
//         }
//         return message;
//     }
//     static broken() {
//         let message = "{} is partially broken and is no longer being maintained. As it could break further with any Foundry update, it is recommended that you uninstall it.";
//         return message;
//     }
//     static replaced(replacement) {
//         let message = "{} is no longer being maintained and could break with any Foundry update, if it hasn't already. It is recommended that you replace it with ";
//         message += "<b><u>" + replacement + "</u></b>.";
//         return message;
//     }
//     static delisted() {
//         let message = "{} has been removed from Foundry's official module repository because it is no longer being maintained."
//         message += "You should consider uninstalling it, and it could break with any Foundry update."
//         return message
//     }
// }
/**
 * Each warning has the following possible fields:
 * id: Used to remember which warnings the user has ignored.
 * module: The name of the deprecated module.
 * category: Why the module is deprecated.
 * message: The message to be shown to the user.
 * coreVersion: The version the module was deprecated (either integrated into core or broken). If Foundry's version is lower than this, the warning won't be shown.
 * highestVersion: (Optional) If the module's version is higher than this, no warning will be shown.
 * inactive: (Optional) If true, this warning won't be shown to the user.
 */
export const warnings = [
    //Core Warnings (0-199)
    {
        id: 0,
        module: "deselection",
        category: WarningCategory.Core,
        message: "To enable it in Foundry, go to 'Configure Settings' -> 'Core Settings' and check 'Left-Click to Release Objects'.",
        coreVersion: "0.7.5",
        moduleSuggested: [],
        moduleSuggestedTitle: [],
        moduleSuggestedUrl: [],
        moduleSuggestedManifestJson: [],
        moduleSuggestedState: []
    },
    {
        id: 1,
        module: "quicksceneview",
        category: WarningCategory.Core,
        message: "",
        coreVersion: "0.7.5",
        moduleSuggested: [],
        moduleSuggestedTitle: [],
        moduleSuggestedUrl: [],
        moduleSuggestedManifestJson: [],
        moduleSuggestedState: []
    },
    {
        id: 2,
        module: "BatchPermissionsByFolder",
        category: WarningCategory.Core,
        message: "",
        coreVersion: "0.7.5",
        moduleSuggested: [],
        moduleSuggestedTitle: [],
        moduleSuggestedUrl: [],
        moduleSuggestedManifestJson: [],
        moduleSuggestedState: []
    },
    {
        id: 3,
        module: "note-text-color",
        category: WarningCategory.Core,
        message: "",
        coreVersion: "0.7.5",
        moduleSuggested: [],
        moduleSuggestedTitle: [],
        moduleSuggestedUrl: [],
        moduleSuggestedManifestJson: [],
        moduleSuggestedState: []
    },
    {
        id: 4,
        module: "no-summon-vision",
        category: WarningCategory.Core,
        message: "",
        coreVersion: "0.7.5",
        moduleSuggested: [],
        moduleSuggestedTitle: [],
        moduleSuggestedUrl: [],
        moduleSuggestedManifestJson: [],
        moduleSuggestedState: []
    },
    {
        id: 5,
        module: "noback",
        category: WarningCategory.Core,
        message: "",
        coreVersion: "0.7.5",
        moduleSuggested: [],
        moduleSuggestedTitle: [],
        moduleSuggestedUrl: [],
        moduleSuggestedManifestJson: [],
        moduleSuggestedState: []
    },
    {
        id: 6,
        module: "token-owner-selection-tweak",
        category: WarningCategory.Core,
        message: "",
        coreVersion: "0.7.1",
        moduleSuggested: [],
        moduleSuggestedTitle: [],
        moduleSuggestedUrl: [],
        moduleSuggestedManifestJson: [],
        moduleSuggestedState: []
    },
    {
        id: 7,
        module: "returntosetup",
        category: WarningCategory.Core,
        message: "",
        coreVersion: "0.7.4",
        moduleSuggested: [],
        moduleSuggestedTitle: [],
        moduleSuggestedUrl: [],
        moduleSuggestedManifestJson: [],
        moduleSuggestedState: []
    },
    //Broken Warnings (200-299)
    {
        id: 200,
        module: "chat-autoloader",
        category: WarningCategory.Broken,
        message: "",
        coreVersion: "0.6.6",
        moduleSuggested: [],
        moduleSuggestedTitle: [],
        moduleSuggestedUrl: [],
        moduleSuggestedManifestJson: [],
        moduleSuggestedState: []
    },
    {
        id: 201,
        module: "chat-colors-and-more",
        category: WarningCategory.Broken,
        message: "",
        coreVersion: "0.6.6",
        moduleSuggested: [],
        moduleSuggestedTitle: [],
        moduleSuggestedUrl: [],
        moduleSuggestedManifestJson: [],
        moduleSuggestedState: []
    },
    {
        id: 202,
        module: "critical-fumble",
        category: WarningCategory.Broken,
        message: "",
        coreVersion: "0.6.6",
        moduleSuggested: [],
        moduleSuggestedTitle: [],
        moduleSuggestedUrl: [],
        moduleSuggestedManifestJson: [],
        moduleSuggestedState: []
    },
    {
        id: 203,
        module: "foundry-patrol",
        category: WarningCategory.Broken,
        message: "",
        coreVersion: "0.7.5",
        moduleSuggested: [],
        moduleSuggestedTitle: [],
        moduleSuggestedUrl: [],
        moduleSuggestedManifestJson: [],
        moduleSuggestedState: []
    },
    {
        id: 204,
        module: "route-finder",
        category: WarningCategory.Broken,
        message: "",
        coreVersion: "0.7.5",
        moduleSuggested: [],
        moduleSuggestedTitle: [],
        moduleSuggestedUrl: [],
        moduleSuggestedManifestJson: [],
        moduleSuggestedState: []
    },
    {
        id: 205,
        module: "bullseye",
        category: WarningCategory.Broken,
        message: "",
        coreVersion: "0.7.9",
        moduleSuggested: ["target-enhancements"],
        moduleSuggestedTitle: ["Target Enhancements fork by p4535992"],
        moduleSuggestedUrl: ["https://github.com/p4535992/target-enhancements"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/p4535992/target-enhancements/master/src/module.json"],
        moduleSuggestedState: [ModuleStateCategory.DEVELOPING]
    },
    {
        id: 206,
        module: "mindmap",
        category: WarningCategory.Broken,
        message: "",
        coreVersion: "0.7.5",
        moduleSuggested: ["foundryvtt-mindmap"],
        moduleSuggestedTitle: ["M.I.N.D.M.A.P."],
        moduleSuggestedUrl: ["https://github.com/p4535992/foundryvtt-mindmap"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/p4535992/foundryvtt-mindmap/master/src/module.json"],
        moduleSuggestedState: [ModuleStateCategory.DEVELOPING]
    },
    {
        id: 207,
        module: "conditions5e",
        category: WarningCategory.Broken,
        message: "",
        coreVersion: "0.7.5",
        moduleSuggested: ["combat-utility-belt"],
        moduleSuggestedTitle: ["Combat Utility Belt"],
        moduleSuggestedUrl: ["https://github.com/death-save/combat-utility-belt"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/death-save/combat-utility-belt/master/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    //Replaced Warnings (300-499)
    {
        id: 300,
        module: "dynamiceffects",
        category: WarningCategory.Replaced,
        message: "",
        coreVersion: "0.7.0",
        moduleSuggested: ["dae"],
        moduleSuggestedTitle: ["Dynamic Active Effects"],
        moduleSuggestedUrl: ["https://gitlab.com/tposney/dae"],
        moduleSuggestedManifestJson: ["https://gitlab.com/tposney/dae/-/raw/master/src/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 301,
        module: "teleport",
        category: WarningCategory.Replaced,
        message: "",
        coreVersion: "0.7.0",
        moduleSuggested: ["foundryvtt-multilevel-tokens"],
        moduleSuggestedTitle: ["Multilevel Tokens"],
        moduleSuggestedUrl: ["https://github.com/grandseiken/foundryvtt-multilevel-tokens"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/grandseiken/foundryvtt-multilevel-tokens/master/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 302,
        module: "DancingLights",
        category: WarningCategory.Replaced,
        message: "Now that Foundry has built in light animations, {} is no longer needed and should be uninstalled. For additional animations, install <b><u>CommunityLighting by Blitz</u></b>.",
        coreVersion: "0.7.5",
        moduleSuggested: ["CommunityLighting"],
        moduleSuggestedTitle: ["Community Lighting by Blitz"],
        moduleSuggestedUrl: ["https://github.com/BlitzKraig/fvtt-CommunityLighting"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/BlitzKraig/fvtt-CommunityLighting/master/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 303,
        module: "darker-vision-for-5e",
        category: WarningCategory.Replaced,
        message: "",
        coreVersion: "0.7.5",
        moduleSuggested: ["perfect-vision"],
        moduleSuggestedTitle: ["Perfect Vision"],
        moduleSuggestedUrl: ["https://github.com/dev7355608/perfect-vision"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/dev7355608/perfect-vision/main/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 304,
        module: "darkvision5e",
        category: WarningCategory.Replaced,
        message: "",
        coreVersion: "0.7.5",
        moduleSuggested: ["perfect-vision"],
        moduleSuggestedTitle: ["Perfect Vision"],
        moduleSuggestedUrl: ["https://github.com/dev7355608/perfect-vision"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/dev7355608/perfect-vision/main/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 305,
        module: "minor-qol",
        category: WarningCategory.Replaced,
        message: "",
        coreVersion: "0.7.5",
        moduleSuggested: ["midi-qol"],
        moduleSuggestedTitle: ["Midi Quality of Life Improvements"],
        moduleSuggestedUrl: ["https://gitlab.com/tposney/midi-qol"],
        moduleSuggestedManifestJson: ["https://gitlab.com/tposney/midi-qol/-/raw/master/src/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 306,
        module: "gm-bg",
        category: WarningCategory.Replaced,
        message: "",
        coreVersion: "0.7.5",
        moduleSuggested: ["scenery"],
        moduleSuggestedTitle: ["Scenery"],
        moduleSuggestedUrl: ["https://github.com/VanceCole/scenery"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/VanceCole/scenery/master/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 307,
        module: "cursor-zoom",
        category: WarningCategory.Replaced,
        message: "",
        coreVersion: "0.6.0",
        moduleSuggested: ["zoom-pan-options"],
        moduleSuggestedTitle: ["Zoom/Pan Options"],
        moduleSuggestedUrl: ["https://github.com/itamarcu/ZoomPanOptions"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/itamarcu/ZoomPanOptions/master/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 308,
        module: "vtta-dndbeyond",
        category: WarningCategory.Replaced,
        message: "D&D Beyond Importer",
        coreVersion: "0.6.0",
        moduleSuggested: ["ddb-importer"],
        moduleSuggestedTitle: ["D&D Beyond Importer by mr Primate"],
        moduleSuggestedUrl: ["https://github.com/MrPrimate/ddb-importer"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/MrPrimate/ddb-importer/master/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 309,
        module: "ddb-importer",
        category: WarningCategory.Replaced,
        message: "D&D Beyond Importer (by MrPrimate)",
        coreVersion: "0.6.0",
        highestVersion: "0.1.9",
        inactive: true,
        moduleSuggested: ["ddb-importer"],
        moduleSuggestedTitle: ["D&D Beyond Importer by mr Primate"],
        moduleSuggestedUrl: ["https://github.com/MrPrimate/ddb-importer"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/MrPrimate/ddb-importer/master/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 310,
        module: "fvtt-party",
        category: WarningCategory.Replaced,
        message: "Party Overview" + " It's a different module, despite the same name.",
        coreVersion: "0.6.0",
        moduleSuggested: ["party-overview", "illandril-token-tooltips", "token-tooltip-alt"],
        moduleSuggestedTitle: ["Party Overview by LoFD", "Illandril's Token Tooltip", "Token Tooltip Alt"],
        moduleSuggestedUrl: ["https://github.com/League-of-Foundry-Developers/party-overview", "https://github.com/illandril/FoundryVTT-token-tooltips", "https://github.com/bmarian/token-tooltip-alt"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/League-of-Foundry-Developers/party-overview/master/module.json", "https://raw.githubusercontent.com/illandril/FoundryVTT-token-tooltips/master/module/module.json", "https://raw.githubusercontent.com/bmarian/token-tooltip-alt/master/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE, ModuleStateCategory.STABLE, ModuleStateCategory.STABLE]
    },
    {
        id: 311,
        module: "vtta-party",
        category: WarningCategory.Replaced,
        message: `<b><u>Virtual Tabletop Assets - Party Overview</u></b> is no longer being maintained and could break with any Foundry update.<br>
        <p>For a module that has has a similar Party Overview functionality, try <b><u>Party Overview</u></b>.</p>
        For a module that lets you create token tooltips, try <b><u>Illandril's Token Tooltips</u></b> or <b><u>Token Tooltip Alt</u></b>`,
        coreVersion: "0.7.5",
        moduleSuggested: ["party-overview", "illandril-token-tooltips", "token-tooltip-alt"],
        moduleSuggestedTitle: ["Party Overview by LoFD", "Illandril's Token Tooltip", "Token Tooltip Alt"],
        moduleSuggestedUrl: ["https://github.com/League-of-Foundry-Developers/party-overview", "https://github.com/illandril/FoundryVTT-token-tooltips", "https://github.com/bmarian/token-tooltip-alt"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/League-of-Foundry-Developers/party-overview/master/module.json", "https://raw.githubusercontent.com/illandril/FoundryVTT-token-tooltips/master/module/module.json", "https://raw.githubusercontent.com/bmarian/token-tooltip-alt/master/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE, ModuleStateCategory.STABLE, ModuleStateCategory.STABLE]
    },
    {
        id: 312,
        module: "roll20npcimporter",
        category: WarningCategory.Replaced,
        message: "R20 Converter" + " It is available via Kakaroto's Patreon.",
        coreVersion: "0.6.6",
        moduleSuggested: [],
        moduleSuggestedTitle: [],
        moduleSuggestedUrl: [],
        moduleSuggestedManifestJson: [],
        moduleSuggestedState: []
    },
    {
        id: 313,
        module: "mess",
        category: WarningCategory.Replaced,
        message: `<p>For a module that handles rolls in the same way, try <b><u>Mars 5e</u></b>.</p>
        For a module that enhances templates, including video templates, try <b><u>Token Magic FX</u></b>`,
        coreVersion: "0.7.5",
        moduleSuggested: ["mars-5e"],
        moduleSuggestedTitle: ["MARS 5e - Moerills alternative rolling style for 5e"],
        moduleSuggestedUrl: ["https://github.com/Moerill/fvtt-mars-5e"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/Moerill/fvtt-mars-5e/master/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 314,
        module: "canvas-scroll",
        category: WarningCategory.Replaced,
        message: "",
        coreVersion: "0.7.5",
        moduleSuggested: ["zoom-pan-options"],
        moduleSuggestedTitle: ["Zoom/Pan Options"],
        moduleSuggestedUrl: ["https://github.com/itamarcu/ZoomPanOptions"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/itamarcu/ZoomPanOptions/master/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 315,
        module: "token-action-animations",
        category: WarningCategory.Replaced,
        message: "Automated Animations",
        coreVersion: "0.7.5",
        moduleSuggested: ["automated-jb2a-animations"],
        moduleSuggestedTitle: ["Automated Animations DnD5e"],
        moduleSuggestedUrl: ["https://github.com/otigon/automated-jb2a-animations"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/otigon/automated-jb2a-animations/main/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 316,
        module: "AdvancedLightingToolkit",
        category: WarningCategory.Replaced,
        message: "",
        coreVersion: "0.7.5",
        moduleSuggested: ["CommunityLighting"],
        moduleSuggestedTitle: ["Community Lighting by Blitz"],
        moduleSuggestedUrl: ["https://github.com/BlitzKraig/fvtt-CommunityLighting"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/BlitzKraig/fvtt-CommunityLighting/master/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 317,
        module: "combatready",
        category: WarningCategory.Replaced,
        message: "",
        coreVersion: "0.7.9",
        urlFoundryHub: "https://www.foundryvtt-hub.com/package/combatready",
        moduleSuggested: ["monks-little-details"],
        moduleSuggestedTitle: ["Monk's Little Details"],
        moduleSuggestedUrl: ["https://github.com/ironmonk88/monks-little-details"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/Moerill/fvtt-pointer/master/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 318,
        module: "pings",
        category: WarningCategory.Replaced,
        message: "PnP - Pointer and Pings!",
        coreVersion: "0.7.9",
        moduleSuggested: ["pointer"],
        moduleSuggestedTitle: ["PnP - Pointer and Pings!"],
        moduleSuggestedUrl: ["https://github.com/Moerill/fvtt-pointer"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/Moerill/fvtt-pointer/master/module.json"],
        moduleSuggestedState: [ModuleStateCategory.STABLE]
    },
    {
        id: 319,
        module: "target-enhancements",
        category: WarningCategory.Replaced,
        message: "",
        coreVersion: "0.7.9",
        moduleUrl: "https://github.com/eadorin/target-enhancements",
        moduleSuggested: ["target-enhancements"],
        moduleSuggestedTitle: ["Target Enhancements fork by p4535992"],
        moduleSuggestedUrl: ["https://github.com/p4535992/target-enhancements"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/p4535992/target-enhancements/master/src/module.json"],
        moduleSuggestedState: [ModuleStateCategory.DEVELOPING]
    },
    //Delisted Warnings (500-699)
    {
        id: 500,
        module: "fog-tools",
        category: WarningCategory.Delisted,
        message: "",
        coreVersion: "0.8.0",
        moduleUrl: "https://github.com/VanceCole/fog-tools",
        moduleTitle: "Fog Tools",
    },
    {
        id: 501,
        module: "self-token-delete",
        category: WarningCategory.Delisted,
        message: "",
        coreVersion: "0.7.5",
        moduleUrl: "https://github.com/Corvimae/fvtt-self-token-delete",
        moduleTitle: "Self Token Delete"
    },
    {
        id: 502,
        module: "vtta-iconizer",
        category: WarningCategory.Delisted,
        message: "",
        coreVersion: "0.8.0",
        moduleUrl: "https://github.com/VTTAssets/vtta-iconizer",
        moduleTitle: "VTTA Iconizer",
        moduleSuggested: ["vtta-iconizer"],
        moduleSuggestedTitle: ["VTTA Iconizer (by MrPrimate)"],
        moduleSuggestedUrl: ["https://github.com/MrPrimate/vtta-iconizer"],
        moduleSuggestedManifestJson: ["https://raw.githubusercontent.com/MrPrimate/vtta-iconizer/master/module.json"],
        moduleSuggestedState: [ModuleStateCategory.MAINTENANCE]
    },
    {
        id: 503,
        module: "vtta-didyouknow",
        category: WarningCategory.Delisted,
        message: "",
        coreVersion: "0.8.0",
        moduleUrl: "https://github.com/VTTAssets/vtta-didyouknow",
        urlFoundryHub: "https://www.foundryvtt-hub.com/package/vtta-didyouknow"
    },
    {
        id: 504,
        module: "streaming-mode",
        category: WarningCategory.Delisted,
        message: "",
        coreVersion: "0.8.0",
        moduleUrl: "https://github.com/cswendrowski/FoundryVTT-Streaming-Mode",
    },
    {
        id: 505,
        module: "cursor-hider",
        category: WarningCategory.Delisted,
        message: "",
        coreVersion: "0.8.0",
        moduleUrl: "https://gitlab.com/foundry-azzurite/cursor-hider",
        urlFoundryHub: "https://www.foundryvtt-hub.com/package/cursor-hider",
    }
];
