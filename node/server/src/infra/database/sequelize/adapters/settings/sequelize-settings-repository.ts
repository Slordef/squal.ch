import { GetSettings } from '../../../../../domain/contracts/database/settings/get-settings';
import { Settings } from '../../../../../domain/models/settings/settings';
import { SettingsModel } from '../../models/settings/settings-model';

export class SequelizeSettingsRepository implements GetSettings {
	async get(): Promise<Settings | null> {
		const allSettings = await SettingsModel.findAll({
			limit: 1
		});
		let settings = allSettings[0];
		if (!settings) {
			settings = await SettingsModel.create({
				homeText: '',
				homeImage: ''
			});
		}
		return settings.dataValues;
	}
}