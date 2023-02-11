<template>
  <transition name="pictureFrame_slide">
    <div
      v-if="image != null"
      v-show="loaded"
      class="pictureFrame"
      @click="viewImage"
    >
      <div class="pictureFrame_content">
        <div class="pictureFrame_name">
          {{ image.name }}
        </div>
        <span class="pictureFrame_description">{{ image.description }}</span>
      </div>
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
import { computed, defineEmits, defineProps, ref } from 'vue';
import { useStore } from 'vuex';
import { ArtImage } from '@/intefaces/art-image';

const store = useStore();
const emit = defineEmits<{ (e: 'click'): void }>();
const props = defineProps<{
  id: string,
  index: number | undefined
}>();

const loaded = ref(false);

const image = computed((): ArtImage => store.getters.getImages?.find((i: ArtImage) => i.id === props.id) || {
	id: '0',
	name: 'No Image',
	description: '',
	link: '',
	category: 0
});
const onLoad = () => {
	loaded.value = true;
};
const viewImage = () => {
	emit('click');
};
</script>

<style></style>
