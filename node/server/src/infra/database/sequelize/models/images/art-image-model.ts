import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { ArtImage } from '../../../../../domain/models/art-image/art-image';

export class ArtImageModel extends Model<ArtImage, Optional<ArtImage, 'id'>> {
}

export const initArtImageModel = (sequelize: Sequelize) =>
	ArtImageModel.init({
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		link: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	}, {
		sequelize,
		modelName: 'art_image',
	});