<template>
  <transition
    @enter="enter"
    @leave="leave"
    @before-enter="beforeEnter"
  >
    <div class="pictureWatcher_image">
      <img
        :alt="image.name"
        :src="'/web/images/'+image.link"
      >
      <div
        v-if="false"
        class="title"
      >
        <h1>{{ image.name }}</h1>
        <p>{{ image.description }}</p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import JQuery from 'jquery';
import { ArtImage } from '@/intefaces/art-image';

const $ = JQuery;
const props = defineProps<{
  image: ArtImage,
  direction: 'left' | 'right'
}>();

const beforeEnter = (el: HTMLElement) => {
	if (props.direction === 'left') $(el).css('left', '-100%');
	if (props.direction === 'right') $(el).css('left', '150%');
};
const enter = (el: HTMLElement, done: () => void) => {
	$(el).animate({ left: '50%' }, {
		duration: 300, complete: function () {
			done();
		}
	});
};
const leave = (el: HTMLElement, done: () => void) => {
	if (props.direction === 'left') $(el).animate({ left: '150%' }, {
		duration: 300, complete: function () {
			done();
		}
	});
	if (props.direction === 'right') $(el).animate({ left: '-100%' }, {
		duration: 300, complete: function () {
			done();
		}
	});
};
</script>

<style lang="scss" scoped>
.title {
  position: absolute;
  z-index: 50;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  color: white;
  font-weight: bold;
  font-size: .7em;
  text-align: center;
  text-shadow: black 3px 3px 3px;
}
</style>
