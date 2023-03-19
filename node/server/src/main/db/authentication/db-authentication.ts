import { Authentication } from '../../../domain/usecases/authentication';
import { GetAccountByEmail } from '../../../domain/contracts/database/account/get-account-by-email';
import { AccountAuth } from '../../../domain/models/account/account-auth';
import { HashComparer } from '../../../domain/contracts/cryptography/hash-comparer';
import { AddAuth } from '../../../domain/contracts/database/auth/add-auth';
import { Encrypter } from '../../../domain/contracts/cryptography/encrypter';

export class DbAuthentication implements Authentication {
	constructor(
        private readonly getAccountByEmailRepository: GetAccountByEmail,
        private readonly HashComparer: HashComparer,
        private readonly encrypter: Encrypter,
        private readonly addAuthRepository: AddAuth,
	) {
	}

	async auth(email: string, password: string): Promise<AccountAuth | null> {
		const account = await this.getAccountByEmailRepository.getByEmail(email);
		if (!account || !account.id) {
			return null;
		}

		const isValid = await this.HashComparer.compare(password, account.password);
		if (!isValid) {
			return null;
		}

		const accessToken = await this.encrypter.encrypt(account.id.toString());

		const auth = {
			accountId: account.id,
			accessToken,
			refreshToken: '',
		};

		await this.addAuthRepository.add(auth);

		return auth;
	}
}