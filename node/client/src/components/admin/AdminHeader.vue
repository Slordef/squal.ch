<template>
  <header>
    <router-link
      class="link"
      to="/admin/dashboard"
    >
      Dashboard
    </router-link>
    <router-link
      class="link"
      to="/admin/images"
    >
      Images
    </router-link>
    <router-link
      class="link"
      to="/admin/settings"
    >
      Paramètres
    </router-link>
  </header>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;

  .link {
    color: #000;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>