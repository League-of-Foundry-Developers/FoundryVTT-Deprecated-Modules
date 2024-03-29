import { ManifestRepository } from "./manifestRepository.js";
import { Settings } from "./settings.js";

export const States = Object.freeze({
    Pending: { icon: "fas fa-spinner fa-spin", hover: "Checking Manifest" },
    Orphan: { icon: "fas fa-question-circle", hover: "No Remote Manifest Found" },
    CheckNeeded: { icon: "fas fa-question-circle yellow", stack: true, hover: "Check Spreadsheet" },
    UpToDate: { icon: "fas fa-check-circle green", stack: true, hover: "V9 Compatible" },
    Download: { icon: "fas fa-arrow-circle-down darkgreen", hover: "Compatible After Update" },
    Incompatible: { icon: "fas fa-minus-circle red", hover: "NOT COMPATIBLE WITH V9" },
    ERROR: { icon: "fas fa-minus-circle", hover: "Error Auto-Checking Manifest" }
})

/**
 * FormApplication window for advanced configuration options.
 * @class
 * @extends FormApplication
 */
export class UpgradeCheck extends FormApplication {
    constructor(object, options) {
        super(object, options);
        game.settings.sheet.close();
        this.modules = [];
        this.checkSystem();
        this.getActiveModules(true);
    }

    static get defaultOptions() {
        const options = super.defaultOptions;
        options.title = "Version 9 Compatibility Check";
        options.id = "DM-Upgrade-Check";
        options.template = "modules/deprecated-modules/templates/upgradeCheck.html";
        options.width = 350;
        options.height = "auto";
        return options;
    }

    getData() {
        return {
            modules: this.modules,
            system: this.system
        }
    }

    activateListeners(html) {
        super.activateListeners(html);
        html.find('button[name="check-inactive"]').click(this.getActiveModules.bind(this, false));
    }

    checkSystem() {
        let state = States.Pending;
        let checkManifest = true;
        // See if this manifest is marked as compatible with V9
        if(this.versionIsGood(game.system.data.compatibleCoreVersion)) {
            state = States.UpToDate;
            checkManifest = false;
        }
        //If the manifest isn't pointing to somewhere to check for updates, don't bother checking
        if(checkManifest && !game.system.data.manifest) {
            state = States.Orphan;
            checkManifest = false;
        }
        this.system = {
            name: game.system.data.name,
            title: game.system.data.title,
            state
        }
        if(checkManifest) {
            ManifestRepository.getManifest(game.system)
            .then(manifest => {
                if(!manifest) {
                    this.system.state = States.Orphan;
                }
                else if(this.versionIsGood(manifest.compatibleCoreVersion)) {
                    this.system.state = States.Download;
                }
                else {
                    this.system.state = States.Incompatible;
                }
                this.render();
            })
            .catch(err => this.handleFailure(game.system.data.name, err));
        }
    }

    getActiveModules(activeOnly) {
        this.modules = [];
        for (let [name, module] of game.modules) {
            if(activeOnly && !module.active) {
                continue;
            }
            let state = States.Pending;
            let checkManifest = true;
            // See if this manifest is marked as compatible with V9
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
                active: module.active,
                state
            });
            // Download the latest manifest and see if it's marked as compatible with V9
            if(checkManifest) {
                ManifestRepository.getManifest(module)
                .then(manifest => this.updateModuleList(module.data.name, manifest))
                .catch(err => this.handleFailure(module.data.name, err));
            }
        }
        this.render();
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

    handleFailure(moduleName, err) {
        console.error("Error loading manifest for " + moduleName + ": ", err);
        for (let module of this.modules) {
            if(module.name === moduleName) {
                module.state = States.ERROR;
            }
        }
        this.render();
    }

    versionIsGood(moduleVersion) {
        return isNewerVersion(moduleVersion, "0.9.0");
    }

    _updateObject(_event, formData) {
    }
}