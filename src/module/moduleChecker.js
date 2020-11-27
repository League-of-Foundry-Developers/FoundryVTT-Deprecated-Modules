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
        for(let warning of warnings) {
            if(warning.module !== name) {
                continue;
            }
            if(warning.highestVersion && isNewerVersion(warning.highestVersion, version)) {
                continue;
            }
            this.createAlert(warning);
        }
    }
    
    static createAlert(warning) {
        Dialog.prompt({
            title: "Deprecated Module",
            content: warning.message,
            label: "OK",
            callback: () => {}
        });
    }
}
