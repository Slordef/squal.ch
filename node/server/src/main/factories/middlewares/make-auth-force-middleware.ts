import { AuthForceMiddleware } from '../../middleware/auth-force-middleware';
import {
	SequelizeConnectionAttemptRepository
} from '../../../infra/database/sequelize/adapters/connection-attempts/sequelize-connection-attempts-repository';


export function makeAuthForceMiddleware() {
	const repository = new SequelizeConnectionAttemptRepository();
	return new AuthForceMiddleware(
		repository,
		repository,
		repository
	);
}