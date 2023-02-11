import { AccountModel } from '../../infra/database/sequelize/models/account/account-model';
import { BcryptAdapter } from '../../infra/cryptography/bcrypt/bcrypt-adapter';
import { admin_email, admin_password, saltRounds } from '../config';

export async function makeAdmin() {
	const hasher = new BcryptAdapter(saltRounds);
	const password = await hasher.hash(admin_password);
	await AccountModel.findOrCreate({
		where: {
			email: admin_email,
		},
		defaults: {
			name: 'Admin',
			email: admin_email,
			password,
		}
	});
}