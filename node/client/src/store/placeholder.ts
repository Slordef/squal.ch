import { ArtImage } from '@/intefaces/art-image';
import { Settings } from '@/intefaces/settings';

export const placeholderImages: ArtImage[] = [
	{ id: '1', name: 'City', description: 'City description', link: 'city.jpg' },
	{ id: '2', name: 'Nenu', description: 'Nenu description', link: 'nenu.jpg' },
	{ id: '3', name: 'Oiseau', description: 'Oiseau description', link: 'oiseau.jpg' },
	{ id: '4', name: 'Rose', description: 'Rose description', link: 'rose.jpeg' }
];

export const placeholderSettings: Settings = {
	homeText: '<p>Bonjour et bienvenue sur ce site de test !</p>',
	homeImage: '2'
};
