<template>
  <div v-if="state.loaded" class="reminder mb-2">
    <div class="card-body-reminder">
      <div :data-cslp="data.$.information['data-cslp']" class="card-text text">
        {{ data.content.information }}
      </div>
      <div style="text-align: center">
        <a
          :href="data.content.call_to_action.href"
          :data-cslp="data.content.call_to_action.$.title['data-cslp']"
          class="mt-2 col-8 btn btn-primary btn-md rounded-pill btn-clear-blue"
        >
          {{ data.content.call_to_action.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { userStore } from 'userStore'
import './styles.css'
import { toModel } from './model'

const fields = ['call_to_action', 'information', '$']

export default {
  inject: ['cmsClient'],
  setup() {},
  props: {
    item: {
      type: String,
      required: true
    }
  },
  data: () => ({
    data: {
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
      const onSuccess = (c) => (result) => {
        console.log(result, 'asjdflkasjdlkfj')
        c.data.content = result
        c.data.$ = result.$
        c.state.loaded = true
      }
      const onError = (d) => console.log(d, 'Error')

      this.cmsClient
        .getEntry('announcement', this.item, fields)
        .then(toModel)
        .then(onSuccess(this), onError)
    }
  }
}
</script>
<style scoped></style>
