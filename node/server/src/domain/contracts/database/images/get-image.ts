import { ArtImage } from '../../../models/art-image/art-image';

export interface GetImage {
    get: (id: string) => Promise<ArtImage | null>
}