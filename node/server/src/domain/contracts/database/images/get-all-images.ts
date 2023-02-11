import { ArtImage } from '../../../models/images/art-image';

export interface GetAllImages {
    getAll: () => Promise<ArtImage[]>
}