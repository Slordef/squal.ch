import { AuthMiddleware } from '../../middleware/auth-middleware';
import {
	SequelizeGetAccountByTokenRepository
} from '../../../infra/database/sequelize/adapters/account/sequelize-get-account-by-token-repository';

export function makeAuthMiddleware() {
	return new AuthMiddleware(
		new SequelizeGetAccountByTokenRepository()
	);
}