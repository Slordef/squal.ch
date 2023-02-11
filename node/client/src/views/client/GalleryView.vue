<template>
  <section class="gallery">
    <div class="gallery_pictures">
      <PictureFrame
        v-for="(id, index) in images"
        :id="id"
        :key="id"
        :index="index"
        @click="openWatcher(index)"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import PictureFrame from '@/components/PictureFrame.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { emitter } from '@/store/emitter';

const store = useStore();

const images = computed(() => store.getters.getImages || []);
const openWatcher = (index: number) => {
	emitter.emit('open', images.value, index);
};
</script>

<style scoped></style>
