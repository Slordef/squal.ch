import { PluginManager } from './plugin-manager';

export interface AppPlugin {
    install(pluginManager: PluginManager): void;
}