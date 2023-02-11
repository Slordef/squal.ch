import { HttpResponse } from '../../domain/protocols/http-response';

export function invalidParameters(): HttpResponse {
	return {
		statusCode: 400,
		body: {
			error: 'Invalid parameters'
		}
	};
}