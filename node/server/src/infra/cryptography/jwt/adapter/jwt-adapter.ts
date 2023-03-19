import { Encrypter } from '../../../../domain/contracts/cryptography/encrypter';
import { Decrypter } from '../../../../domain/contracts/cryptography/decrypter';
import { sign, verify } from 'jsonwebtoken';

export class JwtAdapter implements Encrypter, Decrypter {
	constructor(
        private readonly secret: string
	) {
	}

	async decrypt(token: string): Promise<boolean> {
		const check = verify(token, this.secret);
		return !!check;
	}

	async encrypt(value: string): Promise<string> {
		return sign(value, this.secret);
	}

}