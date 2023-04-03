import { admin_email, admin_password } from '../config';
import { Factory } from '../../domain/factory/factory';
import { Application } from '../../domain/application/application';
import { GetAccountByEmail } from '../../domain/contracts/database/account/get-account-by-email';
import { Hasher } from '../../domain/contracts/cryptography/hasher';
import { AddAccount } from '../../domain/contracts/database/account/add-account';

export class MakeAdmin implements Factory {
	async make(app: Application): Promise<void> {
		const account = await app.plugins.getInterface<GetAccountByEmail>('GetAccountByEmail').getByEmail(admin_email);
		if (account) {
			return;
		}
		const hasher = app.plugins.getInterface<Hasher>('Hasher');
		const password = await hasher.hash(admin_password);
		await app.plugins.getInterface<AddAccount>('AddAccount').add({
			name: 'Admin',
			email: admin_email,
			password,
		});
	}

}
