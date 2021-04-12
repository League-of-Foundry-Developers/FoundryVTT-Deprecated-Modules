export class WarningModel {
    constructor(id, module, category, message, coreVersion, inactive, highestVersion, moduleUrl, moduleTitle, urlFoundryHub, moduleSuggestedUrl, moduleSuggestedTitle, moduleSuggestedState, moduleSuggestedManifestJson) {
        this.inactive = false;
        this.id = id;
        this.module = module;
        this.category = category;
        this.message = message;
        this.coreVersion = coreVersion;
        this.inactive = inactive;
        this.highestVersion = highestVersion,
            this.moduleUrl = moduleUrl,
            this.moduleTitle = moduleTitle;
        this.urlFoundryHub = urlFoundryHub;
        this.moduleSuggestedUrl = moduleSuggestedUrl;
        this.moduleSuggestedTitle = moduleSuggestedTitle;
        this.moduleSuggestedState = moduleSuggestedState;
        this.moduleSuggestedManifestJson = moduleSuggestedManifestJson;
    }
}
