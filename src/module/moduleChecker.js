import { Settings } from "./settings.js";
import { warnings } from "./warnings.js";

export class ModuleChecker {
    static checkModules() {
        for (let [name, module] of game.modules) {
            if(!module.active) {
                continue;
            }
            this.checkModule(name, module.data.version);
        }
    }

    static checkModule(name, version) {
        const ignoredWarnings = Settings.getIgnoredWarnings();
        for(let warning of warnings) {
            if(warning.module !== name) {
                continue;
            }
            if(ignoredWarnings.includes(warning.id)) {
                continue;
            }
            if(warning.highestVersion && isNewerVersion(warning.highestVersion, version)) {
                continue;
            }
            this.createAlert(warning);
        }
    }
    
    static createAlert(warning) {
        let d = new Dialog({
            title: "Deprecated Module",
            content: "<p>" + warning.message + "</p>",
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
