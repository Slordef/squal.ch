import { GetAllImagesController } from '../../../controllers/images/get-all-images-controller';
import {
	SequelizeGetAllImagesRepository
} from '../../../../infra/database/sequelize/adapters/images/sequelize-get-all-images-repository';

export function makeGetAllImagesController() {
	return new GetAllImagesController(
		new SequelizeGetAllImagesRepository()
	);
}