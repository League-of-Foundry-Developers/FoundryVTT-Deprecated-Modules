import { ModuleStateCategory, WarningCategory } from './utils';
export class WarningModel {

  id: number;
  module: string;
  category: WarningCategory;
  coreVersion: string;
  message: string;
  inactive?: boolean = false;
  highestVersion?:string;

  urlModuleReplaced?: string;
  urlFoundryHub?: string;
  moduleSuggested? : string;
  urlModuleSuggested? : string;
  stateModuleSuggested? : ModuleStateCategory;

  constructor(
    id: number,
    module: string,
    category: WarningCategory,
    message: string,
    coreVersion: string,
    inactive?: boolean,
    highestVersion?:string,
    urlModuleReplaced?: string,
    urlFoundryHub?: string,
    urlModuleSuggested? : string,
    stateModuleSuggested? : ModuleStateCategory,
  ){
    this.id = id;
    this.module = module;
    this.category = category;
    this.message = message;
    this.coreVersion = coreVersion;
    this.inactive = inactive;
    this.highestVersion = highestVersion,
    this.urlModuleReplaced = urlModuleReplaced;
    this.urlFoundryHub = urlFoundryHub;
    this.urlModuleSuggested = urlModuleSuggested;
    this.stateModuleSuggested = stateModuleSuggested;
  }
}
