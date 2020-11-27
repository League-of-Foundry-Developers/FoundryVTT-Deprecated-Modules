import { ModuleChecker } from "./module/moduleChecker.js";

Hooks.on("ready", function() {
    console.log("Deprecated Modules | Initializing");
    ModuleChecker.checkModules();
});