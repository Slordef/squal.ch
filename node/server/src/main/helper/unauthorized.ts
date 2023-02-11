import { HttpResponse } from '../../domain/protocols/http-response';

export function unauthorized(): HttpResponse {
	return {
		statusCode: 401,
		body: {
			error: 'Unauthorized'
		}
	};
}