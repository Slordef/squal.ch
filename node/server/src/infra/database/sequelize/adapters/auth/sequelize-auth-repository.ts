import { AddAuth } from '../../../../../domain/contracts/database/auth/add-auth';
import { AccountAuth } from '../../../../../domain/models/account/account-auth';
import { AccountAuthModel } from '../../models/account/account-auth-model';

export class SequelizeAuthRepository implements AddAuth {
	async add(data: AccountAuth): Promise<AccountAuth> {
		const accontAuth = await AccountAuthModel.create(data);
		return accontAuth.dataValues;
	}
}