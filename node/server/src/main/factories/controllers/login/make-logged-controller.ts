import { LoggedController } from '../../../controllers/login/logged-controller';

export function makeLoggedController() {
	return new LoggedController();
}