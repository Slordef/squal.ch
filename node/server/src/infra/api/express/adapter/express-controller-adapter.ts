import { Controller } from '../../../../domain/controller/controller';
import { Request, Response } from 'express';

export class ExpressControllerAdapter {
	adapt(controller: Controller) {
		return async (req: Request, res: Response) => {
			const httpRequest = {
				headers: req.headers,
				body: req.body,
				params: req.params,
				account: req.account,
			};
			const httpResponse = await controller.handle(httpRequest);
			res.status(httpResponse.statusCode).json(httpResponse.body);
		};
	}
}