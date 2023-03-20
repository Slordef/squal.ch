import { GetSettingsController } from '../../../controllers/settings/get-settings-controller';
import {
	SequelizeSettingsRepository
} from '../../../../infra/database/sequelize/adapters/settings/sequelize-settings-repository';

export function makeGetSettingsController() {
	return new GetSettingsController(
		new SequelizeSettingsRepository()
	);
}