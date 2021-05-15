import { Settings } from "./module/settings.js";
import { ModuleChecker } from "./module/moduleChecker.js";
Hooks.on("init", function () {
    console.log("Deprecated Modules | Initializing");
    Settings.registerSettings();
});
Hooks.on("ready", function () {
    if (game.user.isGM) {
        console.log("Deprecated Modules | Checking modules");
        ModuleChecker.checkModules();
    }
});
