import { GetAllCategoriesController } from '../../../controllers/categories/get-all-categories-controller';
import { Controller } from '../../../../domain/controller/controller';
import {
	SequelizeGetCategoryRepository
} from '../../../../infra/database/sequelize/adapters/images/sequelize-get-category-repository';

export function makeGetAllCategoriesController(): Controller {
	return new GetAllCategoriesController(
		new SequelizeGetCategoryRepository()
	);
}