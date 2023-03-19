import { Middleware } from '../../../../domain/middlewares/middleware';
import { NextFunction, Request, Response } from 'express';
import { HttpRequest } from '../../../../domain/protocols/http-request';

export class ExpressMiddlewareAdapter {
	adapt(middleware: Middleware) {
		return async (req: Request, res: Response, next: NextFunction) => {
			req.headers['x-forwarded-for'] ??= req.socket.remoteAddress;
			const httpRequest: HttpRequest = {
				headers: req.headers,
				body: req.body,
				params: req.params,
				account: req.account,
			};
			const httpResponse = await middleware.handle(httpRequest);
			if (httpResponse.statusCode === 200) {
				Object.assign(req, httpResponse.body);
				return next();
			}
			return res.status(httpResponse.statusCode).json(httpResponse.body);
		};
	}
}