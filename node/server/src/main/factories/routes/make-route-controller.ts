import { Controller } from '../../../domain/controller/controller';
import { Request, Response } from 'express';
import { HttpRequest } from '../../../domain/protocols/http-request';

export function makeRouteController(controller: Controller) {
	return async (req: Request, res: Response) => {
		const httpRequest: HttpRequest = {
			headers: req.headers,
			body: req.body,
			params: req.params,
			account: req.account,
			files: req.files
		};
		const httpResponse = await controller.handle(httpRequest);
		res.status(httpResponse.statusCode).json(httpResponse.body);
	};
}