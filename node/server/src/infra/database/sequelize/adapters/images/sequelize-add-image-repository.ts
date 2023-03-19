import { AddImage } from '../../../../../domain/contracts/database/images/add-image';
import { ArtImage } from '../../../../../domain/models/art-image/art-image';
import { ArtImageModel } from '../../models/images/art-image-model';

export class SequelizeAddImageRepository implements AddImage {
	async add(image: ArtImage): Promise<ArtImage> {
		const i = await ArtImageModel.create(image);
		return i.dataValues;
	}

}