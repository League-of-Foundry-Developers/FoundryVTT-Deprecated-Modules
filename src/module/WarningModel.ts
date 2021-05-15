import { ModuleStateCategory, WarningCategory } from './utils';
export class WarningModel {

  id: number;
  module: string;
  category: WarningCategory;
  coreVersion: string;
  message: string;
  inactive?: boolean = false;
  highestVersion?:string;

  moduleUrl?: string;
  moduleTitle?: string;
  
  urlFoundryHub?: string;

  moduleSuggested? : string[];
  moduleSuggestedTitle? : string[];
  moduleSuggestedUrl? : string[];
  moduleSuggestedState? : ModuleStateCategory[];
  moduleSuggestedManifestJson?:string[];

  constructor(
    id: number,
    module: string,
    category: WarningCategory,
    message: string,
    coreVersion: string,
    inactive?: boolean,
    highestVersion?:string,
    moduleUrl?: string,
    moduleTitle?: string,
    urlFoundryHub?: string,
    moduleSuggestedUrl? : string[],
    moduleSuggestedTitle?: string[],
    moduleSuggestedState? : ModuleStateCategory[],
    moduleSuggestedManifestJson?:string[]
  ){
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
