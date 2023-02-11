import { makeAuthMiddleware } from '../middlewares/make-auth-middleware';
import { makeAuthForceMiddleware } from '../middlewares/make-auth-force-middleware';
import { RequestHandler } from 'express';
import { Middleware } from '../../../domain/middlewares/middleware';
import { Controller } from '../../../domain/controller/controller';
import { makeRouteController } from './make-route-controller';
import { makeRouteMiddleware } from './make-route-middleware';

export function makeRoute(middlewares: ('auth' | (() => Middleware))[], controller: () => Controller): RequestHandler[] {
	const handlers = [];
	for (const middleware of middlewares) {
		if (middleware === 'auth') {
			handlers.push(makeRouteMiddleware(makeAuthMiddleware()));
			handlers.push(makeRouteMiddleware(makeAuthForceMiddleware()));
		} else {
			handlers.push(makeRouteMiddleware(middleware()));
		}
	}
	if (controller) {
		handlers.push(makeRouteController(controller()));
	}
	return handlers;
}