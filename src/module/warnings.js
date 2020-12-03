export const WarningCategory = Object.freeze({
    Core: "core", // The module's functionality has been integrated into core,
    Broken:  "broken", // The module no longer works
    Replaced: "replaced", // The module is no longer maintained and has been replaced by another module
    Relocated: "relocated" // The module has been officially relocated and all future updates will come from another manifest
})

/**
 * Each warning has the following possible fields:
 * id: Used to remember which warnings the user has ignored.
 * module: The name of the deprecated module.
 * category: Why the module is deprecated.
 * message: The message to be shown to the user.
 * coreVersion: The version the module was deprecated (either integrated into core or broke). If Foundry's version is lower than this, the warning won't be shown.
 * highestVersion: (Optional) If the module's version is higher than this, no warning will be shown.
 * inactive: (Optional) If true, this warning won't be shown to the user.
 */
export const warnings = [
    {
        id: 0,
        module: "deselection",
        category: WarningCategory.Core,
        message: "'Deselection' has been integrated into core Foundry, so it can be uninstalled. To enable it in Foundry, go to 'Configure Settings' -> 'Core Settings' and check 'Left-Click to Release Objects'.",
        coreVersion: "0.7.5"
    }, 
    {
        id: 1,
        module: "quicksceneview",
        category: WarningCategory.Core,
        message: "'QuickSceneView' has been integrated into core Foundry, so it can be uninstalled.",
        coreVersion: "0.7.5"
    }
]