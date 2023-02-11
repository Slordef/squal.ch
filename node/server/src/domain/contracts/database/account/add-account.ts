import { Account } from '../../../models/account/account';

export interface AddAccount {
    add: (account: Account) => Promise<Account>
}