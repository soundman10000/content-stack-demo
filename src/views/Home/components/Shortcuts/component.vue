<template>
  <div class="container pt-3 no-padding" v-if="state.loaded">
    <h5 :data-cslp="data.$.shortcuts_banner">{{ data.content.shortcuts_banner }}</h5>
    <div class="container mt-4 card-container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-3">
        <div
          v-for="(item, index) in data.tileModel"
          :data-cslp="item.orderTag"
          :key="index"
          class="col"
        >
          <div class="card shadow-md health-card">
            <div
              class="card-body icon-card icon-body d-flex flex-column justify-content-center align-items-center text-center"
            >
              <div class="icon-wrapper mb-2">
                <div class="icon-circle">
                  <img
                    :src="item.icon"
                    :data-cslp="item.iconTag"
                    alt="Icon for {{ item.title }}"
                    class="icon-image"
                  />
                </div>
              </div>
              <h6 :data-cslp="item.titleTag" class="card-title icon-title mb-0 mt-5">
                {{ item.title }}
              </h6>
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
import { include, fields, toTilesViewModel } from './model'

const getParams = (user) => [{ key: 'taxonomies.clients', value: user.companyId }]

export default {
  inject: ['cmsClient'],
  setup() {},
  data: () => ({
    data: {
      tileModel: [],
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
        c.data.content = data.content
        c.data.$ = data.$
        c.data.tileModel = toTilesViewModel(data.content)
        c.state.loaded = true
      }

      const onError = console.log

      this.cmsClient
        .getContentOnCondition('shortcuts', getParams(this.data.user), include, fields)
        .then(onSuccess(this), onError)
    }
  }
}
</script>
