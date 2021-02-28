import { Settings } from "./settings.js";
import { warnings } from "./warnings.js";

export class ModuleChecker {
    static checkModules() {
        // This can be optimized. A lot.
        // Will I optimize it? Nah.
        for (let [name, module] of game.modules) {
            //See if we should skip checking this module
            if(!module.active) {
                continue;
            }
            if(this.moduleIsIgnored(module.data.name, module.data.version)) {
                continue;
            }

            //Check the module
            let warningDetails = this.checkManifest(module.data);
            if(!warningDetails) {
                warningDetails = this.getWarning(name, module.data);
            }
            if(warningDetails) {
                this.createAlert(warningDetails);
            }
        }
    }

    static checkManifest(data) {
        if(data.deprecated) {
            if(data.deprecated.coreVersion && isNewerVersion(data.deprecated.coreVersion, game.data.version)) {
                return;
            }
            let message = "Please disable ";
            message += "<b><u>" + data.title + "</u></b>";
            message += ". Its creator has stated they are no longer maintaining it, and it could break with any Foundry update.<br>";
            if(data.deprecated.reason) {
                message += "Reason: " + data.deprecated.reason + "<br>";
            }
            if(data.deprecated.alternatives) {
                message += "Suggested Alternatives: ";
                data.deprecated.alternatives.forEach(module => {
                    message += "<u>" + module.name + "</u>, ";
                })
                //Remove the final comma
                message = message.slice(0, -2);
            }

            return {
                message: message,
                name: data.name,
                version: data.version,
            }
        }
    }

    static getWarning(name, moduleData) {
        const ignoredWarnings = Settings.getIgnoredWarnings();
        for(let warning of warnings) {
            //Check to see if the warning is applicable
            if(warning.module !== name) {
                continue;
            }
            if(ignoredWarnings.includes(warning.id)) {
                continue;
            }
            if(warning.inactive) {
                continue;
            }
            if(isNewerVersion(warning.coreVersion, game.data.version)) {
                continue;
            }
            if(warning.highestVersion && isNewerVersion(warning.highestVersion, moduleData.version)) {
                continue;
            }

            //Build the warning that will be displayed
            const message = warning.message.replace("{}", "<b><u>" + moduleData.title + "</u></b>");
            return {
                message: message,
                warningId: warning.id,
                name: moduleData.name,
                version: moduleData.version
            }
        }
    }
    
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
