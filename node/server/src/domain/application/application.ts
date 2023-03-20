import { PluginManager } from '../plugins/plugin-manager';
import { AppPlugin } from '../plugins/app-plugin';
import { Database } from '../database/database';
import { ApiServer } from '../contracts/api/api-server';

export class Application {
	private pluginManager: PluginManager = new PluginManager();

	constructor(...args: { new(): AppPlugin }[]) {
		args.forEach(plugin => {
			const pluginInstance = new plugin();
			pluginInstance.install(this.pluginManager);
		});
	}

	get plugins() {
		return this.pluginManager;
	}

	async start(): Promise<void> {
		await this.pluginManager.getInterface<Database>('Database').connect();
		await this.pluginManager.getInterface<ApiServer>('ApiServer').start();
	}
}