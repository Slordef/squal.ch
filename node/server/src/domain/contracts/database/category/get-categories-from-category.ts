import { Category } from '../../../models/category/category';

export interface GetCategoriesFromCategory {
    get(categoryId: string): Promise<Category[]>;
}