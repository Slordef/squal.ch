import { DataTypes, Model, Sequelize } from 'sequelize';
import { Settings } from '../../../../../domain/models/settings/settings';

export class SettingsModel extends Model<Settings> {
}

export const initSettingsModel = (sequelize: Sequelize) =>
	SettingsModel.init({
		homeText: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		homeImage: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	}, {
		sequelize,
		modelName: 'Settings',
	});