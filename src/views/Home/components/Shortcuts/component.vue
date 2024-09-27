<template>
  <div class="container pt-3" v-if="state.loaded">
    <h5 :data-cslp="data.$.shortcuts_banner">{{ data.content.shortcuts_banner }}</h5>
    <div class="container mt-4">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3">
        <div v-for="(item, index) in data.tileModel" :key="index" class="col">
          <div class="card h-100 shadow-sm custom-card">
            <div class="card-body d-flex flex-column justify-content-center align-items-center">
              <div class="icon-wrapper">
                <img :src="item.icon" alt="Icon for {{ item.title }}" class="icon-image" />
              </div>
              <h6 class="card-title text-center mt-2 mb-0">{{ item.title }}</h6>
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
