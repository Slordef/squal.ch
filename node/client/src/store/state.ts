import { Settings } from '@/intefaces/settings';
import { ArtImage } from '@/intefaces/art-image';

export interface State {
    settings?: Settings
    images?: ArtImage[]
}

export const state: State = {}; 
