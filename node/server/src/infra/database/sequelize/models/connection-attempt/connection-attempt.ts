import { DataTypes, Model, Sequelize } from 'sequelize';
import { ConnectionAttempt } from '../../../../../domain/models/connection-attempt/connection-attempt';

export class ConnectionAttemptModel extends Model<ConnectionAttempt> {
}

export const initConnectionAttemptModel = (sequelize: Sequelize) =>
	ConnectionAttemptModel.init({
		ip: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		timestamp: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	}, {
		sequelize,
		modelName: 'ConnectionAttempt',
	});
