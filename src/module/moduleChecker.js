import { Settings } from "./settings.js";
import { warnings } from "./warnings.js";

export class ModuleChecker {
    static checkModules() {
        for (let [name, module] of game.modules) {
            if(!module.active) {
                continue;
            }
            this.checkModule(name, module.data);
        }
    }

    static checkModule(name, data) {
        const ignoredWarnings = Settings.getIgnoredWarnings();
        for(let warning of warnings) {
            if(warning.module !== name) {
                continue;
            }
            if(ignoredWarnings.includes(warning.id)) {
                continue;
            }
            if(warning.highestVersion && isNewerVersion(warning.highestVersion, data.version)) {
                continue;
            }
            this.createAlert(warning, data.title);
        }
    }
    
    static createAlert(warning, title) {
        const message = warning.message.replace("{}", "<b><u>" + title + "</u></b>");
        let d = new Dialog({
            title: "Deprecated Module",
            content: "<p>" + message + "</p>",
            buttons: {
                ignore: {
                    icon: '<i class="fas fa-times"></i>',
                    label: 'Don\'t show this again',
                    callback: () => Settings.ignoreWarning(warning.id)
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
