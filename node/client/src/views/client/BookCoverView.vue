<template>
  <section class="gallery">
    <div class="title-hidden">
      <h1>Couvertures</h1>
    </div>
    <div class="text-center mb-14">
      <p>Couvertures réalisées pour les Éditions Montsalvens</p>
      <p>Plus d’informations et commandes sur <a href="https://www.montsalvens.ch">www.montsalvens.ch</a></p>
    </div>
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
	{ id: '0', name: 'No Image', description: '', link: 'covers/Montsalvens_01.webp' },
	{ id: '1', name: 'No Image', description: '', link: 'covers/Montsalvens_02.webp' },
	{ id: '2', name: 'No Image', description: '', link: 'covers/Montsalvens_03.webp' },
	{ id: '13', name: 'No Image', description: '', link: 'covers/Couverture_0004_Decadentia (couverture).webp' },
	{ id: '13', name: 'No Image', description: '', link: 'covers/Couverture_0005_Glaces pillées (couverture).webp' },
	{ id: '3', name: 'No Image', description: '', link: 'covers/Montsalvens_04.webp' },
	{ id: '4', name: 'No Image', description: '', link: 'covers/Montsalvens_05.webp' },
	{ id: '5', name: 'No Image', description: '', link: 'covers/Montsalvens_06.webp' },
	{ id: '6', name: 'No Image', description: '', link: 'covers/Montsalvens_07.webp' },
	{ id: '7', name: 'No Image', description: '', link: 'covers/Montsalvens_08.webp' },
	{ id: '8', name: 'No Image', description: '', link: 'covers/Montsalvens_09.webp' },
	{ id: '9', name: 'No Image', description: '', link: 'covers/Montsalvens_10.webp' },
	{ id: '10', name: 'No Image', description: '', link: 'covers/Montsalvens_11.webp' },
	{ id: '11', name: 'No Image', description: '', link: 'covers/Montsalvens_12.webp' },
	{ id: '12', name: 'No Image', description: '', link: 'covers/Montsalvens_13.webp' },
	{ id: '13', name: 'No Image', description: '', link: 'covers/Montsalvens_14.webp' },
	{ id: '13', name: 'No Image', description: '', link: 'covers/Couverture_0000_Rituel des fleurs VN (couverture).webp' },
	{ id: '13', name: 'No Image', description: '', link: 'covers/Couverture_0006_Le bal faux-culs (couverture).webp' },
	{
		id: '13',
		name: 'No Image',
		description: '',
		link: 'covers/Couverture_0007_Noces rouges sur l\'île d\'Ogoz (couverture).webp'
	},
];
const openWatcher = (index: number) => {
	emitter.emit('open', images, index);
};
</script>

<style scoped>
</style>