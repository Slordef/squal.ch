import { AppPlugin } from '../../../domain/plugins/app-plugin';
import { PluginManager } from '../../../domain/plugins/plugin-manager';
import { JwtAdapter } from './adapter/jwt-adapter';
import { secret } from '../../../main/config';

export class JwtPlugin implements AppPlugin {
	install(pluginManager: PluginManager) {
		const jwt = new JwtAdapter(secret);
		pluginManager.crypto.encrypter = jwt;
		pluginManager.crypto.decrypter = jwt;
	}

}