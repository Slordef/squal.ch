<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';

const store = useStore();
store.dispatch('apiGet');
</script>

<style lang="scss" src="@/scss/styles.scss"></style>
