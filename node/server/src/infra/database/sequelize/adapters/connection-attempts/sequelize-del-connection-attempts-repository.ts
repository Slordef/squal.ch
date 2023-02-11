import { ConnectionAttemptModel } from '../../models/connection-attempt/connection-attempt';
import {
	DelConnectionAttempts
} from '../../../../../domain/contracts/database/connection-attempt/del-connection-attempts';

export class SequelizeDelConnectionAttemptsRepository implements DelConnectionAttempts {
	async del(ip: string): Promise<void> {
		await ConnectionAttemptModel.destroy({
			where: { ip }
		});
	}
}