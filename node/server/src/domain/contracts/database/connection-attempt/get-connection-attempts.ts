import { ConnectionAttempt } from '../../../models/connection-attempt/connection-attempt';

export interface GetConnectionAttempts {
    get(ip: string): Promise<ConnectionAttempt[]>;
}