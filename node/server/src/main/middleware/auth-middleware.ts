import { Middleware } from '../../domain/middlewares/middleware';
import { HttpRequest } from '../../domain/protocols/http-request';
import { GetAccountByToken } from '../../domain/contracts/database/account/get-account-by-token';
import { HttpResponse } from '../../domain/protocols/http-response';
import { unauthorized } from '../helper/unauthorized';

export class AuthMiddleware implements Middleware {

	constructor(
        private readonly getAccountByToken: GetAccountByToken
	) {
	}

	async handle(request: HttpRequest): Promise<HttpResponse> {
		const accessToken = request.headers?.['authorization'];
		if (accessToken) {
			const account = await this.getAccountByToken.getByToken(accessToken);
			if (account) {
				return {
					statusCode: 200,
					body: {
						account
					}
				};
			}
		}
		return unauthorized();
	}
}