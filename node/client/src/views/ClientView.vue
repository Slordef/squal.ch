<template>
  <PictureWatcher />
  <HeaderNavigation />
  <router-view />
  <FooterGlobal />
</template>

<script lang="ts" setup>
import PictureWatcher from '@/components/PictureWatcher.vue';
import HeaderNavigation from '@/components/HeaderNavigation.vue';
import FooterGlobal from '@/components/FooterGlobal.vue';</script>

<style scoped>
</style>