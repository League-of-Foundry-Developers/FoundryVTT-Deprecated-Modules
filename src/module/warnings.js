export const WarningCategory = Object.freeze({
    Core: "core", // The module's functionality has been integrated into core. (0-199)
    Broken:  "broken", // The module no longer works (200-299)
    Replaced: "replaced", // The module is no longer maintained and has been replaced by another module (300-499)
    Delisted: "delisted" // The module has been removed from Foundry's module list because it is no longer maintained (500-699)
})

class DefaultMessages {
    static core(details) {
        let message = "{} has been integrated into core Foundry, so it should be uninstalled.";
        if(details) {
            message += " " + details;
        }
        return message;
    }

    static broken() {
        let message = "{} is partially broken and is no longer being maintained. As it could break further with any Foundry update, it is recommended that you uninstall it.";
        return message;
    }

    static replaced(replacement) {
        let message = "{} is no longer being maintained and could break with any Foundry update, if it hasn't already. It is recommended that you replace it with ";
        message += "<b><u>" + replacement + "</u></b>.";
        return message;
    }

    static delisted() {
        let message = "{} has been removed from Foundry's official module repository because it is no longer being maintained."
        message += "You should consider uninstalling it, and it could break with any Foundry update."
        return message
    }
}

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
        message: DefaultMessages.core("To enable it in Foundry, go to 'Configure Settings' -> 'Core Settings' and check 'Left-Click to Release Objects'."),
        coreVersion: "0.7.5"
    },
    {
        id: 1,
        module: "quicksceneview",
        category: WarningCategory.Core,
        message: DefaultMessages.core(),
        coreVersion: "0.7.5"
    },
    {
        id: 2,
        module: "BatchPermissionsByFolder",
        category: WarningCategory.Core,
        message: DefaultMessages.core(),
        coreVersion: "0.7.5"
    },
    {
        id: 3,
        module: "note-text-color",
        category: WarningCategory.Core,
        message: DefaultMessages.core(),
        coreVersion: "0.7.5"
    },
    {
        id: 4,
        module: "no-summon-vision",
        category: WarningCategory.Core,
        message: DefaultMessages.core(),
        coreVersion: "0.7.5"
    },
    {
        id: 5,
        module: "noback",
        category: WarningCategory.Core,
        message: DefaultMessages.core(),
        coreVersion: "0.7.5"
    },
    {
        id: 6,
        module: "token-owner-selection-tweak",
        category: WarningCategory.Core,
        message: DefaultMessages.core(),
        coreVersion: "0.7.1"
    },
    {
        id: 7,
        module: "returntosetup",
        category: WarningCategory.Core,
        message: DefaultMessages.core(),
        coreVersion: "0.7.4"
    },

    //Broken Warnings (200-299)
    {
        id: 200,
        module: "chat-autoloader",
        category: WarningCategory.Broken,
        message: DefaultMessages.broken(),
        coreVersion: "0.6.6"
    },
    {
        id: 201,
        module: "chat-colors-and-more",
        category: WarningCategory.Broken,
        message: DefaultMessages.broken(),
        coreVersion: "0.6.6"
    },
    {
        id: 202,
        module: "critical-fumble",
        category: WarningCategory.Broken,
        message: DefaultMessages.broken(),
        coreVersion: "0.6.6"
    },
    {
        id: 203,
        module: "foundry-patrol",
        category: WarningCategory.Broken,
        message: DefaultMessages.broken(),
        coreVersion: "0.7.5"
    },
    {
        id: 204,
        module: "route-finder",
        category: WarningCategory.Broken,
        message: DefaultMessages.broken(),
        coreVersion: "0.7.5"
    },
    {
        id: 205,
        module: "bullseye",
        category: WarningCategory.Broken,
        message: DefaultMessages.broken(),
        coreVersion: "0.7.9"
    },
    {
        id: 206,
        module: "mindmap",
        category: WarningCategory.Broken,
        message: DefaultMessages.broken(),
        coreVersion: "0.7.5"
    },
    {
        id: 207,
        module: "conditions5e",
        category: WarningCategory.Broken,
        message: DefaultMessages.broken(),
        coreVersion: "0.7.5"
    },

    //Replaced Warnings (300-499)
    {
        id: 300,
        module: "dynamiceffects",
        category: WarningCategory.Replaced,
        message: DefaultMessages.replaced("Dynamic Active Effects"),
        coreVersion: "0.7.0"
    },
    {
        id: 301,
        module: "teleport",
        category: WarningCategory.Replaced,
        message: DefaultMessages.replaced("Multilevel Tokens"),
        coreVersion: "0.7.0"
    },
    {
        id: 302,
        module: "DancingLights",
        category: WarningCategory.Replaced,
        message: "Now that Foundry has built in light animations, {} is no longer needed and should be uninstalled. For additional animations, install <b><u>CommunityLighting by Blitz</u></b>.",
        coreVersion: "0.7.5"
    },
    {
        id: 303,
        module: "darker-vision-for-5e",
        category: WarningCategory.Replaced,
        message: DefaultMessages.replaced("Perfect Vision"),
        coreVersion: "0.7.5"
    },
    {
        id: 304,
        module: "darkvision5e",
        category: WarningCategory.Replaced,
        message: DefaultMessages.replaced("Perfect Vision"),
        coreVersion: "0.7.5"
    },
    {
        id: 305,
        module: "minor-qol",
        category: WarningCategory.Replaced,
        message: DefaultMessages.replaced("Midi Quality of Life Improvements"),
        coreVersion: "0.7.5"
    },
    {
        id: 306,
        module: "gm-bg",
        category: WarningCategory.Replaced,
        message: DefaultMessages.replaced("Scenery"),
        coreVersion: "0.7.5"
    },
    {
        id: 307,
        module: "cursor-zoom",
        category: WarningCategory.Replaced,
        message: DefaultMessages.replaced("Zoom/Pan Options"),
        coreVersion: "0.6.0"
    },
    {
        id: 308,
        module: "vtta-dndbeyond",
        category: WarningCategory.Replaced,
        message: DefaultMessages.replaced("D&D Beyond Importer"),
        coreVersion: "0.6.0"
    },
    {
        id: 309,
        module: "ddb-importer",
        category: WarningCategory.Replaced,
        message: DefaultMessages.replaced("D&D Beyond Importer (by MrPrimate)"),
        coreVersion: "0.6.0",
        highestVersion: "0.1.9",
        inactive: true
    },
    {
        id: 310,
        module: "fvtt-party",
        category: WarningCategory.Replaced,
        message: DefaultMessages.replaced("Party Overview") + " It's a different module, despite the same name.",
        coreVersion: "0.6.0"
    },
    {
        id: 311,
        module: "vtta-party",
        category: WarningCategory.Replaced,
        message: `<b><u>Virtual Tabletop Assets - Party Overview</u></b> is no longer being maintained and could break with any Foundry update.<br>
        <p>For a module that has has a similar Party Overview functionality, try <b><u>Party Overview</u></b>.</p>
        For a module that lets you create token tooltips, try <b><u>Illandril's Token Tooltips</u></b> or <b><u>Token Tooltip Alt</u></b>`,
        coreVersion: "0.7.5"
    },
    {
        id: 312,
        module: "roll20npcimporter",
        category: WarningCategory.Replaced,
        message: DefaultMessages.replaced("R20 Converter") + " It is available via Kakaroto's Patreon.",
        coreVersion: "0.6.6"
    },
    {
        id: 313,
        module: "mess",
        category: WarningCategory.Replaced,
        message: DefaultMessages.delisted() + `<p>For a module that handles rolls in the same way, try <b><u>Mars 5e</u></b>.</p>
        For a module that enhances templates, including video templates, try <b><u>TOken Magic FX</u></b>`,
        coreVersion: "0.7.5"
    },
    {
        id: 314,
        module: "canvas-scroll",
        category: WarningCategory.Replaced,
        message: DefaultMessages.replaced("Zoom/Pan Options"),
        coreVersion: "0.7.5"
    },
    {
        id: 315,
        module: "token-action-animations",
        category: WarningCategory.Replaced,
        message: DefaultMessages.replaced("Automated Animations"),
        coreVersion: "0.7.5"
    },
    {
        id: 316,
        module: "AdvancedLightingToolkit",
        category: WarningCategory.Replaced,
        message: DefaultMessages.replaced("Community Lighting by Blitz"),
        coreVersion: "0.7.5"
    },
    {
        id: 317,
        module: "combatready",
        category: WarningCategory.Replaced,
        message: DefaultMessages.replaced("Monk's Little Details"),
        coreVersion: "0.7.9"
    },
    {
      id: 318,
      module: "pings",
      category: WarningCategory.Replaced,
      message: DefaultMessages.replaced("Dynamic Active Effects"),
      coreVersion: "0.7.9"
    }

    //Delisted Warnings (500-699)
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
]
