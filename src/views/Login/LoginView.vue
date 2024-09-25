<template>
  <div class="centered-box bg-white p-3 rounded shadow-sm">
    <h2>This is a thing</h2>
    <p>Hope you're happy</p>
  </div>
</template>

<script>
import './styles.css'
import { clients } from './model'
import { getContent, toViewModel } from './model'

export default {
  inject: ['csDeliveryClient'],
  setup() {},
  data: () => ({
    data: {
      clients: clients
    },
    state: {
      error: false,
      loading: false
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
