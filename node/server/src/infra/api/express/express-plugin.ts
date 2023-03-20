import { ExpressServer } from './express-server';
import { PluginManager } from '../../../domain/plugins/plugin-manager';
import { AppPlugin } from '../../../domain/plugins/app-plugin';
import { ApiServer } from '../../../domain/contracts/api/api-server';

export class ExpressPlugin implements AppPlugin {
	install(pluginManager: PluginManager) {
		pluginManager.registerInterface<ApiServer>('ApiServer', new ExpressServer());
	}
}