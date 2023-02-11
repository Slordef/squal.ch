<template>
  <transition name="pictureWatcherfade">
    <div
      v-show="show"
      class="pictureWatcher"
    >
      <div class="content">
        <div class="image">
          <PictureWatcherImage
            v-for="(image,i) in images"
            v-show="i === indexing"
            :key="image.id"
            :direction="direction"
            :image="image"
            :style="style"
          />
        </div>
        <div
          class="close"
          @click="close"
        >
          <img
            alt="Croix pour quitter"
            src="@/assets/images/Croix.svg"
          >
        </div>
        <div
          class="arrow leftarrow"
          @click="sub"
        >
          <img
            alt="Flèche gauche"
            src="@/assets/images/Flèche.png"
          >
        </div>
        <div
          class="arrow rightarrow"
          @click="add"
        >
          <img
            alt="Flèche droite"
            src="@/assets/images/Flèche.png"
          >
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { emitter } from '@/store/emitter';
import PictureWatcherImage from '@/components/PictureWatcherImage.vue';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { ArtImage } from '@/intefaces/art-image';

const store = useStore();

const list = ref<string[]>([]);
const show = ref(false);
const images = computed<ArtImage[]>(() => list.value.map(id => (store.getters.getImages || []).find((i: ArtImage) => i.id === id)));

const indexing = ref(0);
const setX = ref(0);
const direction = ref<'left' | 'right'>('left');
const pos = ref(0);
const style = computed(() => `left: calc(50% + ${-pos.value}px);`);

const add = () => {
	direction.value = 'right';
	indexing.value++;
	if (indexing.value > images.value.length - 1) indexing.value = 0;
};
const sub = () => {
	direction.value = 'left';
	indexing.value--;
	if (indexing.value < 0) indexing.value = images.value.length - 1;
};
const close = () => {
	show.value = false;
	emitter.emit('close');
};

const adjuste = () => {
	setTimeout(() => {
		const dif = Math.abs(pos.value - setX.value);
		const value = (dif / 10) + 1;
		if (pos.value < setX.value) pos.value += value;
		if (pos.value > setX.value) pos.value -= value;
		adjuste();
	}, 1);
};
const keydown = (evt: KeyboardEvent) => {
	switch (evt.key) {
	case 'ArrowRight':
		add();
		break;
	case 'ArrowLeft':
		sub();
		break;
	}
};

let xDown: number | null = null;

function getTouches(evt: TouchEvent) {
	return evt.touches; /* ||
    evt.originalEvent.touches */
}

function handleTouchStart(evt: TouchEvent) {
	const firstTouch = getTouches(evt)[0];
	xDown = firstTouch.clientX;
}

function handleTouchEnd() {
	if (setX.value > 80) {
		add();
		setTimeout(() => {
			setX.value = 0;
			pos.value = 0;
		}, 300);
	} else if (setX.value < -80) {
		sub();
		setTimeout(() => {
			setX.value = 0;
			pos.value = 0;
		}, 300);
	} else {
		setX.value = 0;
	}
	xDown = 0;
}

function handleTouchMove(evt: TouchEvent) {
	if (!xDown) {
		return;
	}
	const xUp = evt.touches[0].clientX;
	setX.value = xDown - xUp;
}

onMounted(() => {
	document.addEventListener('touchstart', handleTouchStart, false);
	document.addEventListener('touchend', handleTouchEnd, false);
	document.addEventListener('touchmove', handleTouchMove, false);

	adjuste();

	document.addEventListener('keydown', keydown);
});

emitter.on('open', (images: string[], index: number) => {
	indexing.value = index;
	list.value = images;
	show.value = true;
});
</script>

<style scoped></style>
