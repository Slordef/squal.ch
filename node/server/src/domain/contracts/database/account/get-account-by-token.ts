import { Account } from '../../../models/account/account';

export interface GetAccountByToken {
    getByToken(token: string): Promise<Account | null>;
}