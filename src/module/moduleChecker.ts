import { printWarningMessage } from './utils';
import { Settings } from "./settings.js";
import { warnings } from "./warnings.js";

export class ModuleChecker {
    /**
     * Loops through the active modules, creating warnings for any that are deprecated
     */
    static checkModules() {
        // This can be optimized. A lot.
        // Will I optimize it? Nah.
        for (let [name, module] of game.modules) {
            //See if we should skip checking this module
            if(!module.active) {
                continue;
            }
            //@ts-ignore
            if(this.moduleIsIgnored(module.data.name, module.data.version)) {
                continue;
            }

            //Check the module
            let warningDetails = this.checkManifest(module.data);
            if(!warningDetails) {
                warningDetails = this.getWarning(module.data);
            }
            this.checkRelocation(module.data);
            if(warningDetails) {
                this.createAlert(warningDetails);
            }
        }
    }

    /**
     * Checks the module's manifest for the Manifest+ deprecated field
     * Alerts the user if it is deprecated
     */
    static checkManifest(module) {
        if(module.deprecated) {
            if(module.deprecated.coreVersion && isNewerVersion(module.deprecated.coreVersion, game.data.version)) {
                return;
            }
            let message = "Please disable ";
            message += "<b><u>" + module.title + "</u></b>";
            message += ". Its creator has stated they are no longer maintaining it, and it could break with any Foundry update.<br>";
            if(module.deprecated.reason) {
                message += "Reason: " + module.deprecated.reason + "<br>";
            }
            if(module.deprecated.alternatives) {
                message += "Suggested Alternatives: ";
                module.deprecated.alternatives.forEach(module => {
                    message += "<u>" + module.name + "</u>, ";
                })
                //Remove the final comma
                message = message.slice(0, -2);
            }

            return {
                message: message,
                name: module.name,
                version: module.version,
            }
        }
    }

    /**
     * Searches through the defined warnings to see if any apply to this module
     * @param {*} module The module's data
     */
    static getWarning(module) {
        const ignoredWarnings = Settings.getIgnoredWarnings();
        for(let warning of warnings) {
            //Check to see if the warning is applicable
            if(warning.module !== module.name) {
                continue;
            }
            if(ignoredWarnings.includes(warning.id)) {
                continue;
            }
            if(warning.inactive) {
                continue;
            }
            if(warning.coreVersion && isNewerVersion(warning.coreVersion, game.data.version)) {
                continue;
            }
            if(warning.highestVersion && isNewerVersion(module.version, warning.highestVersion)) {
                continue;
            }

            //Build the warning that will be displayed
            //const message = warning.message.replace("{}", "<b><u>" + module.title + "</u></b>");
            const message = printWarningMessage(warning);
            return {
                message: message,
                warningId: warning.id,
                name: module.name,
                version: module.version
            }
        }
    }

    /**
     * Checks to see if the official manifest has changed location
     * If it has, the user will need to reinstall to get future updates
     * @param {*} module
     */
    static checkRelocation(module) {
        // Currently on hold, because this may be made redundant by the 0.8.x series of updates
        // See https://gitlab.com/foundrynet/foundryvtt/-/issues/4219
        // If I do end up implementing this, need to work on caching to avoid DDOSing the Forge
        // See https://gitlab.com/tiwato/quick_module_enable/-/issues/1
        return;
        //If the local module isn't checking a manifest for updates, don't bother comparing to the official manifest
        if(!module.manifest) {
            return;
        }
        const manifest = fetch("https://forge-vtt.com/api/bazaar/manifest/" + module.name + "?coreVersion=" + game.data.version)
            .then(query => {
                query.json().then(officialModule => {
                    if(this.moduleHasRelocated(module, officialModule.manifest)) {
                        this.createRelocationAlert(module);
                    }
                });
            });
    }

    static moduleHasRelocated(module, manifest) {
        if(!manifest) {
            return false;
        }
        if(module.manifest === manifest.manifest) {
            return false;
        }
        if(isNewerVersion(module.version, manifest.version)) {
            return false;
        }
        return true;
    }

    static createRelocationAlert(module) {
        let message = "The official source for updating {} has been changed, ";
        message += "which is preventing you from getting further updates for it. ";
        message += "It is recommended that you uninstall and reinstall {} ";
        message += "from Foundry's setup page in order to receive future updates.";
        message = message.replace(/\{\}/g, "<b><u>" + module.title + "</u></b>");
        this.createAlert(
            {
                message: message,
                name: module.name,
                version: module.version
            }
        );
    }

    /**
     * Creates the dialog window that warns the user about the deprecated module
     * @param {*} warningDetails
     */
    static createAlert(warningDetails) {
        let d = new Dialog({
            title: "Deprecated Module",
            content: "<p>" + warningDetails.message + "</p>",
            buttons: {
                ignore: {
                    icon: '<i class="fas fa-times"></i>',
                    label: 'Don\'t show this again',
                    callback: () => {
                        if(warningDetails.warningId) {
                            Settings.ignoreWarning(warningDetails.warningId)
                        }
                        else {
                            this.ignoreModule(warningDetails.name, warningDetails.version);
                        }
                    }
                },
                accept: {
                    icon: '<i class="fas fa-check"></i>',
                    label: 'OK',
                    callback: () => {}
                }
            },
            default: "accept"
        });
        d.render(true);
    }

    static ignoreModule(name, version) {
        const moduleString = name + "-" + version;
        Settings.ignoreModule(moduleString);
    }

    static moduleIsIgnored(name, version) {
        const moduleString = name + "-" + version;
        const ignoredModules = Settings.getIgnoredModules();
        return ignoredModules.includes(moduleString);
    }
}
