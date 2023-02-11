import { AccountAuth } from '../../../models/account/account-auth';

export interface AddAuth {
    add: (data: AccountAuth) => Promise<AccountAuth>;
}