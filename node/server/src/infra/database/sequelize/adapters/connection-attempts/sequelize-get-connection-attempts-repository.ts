import {
	GetConnectionAttempts
} from '../../../../../domain/contracts/database/connection-attempt/get-connection-attempts';
import { ConnectionAttempt } from '../../../../../domain/models/connection-attempt/connection-attempt';
import { ConnectionAttemptModel } from '../../models/connection-attempt/connection-attempt';

export class SequelizeGetConnectionAttemptsRepository implements GetConnectionAttempts {
	async get(ip: string): Promise<ConnectionAttempt[]> {
		const attempts = await ConnectionAttemptModel.findAll({
			where: { ip }
		});
		return attempts.map(attempt => attempt.dataValues);
	}
}