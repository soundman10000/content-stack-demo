<script setup>
import './styles.css'
</script>

<template>
  <footer class="footer">
    <span :data-cslp="data.$.footerText" class="text-muted">{{ data.content.footerText }}</span>
  </footer>
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
        c.data.content.footerText = data.content.footer_text
        c.data.$.footerText = data.$.footer_text
        c.state.loaded = true
      }

      const onError = console.log

      this.cmsClient
        .getEntry('benefitsgo_footer', 'bltc23cd7ff588b2642', ['footer_text'])
        .then(onSuccess(this), onError)
    }
  }
}
</script>
