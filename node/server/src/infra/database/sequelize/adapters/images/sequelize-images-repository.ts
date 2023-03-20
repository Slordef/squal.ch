import { AddImage } from '../../../../../domain/contracts/database/images/add-image';
import { ArtImage } from '../../../../../domain/models/art-image/art-image';
import { ArtImageModel } from '../../models/images/art-image-model';
import { GetAllImages } from '../../../../../domain/contracts/database/images/get-all-images';
import { GetImage } from '../../../../../domain/contracts/database/images/get-image';

export class SequelizeImagesRepository implements AddImage, GetAllImages, GetImage {
	async add(image: ArtImage): Promise<ArtImage> {
		const i = await ArtImageModel.create(image);
		return i.dataValues;
	}

	async getAll(): Promise<ArtImage[]> {
		const images = await ArtImageModel.findAll();
		return images.map(image => image.dataValues);
	}

	async get(id: string): Promise<ArtImage | null> {
		throw new Error('Method not implemented.');
	}
}