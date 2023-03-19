import { Category } from '../../../models/category/category';

export interface GetAllCategories {
    getAll(): Promise<Category[]>;
}