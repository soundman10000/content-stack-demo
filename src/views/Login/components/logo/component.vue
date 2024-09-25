<template>
  <div v-if="state.loaded" class="row justify-content-center p-sm-3">
    <img class="img-fluid w-50" :src="data.content.logoUrl" alt="Benefits Go" />
  </div>
</template>

<script>
import { prop } from 'ramda'

const pullUrl = prop('url')

export default {
  inject: ['cmsClient'],
  setup() {},
  data: () => ({
    data: {
      content: {}
    },
    state: {
      error: false,
      loaded: false
    }
  }),
  mounted() {
    this.get()
  },
  methods: {
    get() {
      const onSuccess = (c) => (data) => {
        c.data.content.logoUrl = data
        c.state.loaded = true
      }

      const onError = console.log

      this.cmsClient
        .getLogo('benefitsgo_logo', 'bltdce3e7fc713b5dd1', 'logo')
        .then(pullUrl)
        .then(onSuccess(this), onError)
    }
  }
}
</script>
