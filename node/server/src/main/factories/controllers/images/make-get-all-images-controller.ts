import { GetAllImagesController } from '../../../controllers/images/get-all-images-controller';
import {
	SequelizeImagesRepository
} from '../../../../infra/database/sequelize/adapters/images/sequelize-images-repository';

export function makeGetAllImagesController() {
	return new GetAllImagesController(
		new SequelizeImagesRepository()
	);
}