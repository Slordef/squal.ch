import express, { Express } from 'express';
import cors from 'cors';
import { ApiServer } from '../../../domain/contracts/api/api-server';
import { HttpRoute } from '../../../domain/protocols/http-route';
import { ExpressMiddlewareAdapter } from './adapter/express-middleware-adapter';
import { ExpressControllerAdapter } from './adapter/express-controller-adapter';
import { ApiConfig } from '../../../domain/contracts/api/api-config';

export class ExpressServer implements ApiServer {
	private readonly app: Express;
	private port = '3000';

	constructor() {
		this.app = express();
		this.app.use('/static', express.static('public/static'));
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(cors());
		this.app.use((req, res, next) => {
			console.log(`${req.method} ${req.url}`);
			next();
		});
	}

	public setConfig(config: ApiConfig) {
		this.port = config.port;
		this.setRoutes(config.routes);
	}

	public start() {
		this.app.listen(this.port, () => {
			console.log(`Server is running on port ${this.port}`);
		});
	}

	private setRoutes(routes: HttpRoute[]) {
		const middlewareAdapter = new ExpressMiddlewareAdapter();
		const controllerAdapter = new ExpressControllerAdapter();
		routes.forEach(route => {
			const middlewares = route.middlewares.map(middleware => middlewareAdapter.adapt(middleware));
			this.app[route.method](route.path, ...middlewares, controllerAdapter.adapt(route.controller));
		});
		this.app.all('*', (req, res) => {
			res.status(404).json({ message: 'Not found' });
		});
	}
}