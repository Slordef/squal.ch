import { HttpResponse } from '../../domain/protocols/http-response';

export function ok<T>(data: T): HttpResponse<T> {
	return {
		statusCode: 200,
		body: data
	};
}