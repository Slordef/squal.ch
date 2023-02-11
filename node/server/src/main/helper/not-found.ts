import { HttpResponse } from '../../domain/protocols/http-response';

export function notFound(): HttpResponse {
	return {
		statusCode: 404,
		body: {
			error: 'Not Found'
		}
	};
}