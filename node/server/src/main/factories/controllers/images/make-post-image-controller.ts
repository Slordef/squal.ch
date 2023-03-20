import { PostImageController } from '../../../controllers/images/post-image-controller';
import { ExpressFileAdapter } from '../../../../infra/api/express/express-file-adapter';
import {
	SequelizeImagesRepository
} from '../../../../infra/database/sequelize/adapters/images/sequelize-images-repository';

export function makePostImageController() {
	return new PostImageController(
		new ExpressFileAdapter(),
		new SequelizeImagesRepository()
	);
}