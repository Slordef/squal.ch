import { Account } from '../../../models/account/account';

export interface GetAccountByEmail {
    getByEmail: (email: string) => Promise<Account | null>
}