import { ConnectionAttempt } from '../../../../../domain/models/connection-attempt/connection-attempt';
import { ConnectionAttemptModel } from '../../models/connection-attempt/connection-attempt';
import { AddConnectionAttempt } from '../../../../../domain/contracts/database/connection-attempt/add-connection-attempt';
import {
	DelConnectionAttempts
} from '../../../../../domain/contracts/database/connection-attempt/del-connection-attempts';
import {
	GetConnectionAttempts
} from '../../../../../domain/contracts/database/connection-attempt/get-connection-attempts';

export class SequelizeConnectionAttemptRepository implements AddConnectionAttempt, DelConnectionAttempts, GetConnectionAttempts {
	async add(attempt: ConnectionAttempt): Promise<void> {
		await ConnectionAttemptModel.create(attempt);
	}

	async del(ip: string): Promise<void> {
		await ConnectionAttemptModel.destroy({
			where: { ip }
		});
	}

	async get(ip: string): Promise<ConnectionAttempt[]> {
		const attempts = await ConnectionAttemptModel.findAll({
			where: { ip }
		});
		return attempts.map(attempt => attempt.dataValues);
	}
}