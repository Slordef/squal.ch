import { ArtImage } from '../../../models/art-image/art-image';

export interface GetImagesFromCategory {
    get(categoryId: string): Promise<ArtImage[]>;
}