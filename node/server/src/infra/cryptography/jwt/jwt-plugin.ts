import { AppPlugin } from '../../../domain/plugins/app-plugin';
import { PluginManager } from '../../../domain/plugins/plugin-manager';
import { JwtAdapter } from './adapter/jwt-adapter';
import { secret } from '../../../main/config';
import { Encrypter } from '../../../domain/contracts/cryptography/encrypter';
import { Decrypter } from '../../../domain/contracts/cryptography/decrypter';

export class JwtPlugin implements AppPlugin {
	install(pluginManager: PluginManager) {
		const jwt = new JwtAdapter(secret);
		pluginManager.registerInterface<Encrypter>('Encrypter', jwt);
		pluginManager.registerInterface<Decrypter>('Decrypter', jwt);
	}
}