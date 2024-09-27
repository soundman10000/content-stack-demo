<script setup>
import Header from './components/Header/component.vue'
</script>

<template>
  <div class="mainContent shadow-lg">
    <Header></Header>
    <div class="container-fluid indexView">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <router-view></router-view>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import './styles.css'
</script>
