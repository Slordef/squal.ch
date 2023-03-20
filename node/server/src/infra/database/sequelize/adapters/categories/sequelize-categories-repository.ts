import { GetAllCategories } from '../../../../../domain/contracts/database/category/get-all-categories';
import { Category } from '../../../../../domain/models/category/category';
import { CategoryModel } from '../../models/category/category-model';

export class SequelizeCategoriesRepository implements GetAllCategories {
	async getAll(): Promise<Category[]> {
		const categories = await CategoryModel.findAll();
		return categories.map(cat => cat.dataValues);
	}
}