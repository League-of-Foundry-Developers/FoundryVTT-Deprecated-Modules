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
  DEPRECATED = "DEPRECATED",
  DEVELOPING = "DEVELOPING",
  ABBANDONED = "ABBANDONED"
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
      if(warningModel.urlModuleSuggested){
        message += "<b><u>" + "<a href='"+warningModel.urlModuleSuggested+"'>"+warningModel.moduleSuggested+"</a>" + "</u></b>.";
      } else if(warningModel.moduleSuggested){
        message += "<b><u>" + warningModel.moduleSuggested + "</u></b>.";
      }else{
        message += "";
      }
  }

  else if(warningModel.category == WarningCategory.Replaced) {
      let message = "{} is no longer being maintained and could break with any Foundry update, if it hasn't already. It is recommended that you replace it with ";
      if(warningModel.urlModuleSuggested){
        message += "<b><u>" + "<a href='"+warningModel.urlModuleSuggested+"'>"+warningModel.moduleSuggested+"</a>" + "</u></b>.";
      } else if(warningModel.moduleSuggested){
        message += "<b><u>" + warningModel.moduleSuggested + "</u></b>.";
      }else{
        message += "<b><u>" + "No module founded" + "</u></b>.";
      }
  }

  else if(warningModel.category == WarningCategory.Delisted) {
      let message = "{} has been removed from Foundry's official module repository because it is no longer being maintained."
      message += "You should consider uninstalling it, and it could break with any Foundry update."
      if(warningModel.urlModuleSuggested){
        message += "<b><u>" + "<a href='"+warningModel.urlModuleSuggested+"'>"+warningModel.moduleSuggested+"</a>" + "</u></b>.";
      } else if(warningModel.moduleSuggested){
        message += "<b><u>" + warningModel.moduleSuggested + "</u></b>.";
      }else{
        message += "";
      }
  }

  else if(warningModel.category == WarningCategory.Abbandoned) {
    let message = "{} his no longer being maintained."
    message += "You should consider uninstalling it, and it could break with any Foundry update."
    if(warningModel.urlModuleSuggested){
      message += "<b><u>" + "<a href='"+warningModel.urlModuleSuggested+"'>"+warningModel.moduleSuggested+"</a>" + "</u></b>.";
    } else if(warningModel.moduleSuggested){
      message += "<b><u>" + warningModel.moduleSuggested + "</u></b>.";
    }else{
      message += "";
    }
  }
  message = message.replace("{}", "<b><u>" + warningModel.module + "</u></b>");
  return message;
}
