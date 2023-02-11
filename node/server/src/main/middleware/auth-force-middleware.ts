import { Middleware } from '../../domain/middlewares/middleware';
import { HttpRequest } from '../../domain/protocols/http-request';
import { HttpResponse } from '../../domain/protocols/http-response';
import { unauthorized } from '../helper/unauthorized';
import { GetConnectionAttempts } from '../../domain/contracts/database/connection-attempt/get-connection-attempts';
import { AddConnectionAttempt } from '../../domain/contracts/database/connection-attempt/add-connection-attempt';
import { DelConnectionAttempts } from '../../domain/contracts/database/connection-attempt/del-connection-attempts';

export class AuthForceMiddleware implements Middleware {
	constructor(
        private readonly getConnectionAttempts: GetConnectionAttempts,
        private readonly delConnectionAttemps: DelConnectionAttempts,
        private readonly addConnectionAttempt: AddConnectionAttempt
	) {
	}

	async handle(request: HttpRequest): Promise<HttpResponse> {
		const ip = request.headers?.['x-forwarded-for'];
		if (!ip) {
			return unauthorized();
		}
		if (request.account) {
			await this.delConnectionAttemps.del(ip);
			return {
				statusCode: 200,
				body: {}
			};
		}
		const attempts = await this.getConnectionAttempts.get(ip);
		const now = Date.now();
		const considerTime = now - 1000 * 60 * 60 * 24; // 24 hours
		const considered = attempts.filter(attempt => attempt.timestamp > considerTime);
		if (considered.length > 5) {
			return unauthorized();
		}
		await this.addConnectionAttempt.add({
			ip,
			timestamp: now
		});
		return {
			statusCode: 200,
			body: {}
		};
	}
}