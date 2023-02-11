import { Controller } from '../../../domain/controller/controller';
import { HttpRequest } from '../../../domain/protocols/http-request';
import { HttpResponse } from '../../../domain/protocols/http-response';
import { serverInternalError } from '../../helper/server-internal-error';
import { Validation } from '../../../domain/usecases/validation';
import { ok } from '../../helper/ok';
import { invalidParameters } from '../../helper/invalid-parameters';
import { Authentication } from '../../../domain/usecases/authentication';
import { unauthorized } from '../../helper/unauthorized';

export class LoginController implements Controller {
	constructor(
        private readonly validation: Validation,
        private readonly authentication: Authentication
	) {
	}

	async handle(request: HttpRequest): Promise<HttpResponse> {
		try {
			const valid = this.validation.check(request.body);
			if (valid) {
				return invalidParameters();
			}

			const { email, password } = request.body;
			const auth = await this.authentication.auth(email, password);
			if (!auth) {
				return unauthorized();
			}

			return ok({ accessToken: auth.accessToken });
		} catch (error) {
			return serverInternalError(error);
		}
	}
}