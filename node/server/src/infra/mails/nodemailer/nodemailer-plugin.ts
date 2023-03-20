import { AppPlugin } from '../../../domain/plugins/app-plugin';
import { PluginManager } from '../../../domain/plugins/plugin-manager';
import { NodemailerAdapter } from './nodemailer-adapter';
import { mail_from, mail_host, mail_password, mail_username } from '../../../main/config';
import { Mailer } from '../../../domain/contracts/mails/mailer';

export class NodemailerPlugin implements AppPlugin {
	install(pluginManager: PluginManager) {
		const adapter = new NodemailerAdapter(
			mail_host,
			mail_username,
			mail_password,
			mail_from
		);
		pluginManager.registerInterface<Mailer>('Mailer', adapter);
	}
}