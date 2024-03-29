import { UpgradeCheck } from "./UpgradeCheck.js";
import { modName } from "./utils.js";

export const ignoredWarnings = "IgnoredWarnings";
export const ignoredModules = "IgnoredModules";
export const resetCheckbox = "ResetCheckbox";
export const upgradeCheck = "UpgradeCheck";
export const manifestCache = "ManifestCache";

/**
 * A class to handle interacting with Foundry's settings.
 */
export class Settings {
    _manifestCache = null;

    /**
     * Adds a warning to the list of warnings to ignore
     * @param {number} warningID The ID of the warning
     */
    static ignoreWarning(warningID) {
        if(warningID == null) {
            return;
        }
        const ignored = game.settings.get(modName, ignoredWarnings);
        if(ignored == null) {
            ignored = [];
        }
        ignored.push(warningID);
        game.settings.set(modName, ignoredWarnings, ignored);
    }

    /**
     * Adds a module to the list of modules to not check
     */
    static ignoreModule(module) {
        if(module == null) {
            return;
        }
        const ignored = game.settings.get(modName, ignoredModules);
        if(ignored == null) {
            ignored = [];
        }
        ignored.push(module);
        game.settings.set(modName, ignoredModules, ignored);
    }

    /**
     * Gets the list of warnings that should be ignored
     */
    static getIgnoredWarnings() {
        return game.settings.get(modName, ignoredWarnings) ?? [];
    }

    /**
     * Gets the list of modules that should not be checked
     */
    static getIgnoredModules() {
        return game.settings.get(modName, ignoredModules) ?? [];
    }

    /**
     * Removes all modules & warnings from the list of ones that aren't checked
     */
    static resetIgnored() {
        game.settings.set(modName, ignoredWarnings, []);
        game.settings.set(modName, ignoredModules, []);
    }

    static getManifestCache() {
        // Since settings.set is async, changes won't be reflected immediately
        // So, we lazy load the manifest cache and store a version of it to make
        // sure everything stays coordinated
        if(!this._manifestCache) {
            this._manifestCache = game.settings.get(modName, manifestCache) ?? {};
        }
        return this._manifestCache;
    }

    static setManifestCache(cache) {
        this._manifestCache = cache;
        game.settings.set(modName, manifestCache, cache);
    }

    static registerSettings() {
        game.settings.register(modName, resetCheckbox, {
            name: "Reset Ignored Warnings",
            hint: "If you've ignored any warnings, checking this and saving will show them again.",
            scope: "world",
            config: true,
            type: Boolean,
            default: false,
            onChange: value => {
                if(value) {
                    this.resetIgnored();
                    game.settings.set(modName, resetCheckbox, false);
                }
            }
        });

        game.settings.registerMenu(modName, upgradeCheck, {
            name: "Compatibility Check",
            label: "Check Compatibility for Version 9",
            hint: "Checks your modules to see which are prepared for an upgrade to Version 9.",
            icon: "fas fa-search",
            type: UpgradeCheck,
            restricted: true
        });

        game.settings.register(modName, ignoredWarnings, {
            scope: "world",
            config: false,
            default: []
        });

        game.settings.register(modName, ignoredModules, {
            scope: "world",
            config: false,
            default: []
        });

        game.settings.register(modName, manifestCache, {
            scope: "world",
            config: false,
            default: {}
        });
    }
}