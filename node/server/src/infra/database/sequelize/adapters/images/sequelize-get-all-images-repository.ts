import { GetAllImages } from '../../../../../domain/contracts/database/images/get-all-images';
import { ArtImage } from '../../../../../domain/models/art-image/art-image';
import { ArtImageModel } from '../../models/images/art-image-model';

export class SequelizeGetAllImagesRepository implements GetAllImages {
	async getAll(): Promise<ArtImage[]> {
		const images = await ArtImageModel.findAll();
		return images.map(image => image.dataValues);
	}
}