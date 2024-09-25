<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/footer/component.vue'
</script>

<template>
  <div class="container main-content">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.main-content {
  flex: 1;
}
</style>
