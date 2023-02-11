import { Account } from '../../../models/account/account';

export interface GetAccount {
    get: (id: string) => Promise<Account>
}