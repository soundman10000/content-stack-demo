<template>
  Login asdfasdfasdfasdfsa Page
  <button type="button" class="btn btn-primary">Primary</button>
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
