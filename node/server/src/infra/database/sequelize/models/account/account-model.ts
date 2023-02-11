import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { Account } from '../../../../../domain/models/account/account';

export class AccountModel extends Model<Account, Optional<Account, 'id'>> {
}

export const initAccountModel = (sequelize: Sequelize) =>
	AccountModel.init({
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	}, {
		sequelize,
		modelName: 'Account',
	});