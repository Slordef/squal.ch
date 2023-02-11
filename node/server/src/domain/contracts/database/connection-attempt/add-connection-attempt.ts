import { ConnectionAttempt } from '../../../models/connection-attempt/connection-attempt';

export interface AddConnectionAttempt {
    add(attempt: ConnectionAttempt): Promise<void>;
}