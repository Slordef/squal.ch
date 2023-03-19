<template>
  <div class="category">
    <button
      type="button"
      @click="open = !open"
    >
      <FontAwesomeIcon icon="folder" />
      {{ props.category.name }}
    </button>
    <div
      v-if="open"
    >
      <AdminCategory
        v-for="sub in subs"
        :key="sub.id"
        :category="sub"
      />
      <button
        type="button"
        @click="create"
      >
        ...Nouvelle catégorie
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { Category } from '@/intefaces/category';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps<{ category: Category }>();

const store = useStore();

const subs = computed(() => store.getters.getCategories?.filter((cat: Category) => cat.parent == props.category.id));
const open = ref(false);
const create = () => {
	store.dispatch('apiCategoryCreate', {
		name: 'New category',
		parent: props.category.id,
	});
};
</script>

<style scoped>
.category {
  padding: 5px 10px;
}
</style>