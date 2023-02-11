import { AccountAuth } from '../models/account/account-auth';

export interface Authentication {
    auth(email: string, password: string): Promise<AccountAuth | null>;
}