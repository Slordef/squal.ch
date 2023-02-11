import { DataTypes, Model, Sequelize } from 'sequelize';
import { AccountAuth } from '../../../../../domain/models/account/account-auth';

export class AccountAuthModel extends Model<AccountAuth> {
}

export const initAccountAuthModel = (sequelize: Sequelize) =>
	AccountAuthModel.init({
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		accessToken: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		refreshToken: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	}, {
		sequelize,
		modelName: 'AccountAuth',
	});