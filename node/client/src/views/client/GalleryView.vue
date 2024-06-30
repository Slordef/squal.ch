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
import PictureFrame from '@/components/PictureFrame.vue';
import { emitter } from '@/store/emitter';
import { ArtImage } from '@/intefaces/art-image';

// const images = computed(() => store.getters.getImages || []);
const images: ArtImage[] = [
	{ id: '1', name: '', description: '', link: 'gallery/diesel.webp' },
	{ id: '1', name: '', description: '', link: 'gallery/zelda.webp' },
	{ id: '1', name: '', description: '', link: 'gallery/disturbia.webp' },
	{ id: '1', name: '', description: '', link: 'gallery/slordef.webp' },
	{ id: '1', name: '', description: '', link: 'gallery/cyber_souris.webp' },
	{ id: '1', name: '', description: '', link: 'gallery/singe_planete.webp' }
];
const openWatcher = (index: number) => {
	emitter.emit('open', images, index);
};
</script>

<style scoped></style>
