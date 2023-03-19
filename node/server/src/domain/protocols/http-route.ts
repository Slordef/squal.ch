import { Controller } from '../controller/controller';
import { Middleware } from '../middlewares/middleware';

export interface HttpRoute {
    method: 'get' | 'post' | 'put' | 'delete';
    path: string;
    middlewares: Middleware[];
    controller: Controller;
}