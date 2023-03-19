import { ArtImage } from '../../../models/art-image/art-image';

export interface GetAllImages {
    getAll: () => Promise<ArtImage[]>
}