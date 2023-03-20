import { GetAccountByEmail } from '../../../../../domain/contracts/database/account/get-account-by-email';
import { GetAccountByToken } from '../../../../../domain/contracts/database/account/get-account-by-token';
import { Account } from '../../../../../domain/models/account/account';
import { AccountModel } from '../../models/account/account-model';
import { AccountAuthModel } from '../../models/account/account-auth-model';

export class SequelizeAccountRepository implements GetAccountByEmail, GetAccountByToken {
	async getByEmail(email: string): Promise<Account | null> {
		const account = await AccountModel.findOne({
			where: { email }
		});
		if (!account) {
			return null;
		}
		return account.dataValues;
	}

	async getByToken(token: string): Promise<Account | null> {
		const auth = await AccountAuthModel.findOne({
			where: { accessToken: token }
		});
		if (!auth) return null;

		const id = auth.dataValues.accountId;

		const account = await AccountModel.findOne({
			where: { id }
		});
		if (!account) return null;

		return account.dataValues;
	}
}