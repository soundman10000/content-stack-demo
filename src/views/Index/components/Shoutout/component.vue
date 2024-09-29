<template>
  <div
    v-if="state.loaded && data.content.display"
    :data-cslp="data.$.display"
    class="shoutout d-flex justify-content-between align-items-center"
    :style="{
      backgroundColor: data.color.banner_color,
      border: `2px solid ${data.color.banner_color_2}`,
      color: data.color.banner_text_color
    }"
  >
    <h5 :data-cslp="data.$.message" class="p-1 m-0">{{ data.content.message }}</h5>
    <button class="btn btn-md rounded-pill btn-clear" :style="buttonStyles">
      <span :data-cslp="data.$.action_text" class="p-1">{{ data.content.action_text }}</span>
      <font-awesome-icon icon="fa-caret-right" />
    </button>
  </div>
</template>
<script>
import { userStore } from 'userStore'
import { toColorModel } from './model'
import './styles.css'

const getParams = (user) => [{ key: 'taxonomies.clients', value: user.companyId }]

const fields = [
  'action_text',
  'banner_color',
  'banner_color_2',
  'banner_text_color',
  'display',
  'message'
]

const colorFields = ['banner_color', 'banner_color_2', 'banner_text_color']

export default {
  inject: ['cmsClient'],
  setup() {},
  data: () => ({
    data: {
      content: {},
      $: {},
      color: {},
      user: userStore().user
    },
    state: {
      error: false,
      loaded: false
    }
  }),
  computed: {
    buttonStyles() {
      return {
        backgroundColor: this.data.color.banner_color,
        border: `2px solid ${this.data.color.banner_color_2}`,
        color: this.data.color.banner_text_color,
        '--hover-background-color': this.data.color.banner_color_2,
        '--hover-border-color': this.data.color.banner_color
      }
    }
  },
  mounted() {
    this.get()
  },
  methods: {
    get() {
      const onSuccess = (c) => (data) => {
        c.data.content = data.content
        c.data.$ = data.$
        if (!data.content) {
          return
        }
        c.data.color = toColorModel(colorFields)(c.data.content)
        c.state.loaded = true
      }

      const onError = console.log

      this.cmsClient
        .getContentOnCondition('home_page_callout_banner', getParams(this.data.user), null, fields)
        .then(onSuccess(this), onError)
    }
  }
}
</script>
