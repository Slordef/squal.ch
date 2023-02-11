import { SequelizeDatabase } from '../../../infra/database/sequelize/sequelize-database';
import {
	database_database,
	database_host,
	database_password,
	database_port,
	database_type,
	database_username
} from '../../config';

export function makeDatabase() {
	const database = new SequelizeDatabase(
		database_type,
		database_host,
		database_port,
		database_username,
		database_password,
		database_database
	);
	return database;
}