<script setup>
import { RouterView } from 'vue-router'
import HomeHeader from './components/header/component.vue'
</script>

<template>
  <header class="header">
    <HomeHeader />
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  color: var(--empyrean-blue);
  background-color: var(--empyrean-blue-light);
}
</style>
