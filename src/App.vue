<script setup>
import { RouterView } from 'vue-router'
import HomeHeader from './components/header/component.vue'
</script>

<template>
  <header>
    <div>
      <HomeHeader />
    </div>
  </header>

  <RouterView />
</template>
