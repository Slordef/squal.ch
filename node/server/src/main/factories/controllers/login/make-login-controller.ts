import { LoginValidation } from '../../../validations/login-validation';
import { LoginController } from '../../../controllers/login/login-controller';
import { makeAuthentication } from '../../db/authentication/make-authentication';

export function makeLoginController() {
	return new LoginController(
		new LoginValidation(),
		makeAuthentication(),
	);
}