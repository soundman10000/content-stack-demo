<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/footer/component.vue'
</script>

<template>
  <div class="container main-content">
    <RouterView />
  </div>
  <footer class="footer">
    <Footer />
  </footer>
</template>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px; /* Height of the footer */
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-content {
  flex: 1;
}
</style>
