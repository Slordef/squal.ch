import { DbAuthentication } from '../../../db/authentication/db-authentication';
import {
	SequelizeGetAccountByEmailRepository
} from '../../../../infra/database/sequelize/adapters/account/sequelize-get-account-by-email-repository';
import {
	SequelizeAddAuthRepository
} from '../../../../infra/database/sequelize/adapters/auth/sequelize-add-auth-repository';
import { BcryptAdapter } from '../../../../infra/cryptography/bcrypt/adapter/bcrypt-adapter';
import { JwtAdapter } from '../../../../infra/cryptography/jwt/adapter/jwt-adapter';
import { saltRounds, secret } from '../../../config';

export function makeAuthentication() {
	return new DbAuthentication(
		new SequelizeGetAccountByEmailRepository(),
		new BcryptAdapter(saltRounds),
		new JwtAdapter(secret),
		new SequelizeAddAuthRepository(),
	);
}