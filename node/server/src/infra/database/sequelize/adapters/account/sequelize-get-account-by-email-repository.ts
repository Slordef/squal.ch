import { GetAccountByEmail } from '../../../../../domain/contracts/database/account/get-account-by-email';
import { Account } from '../../../../../domain/models/account/account';
import { AccountModel } from '../../models/account/account-model';

export class SequelizeGetAccountByEmailRepository implements GetAccountByEmail {
	async getByEmail(email: string): Promise<Account | null> {
		const account = await AccountModel.findOne({
			where: { email }
		});
		if (!account) {
			return null;
		}
		return account.dataValues;
	}
}