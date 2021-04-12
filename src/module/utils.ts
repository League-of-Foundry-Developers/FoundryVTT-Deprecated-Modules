import { WarningModel } from './WarningModel';
/**
 * The name of the module
 * Importance of this comment: 0
 */
export const modName = "deprecated-modules";

export enum WarningCategory {
  Core = "core", // The module's functionality has been integrated into core. (0-199)
  Broken =  "broken", // The module no longer works (200-299)
  Replaced = "replaced", // The module is no longer maintained and has been replaced by another module (300-499)
  Delisted = "delisted", // The module has been removed from Foundry's module list because it is no longer maintained (500-699)
  Abbandoned = "abbandoned", // The module is no longer maintained and is not been replaced from a known module (700-799)
}

export enum ModuleStateCategory {
  STABLE = "STABLE",
  DEPRECATED = "DEPRECATED",
  DEVELOPING = "DEVELOPING",
  ABBANDONED = "ABBANDONED",
  MAINTENANCE = "MAINTENANCE"
}

export const printWarningMessage = function(warningModel:WarningModel) {
  let message;
  if(warningModel.category == WarningCategory.Core) {
    let message = "{} has been integrated into core Foundry, so it should be uninstalled.";
      if(warningModel.message) {
          message += " " + warningModel.message;
      }
  }

  else if(warningModel.category == WarningCategory.Broken) {
      let message = "{} is partially broken and is no longer being maintained. As it could break further with any Foundry update, it is recommended that you uninstall it.";
      let messageBuilder = [];
      for (let i = 0; i < warningModel.moduleSuggested.length; i++) {
        let msg = "";
        if(warningModel.moduleSuggestedUrl[i]){
          msg += "<b><u>" + "<a href='"+warningModel.moduleSuggestedUrl[i]+"'>"+warningModel.moduleSuggested[i]+"</a>" + "</u></b>.";
        } else if(warningModel.moduleSuggested[i]){
          msg += "<b><u>" + warningModel.moduleSuggested[i] + "</u></b>.";
        }else{
          msg += "<b><u>" + "No module founded" + "</u></b>.";
        }
        messageBuilder.push( msg);
      }
      if(messageBuilder.length>0){
        message += messageBuilder.join(" or ");
      }
  }

  else if(warningModel.category == WarningCategory.Replaced) {
      let message = "{} is no longer being maintained and could break with any Foundry update, if it hasn't already. It is recommended that you replace it with ";
      let messageBuilder = [];
      for (let i = 0; i < warningModel.moduleSuggested.length; i++) {
        let msg = "";
        if(warningModel.moduleSuggestedUrl[i]){
          msg += "<b><u>" + "<a href='"+warningModel.moduleSuggestedUrl[i]+"'>"+warningModel.moduleSuggested[i]+"</a>" + "</u></b>.";
        } else if(warningModel.moduleSuggested[i]){
          msg += "<b><u>" + warningModel.moduleSuggested[i] + "</u></b>.";
        }else{
          msg += "<b><u>" + "No module founded" + "</u></b>.";
        }
        messageBuilder.push( msg);
      }
      if(messageBuilder.length>0){
        message += messageBuilder.join(" or ");
      }
  }

  else if(warningModel.category == WarningCategory.Delisted) {
      let message = "{} has been removed from Foundry's official module repository because it is no longer being maintained."
      message += "You should consider uninstalling it, and it could break with any Foundry update."
      let messageBuilder = [];
      for (let i = 0; i < warningModel.moduleSuggested.length; i++) {
        let msg = "";
        if(warningModel.moduleSuggestedUrl[i]){
          msg += "<b><u>" + "<a href='"+warningModel.moduleSuggestedUrl[i]+"'>"+warningModel.moduleSuggested[i]+"</a>" + "</u></b>.";
        } else if(warningModel.moduleSuggested[i]){
          msg += "<b><u>" + warningModel.moduleSuggested[i] + "</u></b>.";
        }else{
          msg += "<b><u>" + "No module founded" + "</u></b>.";
        }
        messageBuilder.push( msg);
      }
      if(messageBuilder.length>0){
        message += messageBuilder.join(" or ");
      }
  }

  else if(warningModel.category == WarningCategory.Abbandoned) {
    let message = "{} his no longer being maintained."
    let messageBuilder = [];
    for (let i = 0; i < warningModel.moduleSuggested.length; i++) {
      let msg = "";
      if(warningModel.moduleSuggestedUrl[i]){
        msg += "<b><u>" + "<a href='"+warningModel.moduleSuggestedUrl[i]+"'>"+warningModel.moduleSuggested[i]+"</a>" + "</u></b>.";
      } else if(warningModel.moduleSuggested[i]){
        msg += "<b><u>" + warningModel.moduleSuggested[i] + "</u></b>.";
      }else{
        msg += "<b><u>" + "No module founded" + "</u></b>.";
      }
      messageBuilder.push( msg);
    }
    if(messageBuilder.length>0){
      message += messageBuilder.join(" or ");
    }
  }
  message = message.replace("{}", "<b><u>" + warningModel.module + "</u></b>");
  return message;
}
