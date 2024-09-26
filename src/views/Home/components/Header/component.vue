<script setup>
import User from '../User/component.vue'
</script>
<template>
  <div class="container-fluid pe-0 d-flex justify-content-between align-items-center header">
    <div class="logo">
      <img alt="Client Logo" height="50" />
    </div>
    <nav>
      <ul class="nav">
        <li class="nav-item icon-container" @mouseenter="userHoverOn" @mouseleave="userHoverOut">
          <font-awesome-icon icon="fa-solid fa-user" />
          <User v-if="state.showUser" class="user-modal"></User>
        </li>
        <li class="nav-item icon-container" @click="logout">
          <font-awesome-icon icon="fa-solid fa-sign-out" />
        </li>
      </ul>
    </nav>
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
      content: {},
      $: {}
    },
    state: {
      error: false,
      loaded: false,
      showUser: false
    },
    userStore: userStore()
  }),
  mounted() {},
  methods: {
    logout() {
      this.userStore.logout()
      this.$router.push('/')
    },
    userHoverOn() {
      this.state.showUser = true
    },
    userHoverOut() {
      this.state.showUser = false
    }
  }
}
</script>
