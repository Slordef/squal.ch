import { ArtImage } from '../../../models/images/art-image';

export interface GetImage {
    get: (id: string) => Promise<ArtImage | null>
}