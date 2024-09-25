<template>
  <div class="centered-box bg-white p-3 rounded shadow-sm">
    <h2>This is a thing</h2>
    <p>Hope you're happy</p>
  </div>
</template>

<script>
import './styles.css'
import { clients } from './model'

export default {
  inject: ['csDeliveryClient'],
  setup() {},
  data: () => ({
    data: {
      clients: clients
    },
    state: {
      error: false
    }
  }),
  mounted() {},
  methods: {}
}
</script>
