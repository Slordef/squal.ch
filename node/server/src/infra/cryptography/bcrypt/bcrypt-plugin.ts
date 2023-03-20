import { AppPlugin } from '../../../domain/plugins/app-plugin';
import { PluginManager } from '../../../domain/plugins/plugin-manager';
import { BcryptAdapter } from './adapter/bcrypt-adapter';
import { Hasher } from '../../../domain/contracts/cryptography/hasher';
import { HashComparer } from '../../../domain/contracts/cryptography/hash-comparer';
import { saltRounds } from '../../../main/config';

export class BcryptPlugin implements AppPlugin {
	install(pluginManager: PluginManager) {
		const adapter = new BcryptAdapter(saltRounds);
		pluginManager.registerInterface<Hasher>('Hasher', adapter);
		pluginManager.registerInterface<HashComparer>('HashComparer', adapter);
	}
}