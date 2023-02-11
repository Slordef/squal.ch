import { Hasher } from '../../../domain/contracts/cryptography/hasher';
import { HashCompare } from '../../../domain/contracts/cryptography/hash-compare';
import { compare, hash } from 'bcrypt';

export class BcryptAdapter implements Hasher, HashCompare {
	constructor(
        private readonly salt: number
	) {
	}

	compare(value: string, hash: string): Promise<boolean> {
		return compare(value, hash);
	}

	hash(value: string): Promise<string> {
		return hash(value, this.salt);
	}
}