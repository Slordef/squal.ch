// import { ExpressServer } from '../../../infra/api/express/express-server';
// import { port } from '../../config';
// import { makeRoutes } from '../routes/make-routes';
// import { Router } from 'express';
//
// export function makeServer() {
// 	const server = new ExpressServer(port);
// 	const app = server.getApp();
// 	const apiRouter = Router();
// 	makeRoutes(apiRouter);
// 	app.use('/api', apiRouter);
// 	server.setup();
// 	return server;
// }