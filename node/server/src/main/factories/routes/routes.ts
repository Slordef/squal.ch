import { HttpRoute } from '../../../domain/protocols/http-route';
import { makeRoute } from './make-route';
import { makeLoginController } from '../controllers/login/make-login-controller';
import { makeAuthMiddleware } from '../middlewares/make-auth-middleware';
import { makeLoggedController } from '../controllers/login/make-logged-controller';
import { makeGetAllImagesController } from '../controllers/images/make-get-all-images-controller';
import { makeGetSettingsController } from '../controllers/settings/make-get-settings-controller';
import { makeContactController } from '../controllers/contact/make-contact-controller';
import { makePostImageController } from '../controllers/images/make-post-image-controller';
import { makeGetAllCategoriesController } from '../controllers/categories/make-get-all-categories-controller';

export const routes: HttpRoute[] = [
	makeRoute('post', '/api/login', [], makeLoginController()),
	makeRoute('get', '/api/logged', [makeAuthMiddleware()], makeLoggedController()),
	makeRoute('get', '/api/images', [], makeGetAllImagesController()),
	makeRoute('get', '/api/settings', [], makeGetSettingsController()),
	makeRoute('post', '/api/contact', [], makeContactController()),
	makeRoute('post', '/api/images', [makeAuthMiddleware()], makePostImageController()),
	makeRoute('get', '/api/categories', [makeAuthMiddleware()], makeGetAllCategoriesController()),
];