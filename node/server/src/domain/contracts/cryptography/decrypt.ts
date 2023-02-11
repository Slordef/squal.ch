export interface Decrypt {
    decrypt: (token: string) => Promise<boolean>;
}