import { Controller } from '../../../domain/controller/controller';
import { HttpRequest } from '../../../domain/protocols/http-request';
import { HttpResponse } from '../../../domain/protocols/http-response';
import { Mailer } from '../../../domain/contracts/mails/mailer';
import { serverInternalError } from '../../helper/server-internal-error';
import { Validation } from '../../../domain/usecases/validation';
import { invalidParameters } from '../../helper/invalid-parameters';
import { ok } from '../../helper/ok';

export class ContactController implements Controller {

	constructor(
        private readonly validation: Validation,
        private readonly mailer: Mailer,
	) {
	}

	async handle(request: HttpRequest): Promise<HttpResponse> {
		try {
			const valid = this.validation.check(request.body);
			if (valid) {
				return invalidParameters();
			}

			const { name, email, message } = request.body;
			const sent = await this.mailer.send(email, name, message);
			if (sent) {
				return ok({
					success: true,
					error: ''
				});
			}
			return ok({
				success: false,
				error: 'Error sending email'
			});
		} catch (error) {
			return serverInternalError(error);
		}
	}

}