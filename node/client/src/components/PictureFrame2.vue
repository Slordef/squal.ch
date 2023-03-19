<template>
  <transition name="pictureFrame_slide">
    <div
      v-if="image != null"
      v-show="loaded"
      class="pictureFrame"
      @click="viewImage"
    >
      <div class="pictureFrame_image">
        <img
          :alt="image.name"
          :src="'/web/images/'+image.link"
          @load="onLoad"
        >
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ArtImage } from '@/intefaces/art-image';

const emit = defineEmits<{ (e: 'click'): void }>();
defineProps<{
  image: ArtImage,
}>();

const loaded = ref(false);

const onLoad = () => {
	loaded.value = true;
};
const viewImage = () => {
	emit('click');
};
</script>

<style></style>
