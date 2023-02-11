import { Dialect, Sequelize } from 'sequelize';
import { Database } from '../../../domain/database/database';
import { setupModels } from './setup-models';

export class SequelizeDatabase implements Database {
	private readonly sequelize: Sequelize;

	constructor(
        private readonly type: Dialect,
        private readonly host: string,
        private readonly port: number,
        private readonly username: string,
        private readonly password: string,
        private readonly database: string,
	) {
		this.sequelize = new Sequelize({
			host: this.host,
			port: this.port,
			username: this.username,
			password: this.password,
			database: this.database,
			dialect: this.type,
			logging: false,
		});
	}

	async connect(): Promise<void> {
		await this.sequelize.authenticate();
		setupModels(this.sequelize);
		await this.sequelize.sync({ alter: true });
	}
}