<template>
  <div v-if="state.loaded" class="row justify-content-center p-sm-3">
    <img
      class="img-fluid w-50"
      :data-cslp="data.$.logo"
      :src="data.content.logo"
      alt="Benefits Go"
    />
  </div>
</template>

<script>
export default {
  inject: ['cmsClient'],
  setup() {},
  data: () => ({
    data: {
      content: {},
      $: {}
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
        c.data.content.logo = data.content.logo.url
        c.data.$.logo = data.$.logo
        c.state.loaded = true
      }

      const onError = console.log

      this.cmsClient
        .getEntry('benefitsgo_logo', 'bltdce3e7fc713b5dd1', ['logo'])
        .then(onSuccess(this), onError)
    }
  }
}
</script>
