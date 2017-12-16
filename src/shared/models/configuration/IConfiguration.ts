import {IConfigurationElement} from "shared/models/configuration/elements/IConfigurationElement";
import {ITag} from "shared/models/configuration/ITag"

export interface IConfiguration {
    configurationElements: IConfigurationElement[];
    tags: ITag[]; 
}