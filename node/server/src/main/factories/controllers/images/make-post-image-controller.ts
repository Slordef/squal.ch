import { PostImageController } from '../../../controllers/images/post-image-controller';
import { ExpressFileAdapter } from '../../../../infra/api/express/express-file-adapter';
import {
	SequelizeAddImageRepository
} from '../../../../infra/database/sequelize/adapters/images/sequelize-add-image-repository';

export function makePostImageController() {
	return new PostImageController(
		new ExpressFileAdapter(),
		new SequelizeAddImageRepository()
	);
}