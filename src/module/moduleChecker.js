import { Settings } from "./settings.js";
import { warnings } from "./warnings.js";

export class ModuleChecker {
    static checkModules() {
        for (let [name, module] of game.modules) {
            if(!module.active) {
                continue;
            }
            let warningDetails = this.getWarning(name, module.data);
            if(warningDetails) {
                this.createAlert(warningDetails);
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
                warningId: warning.id
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
                    callback: () => Settings.ignoreWarning(warningDetails.warningId)
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
}
