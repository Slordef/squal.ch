import { ArtImage } from '../../../models/images/art-image';

export interface AddImage {
    add(image: ArtImage): Promise<ArtImage>
}