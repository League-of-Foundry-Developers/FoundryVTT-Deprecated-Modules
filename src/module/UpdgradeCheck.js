import { ManifestRepository } from "./manifestRepository.js";

export const States = Object.freeze({
    Pending: { icon: "fas fa-spinner fa-spin", hover: "Checking Manifest" },
    Orphan: { icon: "fas fa-question-circle", hover: "No Manifest Found" },
    CheckNeeded: { icon: "fas fa-question-circle yellow", hover: "Check Spreadsheet" },
    UpToDate: { icon: "fas fa-check-circle green", hover: "Up To Date" },
    Download: { icon: "fas fa-arrow-circle-down green", hover: "Good After Update" }
})

/**
 * FormApplication window for advanced configuration options.
 * @class
 * @extends FormApplication
 */
export class UpgradeCheck extends FormApplication {
    constructor(object, options) {
        super(object, options);
        this.modules = [];
        this.getActiveModules();
    }

    static get defaultOptions() {
        const options = super.defaultOptions;
        options.title = "Major Version Upgrade Checker";
        options.id = "DM-Upgrade-Check";
        options.template = "modules/deprecated-modules/templates/upgradeCheck.html";
        options.width = 350;
        options.height = 800;
        return options;
    }

    getData() {
        return {
            modules: this.modules
        }
    }

    activateListeners(html) {
        super.activateListeners(html);
    }

    getActiveModules() {
        this.modules = [];
        for (let [name, module] of game.modules) {
            if(!module.active) {
                continue;
            }
            let state = States.Pending;
            let checkManifest = true;
            // See if this manifest is marked as compatible with 0.8.X
            if(this.versionIsGood(module.data.compatibleCoreVersion)) {
                state = States.UpToDate;
                checkManifest = false;
            }
            //If the manifest isn't pointing to somewhere to check for updates, don't bother checking
            if(checkManifest && !module.data.manifest) {
                state = States.Orphan;
                checkManifest = false;
            }
            // Add to the list of modules to show
            this.modules.push({
                name: module.data.name,
                title: module.data.title,
                state
            });
            // Download the latest manifest and see if it's marked as compatible with 0.8.X
            if(checkManifest) {
                ManifestRepository.getManifest(module).then(manifest => this.updateModuleList(module.data.name, manifest));
            }
        }
    }

    updateModuleList(moduleName, manifest) {
        for (let module of this.modules) {
            if(module.name === moduleName) {
                if(!manifest) {
                    module.state = States.Orphan;
                }
                else if(this.versionIsGood(manifest.compatibleCoreVersion)) {
                    module.state = States.Download;
                }
                else {
                    module.state = States.CheckNeeded;
                }
            }
        }
        this.render();
    }

    versionIsGood(moduleVersion) {
        return isNewerVersion(moduleVersion, "0.8.0");
    }

    _updateObject(_event, formData) {
    }
}