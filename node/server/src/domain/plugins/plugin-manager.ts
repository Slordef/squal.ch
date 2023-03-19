import { ApiPlugin } from './api-plugin';
import { CryptoPlugin } from './crypto-plugin';
import { DatabasePlugin } from './database-plugin';
import { MailPlugin } from './mail-plugin';

export class PluginManager {
	private apiPlugin: ApiPlugin | null = null;
	private cryptoPlugin: CryptoPlugin | null = null;
	private databasePlugin: DatabasePlugin | null = null;
	private mailsPlugin: MailPlugin | null = null;

	get api(): ApiPlugin {
		if (this.apiPlugin) {
			return this.apiPlugin;
		}
		throw new Error('Api plugin not installed');
	}

	set api(apiPlugin: ApiPlugin) {
		this.apiPlugin = apiPlugin;
	}

	get crypto(): CryptoPlugin {
		if (this.cryptoPlugin) {
			return this.cryptoPlugin;
		}
		throw new Error('Crypto plugin not installed');
	}

	set crypto(plugin: CryptoPlugin) {
		this.cryptoPlugin = plugin;
	}

	get database(): DatabasePlugin {
		if (this.databasePlugin) {
			return this.databasePlugin;
		}
		throw new Error('Database plugin not installed');
	}

	set database(plugin: DatabasePlugin) {
		this.databasePlugin = plugin;
	}

	get mails(): MailPlugin {
		if (this.mailsPlugin) {
			return this.mailsPlugin;
		}
		throw new Error('Mail plugin not installed');
	}

	set mails(plugin: MailPlugin) {
		this.mailsPlugin = plugin;
	}
}