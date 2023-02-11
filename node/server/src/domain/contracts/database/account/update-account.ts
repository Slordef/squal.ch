import { Account } from '../../../models/account/account';

export interface UpdateAccount {
    update: (account: Account) => Promise<Account>
}