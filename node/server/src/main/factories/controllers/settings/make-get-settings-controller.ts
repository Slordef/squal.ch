import { GetSettingsController } from '../../../controllers/settings/get-settings-controller';
import {
	SequelizeGetSettingsRepository
} from '../../../../infra/database/sequelize/adapters/settings/sequelize-get-settings-repository';

export function makeGetSettingsController() {
	return new GetSettingsController(
		new SequelizeGetSettingsRepository()
	);
}