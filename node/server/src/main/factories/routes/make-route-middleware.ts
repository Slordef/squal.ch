import { NextFunction, Request, Response } from 'express';
import { Middleware } from '../../../domain/middlewares/middleware';
import { HttpRequest } from '../../../domain/protocols/http-request';

export function makeRouteMiddleware(middleware: Middleware) {
	return async (req: Request, res: Response, next: NextFunction) => {
		const httpRequest: HttpRequest = {
			body: req.body,
			params: req.params,
			headers: req.headers,
			account: req.account || null
		};
		const httpResponse = await middleware.handle(httpRequest);
		if (httpResponse.statusCode === 200) {
			Object.assign(req, httpResponse.body);
			next();
		} else {
			res.status(httpResponse.statusCode).json(httpResponse.body);
		}
	};
}