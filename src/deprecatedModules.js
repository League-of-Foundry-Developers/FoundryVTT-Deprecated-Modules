import { Settings } from "./module/settings.js";
import { ModuleChecker } from "./module/moduleChecker.js";

Hooks.on("init", function() {
    console.log("Deprecated Modules | Initializing");
    Settings.registerSettings();
});

Hooks.on("ready", function() {
    console.log("Deprecated Modules | Checking modules");
    ModuleChecker.checkModules();
});