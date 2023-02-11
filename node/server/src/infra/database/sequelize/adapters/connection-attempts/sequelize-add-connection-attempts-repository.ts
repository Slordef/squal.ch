import { ConnectionAttempt } from '../../../../../domain/models/connection-attempt/connection-attempt';
import { ConnectionAttemptModel } from '../../models/connection-attempt/connection-attempt';
import { AddConnectionAttempt } from '../../../../../domain/contracts/database/connection-attempt/add-connection-attempt';

export class SequelizeAddConnectionAttemptRepository implements AddConnectionAttempt {
	async add(attempt: ConnectionAttempt): Promise<void> {
		await ConnectionAttemptModel.create(attempt);
	}
}