<template>
  <div v-if="state.loaded">
    <h3 class="p-2" :data-cslp="data.$.welcome_text">
      {{ data.content.welcome_text }}, {{ data.firstName }}
    </h3>
    <div class="hero-banner">
      <div class="hero-content d-flex align-items-center">
        <img
          :data-cslp="data.banner.$.banner_image['data-cslp']"
          :src="data.banner.banner_image.url"
          class="img-fluid w-100 banner"
          alt="Hero Banner Image"
        />
        <div class="text-left text-white p-4 bannerMessage">
          <div class="overlay-box rounded-3">
            <div class="bannerMessageText">
              <h3 :data-cslp="data.banner.$.banner_text['data-cslp']">
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
import { pullFirstName } from './model'
import './styles.css'

const getParams = (user) => [
  { key: 'taxonomies.clients', value: user.companyId },
  { key: 'taxonomies.jobs', value: user.job }
]

const include = ['banner_image']
const fields = ['banner_image', 'welcome_text']

export default {
  inject: ['cmsClient'],
  setup() {},
  data: () => ({
    data: {
      banner: {},
      content: {},
      $: {},
      user: userStore().user,
      firstName: null
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
        c.data.content = data.content
        c.data.$ = data.$
        c.data.firstName = pullFirstName(this.data.user.name)
        // TODO: linked data needs a better view model mapping. GraphQL is what is needed.
        c.data.banner = data.content.banner_image[0]
        console.log(c.data.banner.$.banner_image['data-cslp'], 'near')
        c.state.loaded = true
      }

      const onError = console.log

      this.cmsClient
        .getContentOnCondition('home_page_hero', getParams(this.data.user), include, fields)
        .then(onSuccess(this), onError)
    }
  }
}
</script>
