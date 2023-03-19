import { PluginManager } from '../plugins/plugin-manager';
import { AppPlugin } from '../plugins/app-plugin';

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
		await this.pluginManager.database.database.connect();
		await this.pluginManager.api.apiServer.start();
	}
}