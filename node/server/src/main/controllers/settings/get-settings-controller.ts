import { Controller } from '../../../domain/controller/controller';
import { HttpResponse } from '../../../domain/protocols/http-response';
import { GetSettings } from '../../../domain/contracts/database/settings/get-settings';
import { serverInternalError } from '../../helper/server-internal-error';
import { ok } from '../../helper/ok';

export class GetSettingsController implements Controller {

	constructor(
        private readonly getSettings: GetSettings
	) {
	}

	async handle(): Promise<HttpResponse> {
		try {
			const settings = await this.getSettings.get();
			return ok(settings);
		} catch (error) {
			return serverInternalError(error);
		}
	}

}