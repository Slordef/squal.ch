import { ArtImage } from '../../../models/art-image/art-image';

export interface AddImage {
    add(image: ArtImage): Promise<ArtImage>
}