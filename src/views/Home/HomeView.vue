<template>
  <div v-if="state.loaded">
    <h2 :data-cslp="data.$.welcome_text">{{ data.content.welcome_text }} {{ data.user.name }}?</h2>
    <div class="hero-banner">
      <div class="hero-content d-flex align-items-center">
        <img
          :src="data.banner.banner_image.url"
          class="img-fluid w-100 banner"
          alt="Hero Banner Image"
        />
        <div
          class="text-left text-white p-4"
          style="position: absolute; left: 0; top: 50%; transform: translateY(-50%)"
        >
          <div class="overlay-box rounded-3">
            <div class="text-left text-white p-4">
              <h3 style="color: black" :data-cslp="data.banner.$.banner_text['data-cslp']">
                {{ data.banner.banner_text }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { userStore } from 'userStore'
import './styles.css'
export default {
  inject: ['cmsClient'],
  setup() {},
  data: () => ({
    data: {
      banner: {},
      content: {},
      $: {},
      user: userStore().user
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
        console.log(data)
        c.data.content = data.content
        c.data.$ = data.$
        // TODO: linked data needs a better view model mapping. GraphQL is what is needed.
        c.data.banner = data.content.banner_image[0]
        console.log(c.data.banner)
        c.state.loaded = true
      }

      const onError = console.log

      const params = [
        { key: 'taxonomies.clients', value: this.data.user.companyId },
        { key: 'taxonomies.jobs', value: this.data.user.job }
      ]
      console.log(params)

      const include = ['banner_image']
      const fields = ['banner_image', 'welcome_text']

      this.cmsClient
        .getContentOnCondition('home_page_hero', params, include, fields)
        .then(onSuccess(this), onError)
    }
  }
}
</script>
