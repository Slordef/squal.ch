import { AuthForceMiddleware } from '../../middleware/auth-force-middleware';
import {
	SequelizeGetConnectionAttemptsRepository
} from '../../../infra/database/sequelize/adapters/connection-attempts/sequelize-get-connection-attempts-repository';
import {
	SequelizeAddConnectionAttemptRepository
} from '../../../infra/database/sequelize/adapters/connection-attempts/sequelize-connection-attempts-repository';
import {
	SequelizeDelConnectionAttemptsRepository
} from '../../../infra/database/sequelize/adapters/connection-attempts/sequelize-del-connection-attempts-repository';

export function makeAuthForceMiddleware() {
	return new AuthForceMiddleware(
		new SequelizeGetConnectionAttemptsRepository(),
		new SequelizeDelConnectionAttemptsRepository(),
		new SequelizeAddConnectionAttemptRepository()
	);
}