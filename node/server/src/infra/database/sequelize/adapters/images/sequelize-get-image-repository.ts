import { GetImage } from '../../../../../domain/contracts/database/images/get-image';
import { ArtImage } from '../../../../../domain/models/art-image/art-image';

export class SequelizeGetImageRepository implements GetImage {
	async get(id: string): Promise<ArtImage | null> {
		throw new Error('Method not implemented.');
	}
}