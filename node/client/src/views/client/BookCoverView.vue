<template>
  <section class="gallery">
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
	{ id: '0', name: 'No Image', description: '', link: 'covers/Montsalvens_01.jpg' },
	{ id: '1', name: 'No Image', description: '', link: 'covers/Montsalvens_02.jpg' },
	{ id: '2', name: 'No Image', description: '', link: 'covers/Montsalvens_03.jpg' },
	{ id: '3', name: 'No Image', description: '', link: 'covers/Montsalvens_04.jpg' },
	{ id: '4', name: 'No Image', description: '', link: 'covers/Montsalvens_05.jpg' },
	{ id: '5', name: 'No Image', description: '', link: 'covers/Montsalvens_06.jpg' },
	{ id: '6', name: 'No Image', description: '', link: 'covers/Montsalvens_07.jpg' },
	{ id: '7', name: 'No Image', description: '', link: 'covers/Montsalvens_08.jpg' },
	{ id: '8', name: 'No Image', description: '', link: 'covers/Montsalvens_09.jpg' },
	{ id: '9', name: 'No Image', description: '', link: 'covers/Montsalvens_10.jpg' },
];
const openWatcher = (index: number) => {
	emitter.emit('open', images, index);
};
</script>

<style scoped>
</style>