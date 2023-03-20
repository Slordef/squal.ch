import { GetAllCategoriesController } from '../../../controllers/categories/get-all-categories-controller';
import { Controller } from '../../../../domain/controller/controller';
import {
	SequelizeCategoriesRepository
} from '../../../../infra/database/sequelize/adapters/categories/sequelize-categories-repository';

export function makeGetAllCategoriesController(): Controller {
	return new GetAllCategoriesController(
		new SequelizeCategoriesRepository()
	);
}