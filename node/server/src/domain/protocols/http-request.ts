import { Account } from '../models/account/account';

export interface HttpRequest {
    headers: {
        authorization?: string;
        'x-forwarded-for'?: string;
    };
    body: any;
    params: any;
    account: Account | null;
    files?: any;
}