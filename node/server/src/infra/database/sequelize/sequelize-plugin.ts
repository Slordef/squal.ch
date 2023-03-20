import { AppPlugin } from '../../../domain/plugins/app-plugin';
import { PluginManager } from '../../../domain/plugins/plugin-manager';
import { SequelizeDatabase } from './sequelize-database';
import {
	database_database,
	database_host,
	database_password,
	database_port,
	database_type,
	database_username
} from '../../../main/config';
import { Database } from '../../../domain/database/database';
import { GetAccountByEmail } from '../../../domain/contracts/database/account/get-account-by-email';
import { GetAccountByToken } from '../../../domain/contracts/database/account/get-account-by-token';
import { AddAuth } from '../../../domain/contracts/database/auth/add-auth';
import { AddConnectionAttempt } from '../../../domain/contracts/database/connection-attempt/add-connection-attempt';
import { DelConnectionAttempts } from '../../../domain/contracts/database/connection-attempt/del-connection-attempts';
import { GetConnectionAttempts } from '../../../domain/contracts/database/connection-attempt/get-connection-attempts';
import { AddImage } from '../../../domain/contracts/database/images/add-image';
import { GetAllImages } from '../../../domain/contracts/database/images/get-all-images';
import { GetAllCategories } from '../../../domain/contracts/database/category/get-all-categories';
import { GetSettings } from '../../../domain/contracts/database/settings/get-settings';
import { SequelizeAccountRepository } from './adapters/account/sequelize-account-repository';
import { SequelizeAuthRepository } from './adapters/auth/sequelize-auth-repository';
import {
	SequelizeConnectionAttemptRepository
} from './adapters/connection-attempts/sequelize-connection-attempts-repository';
import { SequelizeImagesRepository } from './adapters/images/sequelize-images-repository';
import { SequelizeCategoriesRepository } from './adapters/categories/sequelize-categories-repository';
import { SequelizeSettingsRepository } from './adapters/settings/sequelize-settings-repository';

export class SequelizePlugin implements AppPlugin {
	install(pluginManager: PluginManager) {
		const database = new SequelizeDatabase(
			database_type,
			database_host,
			database_port,
			database_username,
			database_password,
			database_database
		);
		pluginManager.registerInterface<Database>('Database', database);

		const sequelizeAccountRepository = new SequelizeAccountRepository();
		pluginManager.registerInterface<GetAccountByEmail>('GetAccountByEmail', sequelizeAccountRepository);
		pluginManager.registerInterface<GetAccountByToken>('GetAccountByToken', sequelizeAccountRepository);

		const sequelizeAuthRepository = new SequelizeAuthRepository();
		pluginManager.registerInterface<AddAuth>('AddAuth', sequelizeAuthRepository);

		const sequelizeConnectionAttemptRepository = new SequelizeConnectionAttemptRepository();
		pluginManager.registerInterface<AddConnectionAttempt>('AddConnectionAttempt', sequelizeConnectionAttemptRepository);
		pluginManager.registerInterface<DelConnectionAttempts>('DelConnectionAttempts', sequelizeConnectionAttemptRepository);
		pluginManager.registerInterface<GetConnectionAttempts>('GetConnectionAttempts', sequelizeConnectionAttemptRepository);

		const sequelizeImagesRepository = new SequelizeImagesRepository();
		pluginManager.registerInterface<AddImage>('AddImage', sequelizeImagesRepository);
		pluginManager.registerInterface<GetAllImages>('GetAllImages', sequelizeImagesRepository);

		const sequelizeCategoriesRepository = new SequelizeCategoriesRepository();
		pluginManager.registerInterface<GetAllCategories>('GetAllCategories', sequelizeCategoriesRepository);

		const sequelizeSettingsRepository = new SequelizeSettingsRepository();
		pluginManager.registerInterface<GetSettings>('GetSettings', sequelizeSettingsRepository);
	}
}