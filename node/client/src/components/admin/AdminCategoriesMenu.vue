<template>
  <div class="folders">
    <h5>Dossiers</h5>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { onBeforeMount } from 'vue';

const store = useStore();

onBeforeMount(() => {
	store.dispatch('apiCategories');
});
</script>

<style lang="scss" scoped>
.folders {
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
}

h5 {
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 500;
}
</style>