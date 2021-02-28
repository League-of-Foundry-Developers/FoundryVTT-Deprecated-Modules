export const WarningCategory = Object.freeze({
    Core: "core", // The module's functionality has been integrated into core. (0-199)
    Broken:  "broken", // The module no longer works (200-299)
    Replaced: "replaced", // The module is no longer maintained and has been replaced by another module (300-499)
    Relocated: "relocated" // The module has been officially relocated and all future updates will come from another manifest (500-599)
})

class DefaultMessages {
    static core(details) {
        let message = "{} has been integrated into core Foundry, so it should be uninstalled.";
        if(details) {
            message += " " + details;
        }
        return message;
    }

    static replaced(replacement) {
        let message = "{} is no longer being maintained and could break with any Foundry update. It is recommended that you replace it with ";
        message += "<b><u>" + replacement + "</u></b>.";
        return message;
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
        coreVersion: "0.7.5"
    },
    {
        id: 7,
        module: "returntosetup",
        category: WarningCategory.Core,
        message: DefaultMessages.core(),
        coreVersion: "0.7.4"
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
    }
]