<script setup>
import { inject, reactive } from 'vue'
import './styles.css'
import { getContent, toViewModel } from './model'

const csClient = inject('csDeliveryClient')

const state = reactive({
  welcomeBanner: null
})

const onSucess = (state) => (result) => toViewModel(state)(result)
const onError = (d) => console.log(d, 'Error')

getContent(csClient).then(onSucess(state), onError)
</script>
<template>
  <header class="hero">
    <div class="hero-content">
      <h1>{{ state.welcomeBanner }}</h1>
    </div>
  </header>
  <div>
    <h1 class="welcomeBanner"></h1>
  </div>
</template>
