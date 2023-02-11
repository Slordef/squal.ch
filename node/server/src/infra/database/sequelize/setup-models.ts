import { initAccountModel } from './models/account/account-model';
import { initAccountAuthModel } from './models/account/account-auth-model';
import { initArtImageModel } from './models/images/art-image-model';
import { initSettingsModel } from './models/settings/settings-model';
import { Sequelize } from 'sequelize';
import { initConnectionAttemptModel } from './models/connection-attempt/connection-attempt';

export function setupModels(sequelize: Sequelize): void {
	initAccountModel(sequelize);
	initAccountAuthModel(sequelize);
	initArtImageModel(sequelize);
	initSettingsModel(sequelize);
	initConnectionAttemptModel(sequelize);
}