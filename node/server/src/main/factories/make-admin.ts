import { admin_email, admin_password } from '../config';
import { Factory } from '../../domain/factory/factory';
import { Application } from '../../domain/application/application';

export class MakeAdmin implements Factory {
	async make(app: Application): Promise<void> {
		const account = await app.plugins.database.models.account.getAccountByEmail.getByEmail(admin_email);
		if (account) {
			return;
		}
		const hasher = app.plugins.crypto.hasher;
		const password = await hasher.hash(admin_password);
		await app.plugins.database.models.account.addAccount.add({
			name: 'Admin',
			email: admin_email,
			password,
		});
	}

}
