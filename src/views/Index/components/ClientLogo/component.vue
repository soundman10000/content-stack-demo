<template>
  <div class="image-container">
    <img
      class="img-fluid h-100"
      v-if="data.logo"
      :data-cslp="data.$.logo"
      :src="data.logo"
      alt="Logo"
    />
  </div>
</template>
<script>
import { userStore } from 'userStore'
import './styles.css'

export default {
  inject: ['cmsClient'],
  data: () => ({
    data: {
      $: {},
      logo: null,
      user: userStore().user
    },
    state: {
      error: false,
      loaded: false
    }
  }),
  mounted() {
    this.getLogo()
  },
  methods: {
    getLogo() {
      const onSuccess = (c) => (data) => {
        c.data.$.logo = data.$.company_logo
        c.data.logo = data.content.company_logo.url
      }
      const onError = console.log

      this.cmsClient
        .getTaxonomy('client_logo', 'clients', this.data.user.companyId, 10, ['company_logo'])
        .then(onSuccess(this), onError)
    }
  }
}
</script>
