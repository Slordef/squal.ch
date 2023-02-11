import { Encrypt } from '../../../domain/contracts/cryptography/encrypt';
import { Decrypt } from '../../../domain/contracts/cryptography/decrypt';
import { sign, verify } from 'jsonwebtoken';

export class JwtAdapter implements Encrypt, Decrypt {
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