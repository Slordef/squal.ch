import { Settings } from '@/intefaces/settings';
import { ArtImage } from '@/intefaces/art-image';
import { Category } from '@/intefaces/category';

export interface State {
    settings?: Settings
    images?: ArtImage[]
    categories?: Category[]
}

export const state: State = {}; 
