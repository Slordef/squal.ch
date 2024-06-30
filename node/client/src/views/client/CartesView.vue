<template>
  <section class="gallery">
    <div class="gallery_pictures">
      <PictureFrame
        v-for="(image, idx) in images"
        :key="image.id"
        :image="image"
        @click="openWatcher(idx)"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ArtImage } from '@/intefaces/art-image';
import { emitter } from '@/store/emitter';
import PictureFrame from '@/components/PictureFrame.vue';

const images: ArtImage[] = [
	{ id: '0', name: 'No Image', description: '', link: 'cartes/Carte_0000s_0004s_0000_D.webp' },
	{ id: '0', name: 'No Image', description: '', link: 'cartes/Carte_0000s_0004s_0001_B.webp' },
	{ id: '0', name: 'No Image', description: '', link: 'cartes/Carte_0000s_0004s_0003_G.webp' },
	{ id: '0', name: 'No Image', description: '', link: 'cartes/Carte_0000s_0004s_0002_A.webp' },
	{ id: '0', name: 'No Image', description: '', link: 'cartes/Carte_0000s_0004s_0004_F.webp' },
	{ id: '0', name: 'No Image', description: '', link: 'cartes/Carte_0000s_0004s_0005_E.webp' },
	{
		id: '0',
		name: 'No Image',
		description: '',
		link: 'cartes/cartes_0000s_0003s_0000_Luminosité_Contraste 2 copie 15.webp'
	},
	{
		id: '0',
		name: 'No Image',
		description: '',
		link: 'cartes/cartes_0000s_0003s_0001_Luminosité_Contraste 2 copie 14.webp'
	},
	{
		id: '0',
		name: 'No Image',
		description: '',
		link: 'cartes/cartes_0000s_0003s_0002_Luminosité_Contraste 2 copie 13.webp'
	},
	{
		id: '0',
		name: 'No Image',
		description: '',
		link: 'cartes/cartes_0000s_0003s_0003_Luminosité_Contraste 2 copie 12.webp'
	},
	{
		id: '0',
		name: 'No Image',
		description: '',
		link: 'cartes/cartes_0000s_0003s_0004_Luminosité_Contraste 2 copie 11.webp'
	},
	{ id: '0', name: 'No Image', description: '', link: 'cartes/cartes_0000s_0008_Luminosité_Contraste 2 copie 10.webp' },
	{ id: '0', name: 'No Image', description: '', link: 'cartes/cartes_0000s_0009_Luminosité_Contraste 2 copie 9.webp' },
	{ id: '0', name: 'No Image', description: '', link: 'cartes/cartes_0000s_0010_Luminosité_Contraste 2 copie 8.webp' },
	{ id: '0', name: 'No Image', description: '', link: 'cartes/cartes_0000s_0011_Luminosité_Contraste 2 copie 7.webp' },
	{ id: '0', name: 'No Image', description: '', link: 'cartes/cartes_0000s_0012_Luminosité_Contraste 2 copie 6.webp' },
	{ id: '0', name: 'No Image', description: '', link: 'cartes/cartes_0000s_0014_Luminosité_Contraste 2 copie 4.webp' },
	{ id: '0', name: 'No Image', description: '', link: 'cartes/cartes_0000s_0015_Luminosité_Contraste 2 copie 3.webp' },
	{ id: '0', name: 'No Image', description: '', link: 'cartes/cartes_0000s_0016_Luminosité_Contraste 2 copie 2.webp' },
	{ id: '0', name: 'No Image', description: '', link: 'cartes/cartes_0000s_0017_Luminosité_Contraste 2 copie.webp' },
];
const openWatcher = (index: number) => {
	emitter.emit('open', images, index);
};
</script>

<style scoped>
</style>