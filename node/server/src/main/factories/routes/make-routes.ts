import { Router } from 'express';
import { makeLoginController } from '../controllers/login/make-login-controller';
import { makeGetAllImagesController } from '../controllers/images/make-get-all-images-controller';
import { makeGetSettingsController } from '../controllers/settings/make-get-settings-controller';
import { makeContactController } from '../controllers/contact/make-contact-controller';
import { makePostImageController } from '../controllers/images/make-post-image-controller';
import { makeLoggedController } from '../controllers/login/make-logged-controller';
import { makeRoute } from './make-route';

export function makeRoutes(app: Router) {
	app.post('/login', ...makeRoute([], makeLoginController));
	app.get('/logged', ...makeRoute(['auth'], makeLoggedController));
	app.get('/images', ...makeRoute([], makeGetAllImagesController));
	app.get('/settings', ...makeRoute([], makeGetSettingsController));
	app.post('/contact', ...makeRoute([], makeContactController));
	app.post('/images', ...makeRoute(['auth'], makePostImageController));
}