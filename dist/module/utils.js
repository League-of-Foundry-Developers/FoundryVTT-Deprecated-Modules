/**
 * The name of the module
 * Importance of this comment: 0
 */
export const modName = "deprecated-modules";
export var WarningCategory;
(function (WarningCategory) {
    WarningCategory["Core"] = "core";
    WarningCategory["Broken"] = "broken";
    WarningCategory["Replaced"] = "replaced";
    WarningCategory["Delisted"] = "delisted";
    WarningCategory["Abbandoned"] = "abbandoned";
})(WarningCategory || (WarningCategory = {}));
export var ModuleStateCategory;
(function (ModuleStateCategory) {
    ModuleStateCategory["STABLE"] = "STABLE";
    ModuleStateCategory["DEPRECATED"] = "DEPRECATED";
    ModuleStateCategory["DEVELOPING"] = "DEVELOPING";
    ModuleStateCategory["ABBANDONED"] = "ABBANDONED";
    ModuleStateCategory["MAINTENANCE"] = "MAINTENANCE";
})(ModuleStateCategory || (ModuleStateCategory = {}));
export const printWarningMessage = function (warningModel) {
    let message;
    if (warningModel.category == WarningCategory.Core) {
        message = "{} has been integrated into core Foundry, so it should be uninstalled.";
        if (warningModel.message) {
            message += " " + warningModel.message;
        }
    }
    else if (warningModel.category == WarningCategory.Broken) {
        message = "{} is partially broken and is no longer being maintained. As it could break further with any Foundry update, it is recommended that you uninstall it.";
        let messageBuilder = [];
        for (let i = 0; i < warningModel.moduleSuggested.length; i++) {
            let msg = "";
            if (warningModel.moduleSuggestedUrl[i]) {
                msg += "<b><u>" + "<a href='" + warningModel.moduleSuggestedUrl[i] + "'>" + warningModel.moduleSuggested[i] + "</a>" + "</u></b>.";
            }
            else if (warningModel.moduleSuggested[i]) {
                msg += "<b><u>" + warningModel.moduleSuggested[i] + "</u></b>.";
            }
            else {
                msg += "<b><u>" + "No module founded" + "</u></b>.";
            }
            messageBuilder.push(msg);
        }
        if (messageBuilder.length > 0) {
            message += messageBuilder.join(" or ");
        }
    }
    else if (warningModel.category == WarningCategory.Replaced) {
        message = "{} is no longer being maintained and could break with any Foundry update, if it hasn't already. It is recommended that you replace it with ";
        let messageBuilder = [];
        for (let i = 0; i < warningModel.moduleSuggested.length; i++) {
            let msg = "";
            if (warningModel.moduleSuggestedUrl[i]) {
                msg += "<b><u>" + "<a href='" + warningModel.moduleSuggestedUrl[i] + "'>" + warningModel.moduleSuggested[i] + "</a>" + "</u></b>.";
            }
            else if (warningModel.moduleSuggested[i]) {
                msg += "<b><u>" + warningModel.moduleSuggested[i] + "</u></b>.";
            }
            else {
                msg += "<b><u>" + "No module founded" + "</u></b>.";
            }
            messageBuilder.push(msg);
        }
        if (messageBuilder.length > 0) {
            message += messageBuilder.join(" or ");
        }
    }
    else if (warningModel.category == WarningCategory.Delisted) {
        message = "{} has been removed from Foundry's official module repository because it is no longer being maintained.";
        message += "You should consider uninstalling it, and it could break with any Foundry update.";
        let messageBuilder = [];
        for (let i = 0; i < warningModel.moduleSuggested.length; i++) {
            let msg = "";
            if (warningModel.moduleSuggestedUrl[i]) {
                msg += "<b><u>" + "<a href='" + warningModel.moduleSuggestedUrl[i] + "'>" + warningModel.moduleSuggested[i] + "</a>" + "</u></b>.";
            }
            else if (warningModel.moduleSuggested[i]) {
                msg += "<b><u>" + warningModel.moduleSuggested[i] + "</u></b>.";
            }
            else {
                msg += "<b><u>" + "No module founded" + "</u></b>.";
            }
            messageBuilder.push(msg);
        }
        if (messageBuilder.length > 0) {
            message += messageBuilder.join(" or ");
        }
    }
    else if (warningModel.category == WarningCategory.Abbandoned) {
        message = "{} his no longer being maintained.";
        let messageBuilder = [];
        for (let i = 0; i < warningModel.moduleSuggested.length; i++) {
            let msg = "";
            if (warningModel.moduleSuggestedUrl[i]) {
                msg += "<b><u>" + "<a href='" + warningModel.moduleSuggestedUrl[i] + "'>" + warningModel.moduleSuggested[i] + "</a>" + "</u></b>.";
            }
            else if (warningModel.moduleSuggested[i]) {
                msg += "<b><u>" + warningModel.moduleSuggested[i] + "</u></b>.";
            }
            else {
                msg += "<b><u>" + "No module founded" + "</u></b>.";
            }
            messageBuilder.push(msg);
        }
        if (messageBuilder.length > 0) {
            message += messageBuilder.join(" or ");
        }
    }
    message = message.replace("{}", "<b><u>" + warningModel.module + "</u></b>");
    return message;
};
