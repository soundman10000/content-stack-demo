<script setup>
import { inject, reactive } from 'vue'
import './styles.css'
import { getContent, toViewModel } from './model'

const csClient = inject('csDeliveryClient')

const state = reactive({
  content: {},
  loaded: false
})

const onSucess = (state) => (result) => toViewModel(state)(result)
const onError = (d) => console.log(d, 'Error')

getContent(csClient).then(onSucess(state), onError)
</script>
<template>
  <header class="hero" v-if="state.loaded">
    <div class="hero-content">
      <h1 data-cslp="index.blt05b254af46ef63c2.en-us.welcome_banner">
        {{ state.content.welcome_banner.text }}
      </h1>
    </div>
  </header>
  <div>
    <h1 class="welcomeBanner"></h1>
  </div>
</template>
