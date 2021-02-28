import { modName } from "./utils.js";

export const ignoredWarnings = "IgnoredWarnings";

/**
 * A class to handle interacting with Foundry's settings.
 */
export class Settings {
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
            ignored = []
        }
        ignored.push(warningID);
        game.settings.set(modName, ignoredWarnings, ignored);
    }

    /**
     * Gets the list of warnings that should be ignored
     */
    static getIgnoredWarnings() {
        return game.settings.get(modName, ignoredWarnings) ?? [];
    }

    /**
     * Removes all warnings from the list of warnings to be ignored
     */
    static resetIgnoredWarnings() {
        game.settings.set(modName, ignoredWarnings, []);
    }

    static registerSettings() {
        game.settings.register(modName, ignoredWarnings, {
            scope: "world",
            config: false,
            default: []
        });
    }
}