import { Controller } from '../../../domain/controller/controller';
import { HttpResponse } from '../../../domain/protocols/http-response';
import { ok } from '../../helper/ok';

export class LoggedController implements Controller {
	async handle(): Promise<HttpResponse> {
		return ok({ success: true });
	}
}