import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { Category } from '../../../../../domain/models/category/category';

export class CategoryModel extends Model<Category, Optional<Category, 'id'>> {
}

export const initCategoryModel = (sequelize: Sequelize) =>
	CategoryModel.init({
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		parent: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	}, { sequelize, modelName: 'category' });