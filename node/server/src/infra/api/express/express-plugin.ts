import { ExpressServer } from './express-server';
import { PluginManager } from '../../../domain/plugins/plugin-manager';
import { AppPlugin } from '../../../domain/plugins/app-plugin';

export class ExpressPlugin implements AppPlugin {
	install(pluginManager: PluginManager) {
		pluginManager.api = {
			apiServer: new ExpressServer()
		};
	}
}