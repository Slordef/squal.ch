import { HttpResponse } from '../../domain/protocols/http-response';

export function serverInternalError(error: any): HttpResponse {
	console.error(error);
	return {
		statusCode: 500,
		body: {
			error: 'Internal server error'
		}
	};
}