import { DbAuthentication } from '../../../db/authentication/db-authentication';
import { SequelizeAuthRepository } from '../../../../infra/database/sequelize/adapters/auth/sequelize-auth-repository';
import { BcryptAdapter } from '../../../../infra/cryptography/bcrypt/adapter/bcrypt-adapter';
import { JwtAdapter } from '../../../../infra/cryptography/jwt/adapter/jwt-adapter';
import { saltRounds, secret } from '../../../config';
import {
	SequelizeAccountRepository
} from '../../../../infra/database/sequelize/adapters/account/sequelize-account-repository';

export function makeAuthentication() {
	return new DbAuthentication(
		new SequelizeAccountRepository(),
		new BcryptAdapter(saltRounds),
		new JwtAdapter(secret),
		new SequelizeAuthRepository(),
	);
}