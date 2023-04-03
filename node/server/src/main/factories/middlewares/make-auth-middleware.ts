import { AuthMiddleware } from '../../middleware/auth-middleware';
import {
	SequelizeAccountRepository
} from '../../../infra/database/sequelize/adapters/account/sequelize-account-repository';

export function makeAuthMiddleware() {
	return new AuthMiddleware(
		new SequelizeAccountRepository()
	);
}