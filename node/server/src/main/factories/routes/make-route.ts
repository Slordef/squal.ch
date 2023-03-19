import { Middleware } from '../../../domain/middlewares/middleware';
import { Controller } from '../../../domain/controller/controller';
import { HttpRoute } from '../../../domain/protocols/http-route';

export function makeRoute(method: HttpRoute['method'], path: string, middlewares: Middleware[], controller: Controller): HttpRoute {
	return {
		method,
		path,
		middlewares,
		controller
	};
}