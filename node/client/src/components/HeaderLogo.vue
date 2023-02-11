<template>
  <router-link
    class="logo"
    to="/"
  >
    <div
      :style="style"
      class="logo_img"
    >
      <img
        ref="img"
        alt="logo"
        src="@/assets/images/logo.svg"
      >
    </div>
    <span>Squal</span>
  </router-link>
</template>

<script lang="ts" setup>
import JQuery from 'jquery';
import { computed, onMounted, onUnmounted, ref } from 'vue';

const $ = JQuery;
let el: JQuery<HTMLElement>;
const scale = ref(-1);
const translate = ref(200);
const style = computed(() => {
	return `transform: translateX(${translate.value}px) scaleX(${scale.value});`;
});
let interval: number | undefined;
const move = (pos: number, size: number, duration = 800, callback: (() => void) | undefined = undefined) => {
	$(el).animate({
		mo: pos,
		sc: size + 1
	}, {
		step(now: number, tween) {
			switch (tween.prop) {
			case 'sc':
				scale.value = now - 1;
				break;
			case 'mo':
				translate.value = now;
				break;
			}
		},
		duration,
		easing: 'linear',
		complete() {
			if (callback) callback();
		}
	});
};
const turn = () => {
	move(5, 0, 300);
	move(-5, -1, 300);
	move(-30, -1, 800);
	move(-35, 0, 300);
	move(-25, 1, 300);
	move(30, 1, 800);
	move(35, 0, 300);
	move(25, -1, 300);
	move(0, -1, 800);
	move(-5, 0, 300);
	move(0, 1, 300);
};
const arrive = () => {
	return new Promise<void>(resolve => {
		$(el).animate({
			mo: translate.value,
			sc: scale.value + 1
		}, 1);
		move(-5, -1, 800);
		move(-10, 0, 300);
		move(-5, 1, 300);
		move(0, 1, 300, () => {
			resolve();
		});
	});
};

onMounted(() => {
	el = $('.logo_img');
	arrive().then(() => {
		interval = setInterval(() => {
			const rand = Math.floor(Math.random() * 5);
			switch (rand) {
			case 1:
				turn();
				break;
			}
			// this.turn();
		}, 10000);
	});
});
onUnmounted(() => {
	clearInterval(interval);
});
</script>

<style scoped></style>
