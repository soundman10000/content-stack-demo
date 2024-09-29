<script setup>
import Reminder from '../Reminder/component.vue'
</script>

<template>
  <div class="mt-3 container pt-3 no-padding">
    <h5 :data-cslp="data.$.heading">{{ data.content.heading }}</h5>
  </div>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pt-3">
    <div v-for="(item, index) in data.reminders" :key="index" class="col">
      <Reminder :item="item" class="h-100" />
    </div>
  </div>
</template>
<script>
import { userStore } from 'userStore'
import './styles.css'
import { include, fields, toReminderModel } from './model'

const getParams = (user) => [{ key: 'taxonomies.clients', value: user.companyId }]

export default {
  inject: ['cmsClient'],
  setup() {},
  data: () => ({
    data: {
      tileModel: [],
      content: {},
      $: {},
      user: userStore().user,
      reminders: []
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
        console.log(data.content.reminders)
        c.data.reminders = toReminderModel(data.content.reminders ?? [])
        c.state.loaded = true
      }

      const onError = console.log

      this.cmsClient
        .getContentOnCondition('reminders', getParams(this.data.user), include, fields)
        .then(onSuccess(this), onError)
    }
  }
}
</script>
