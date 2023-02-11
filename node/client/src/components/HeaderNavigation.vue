<template>
  <div
    :class="{open:opened}"
    class="header"
  >
    <HeaderLogo />
    <nav>
      <div class="nav-elem">
        <router-link :to="{name:'Gallery',params:{id:0}}">
          Galerie
        </router-link>
      </div>
      <div class="nav-elem">
        <router-link :to="{name:'Contact'}">
          Contact
        </router-link>
      </div>
    </nav>
    <div
      class="menu"
      @click="open"
    >
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderLogo from '@/components/HeaderLogo.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { Category } from '@/intefaces/category';

const store = useStore();

const opened = ref(false);
const choices = computed(() => store.getters.getCategories?.filter((c: Category) => c.index !== '0') || []);
const open = () => {
	opened.value = !opened.value;
};
</script>

<style scoped></style>
