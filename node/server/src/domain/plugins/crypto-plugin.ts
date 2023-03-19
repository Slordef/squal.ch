import { Encrypter } from '../contracts/cryptography/encrypter';
import { Decrypter } from '../contracts/cryptography/decrypter';
import { HashComparer } from '../contracts/cryptography/hash-comparer';
import { Hasher } from '../contracts/cryptography/hasher';

export interface CryptoPlugin {
    encrypter: Encrypter;
    decrypter: Decrypter;
    hashComparer: HashComparer;
    hasher: Hasher;
}