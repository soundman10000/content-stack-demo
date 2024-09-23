<template>
  <header class="hero" v-if="state.loaded">
    <div class="hero-content">
      <h1 :data-cslp="data.content.welcome_banner.tag">
        {{ data.content.welcome_banner.text }}
      </h1>
    </div>
  </header>
</template>

<script>
import './styles.css'
import { getContent, toViewModel } from './model'

export default {
  inject: ['csDeliveryClient'],
  setup() {},
  data: () => ({
    data: {
      content: {}
    },
    state: {
      loaded: false
    }
  }),
  mounted() {
    this.get()
  },
  methods: {
    get() {
      const onSucess = (comp) => (result) => toViewModel(comp.state)(comp.data)(result)
      const onError = (d) => console.log(d, 'Error')

      getContent(this.csDeliveryClient).then(onSucess(this), onError)
    }
  }
}
</script>
