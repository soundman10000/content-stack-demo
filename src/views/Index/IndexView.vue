<script setup>
import Header from './components/Header/component.vue'
</script>

<template>
  <div class="mainContent shadow-lg">
    <Header></Header>
    you are on another page.
    <router-view></router-view>
  </div>
</template>

<script>
import './styles.css'
</script>
