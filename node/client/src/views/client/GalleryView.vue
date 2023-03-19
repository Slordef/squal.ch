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
	{ id: '1', name: '', description: '', link: 'gallery/web2.jpg' },
	{ id: '1', name: '', description: '', link: 'gallery/web1.jpg' },
	{ id: '1', name: '', description: '', link: 'gallery/web4.jpg' },
	{ id: '1', name: '', description: '', link: 'gallery/web5.jpg' }
];
const openWatcher = (index: number) => {
	emitter.emit('open', images, index);
};
</script>

<style scoped></style>
