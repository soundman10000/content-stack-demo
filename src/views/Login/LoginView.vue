<script setup>
import Logo from './components/logo/component.vue'
</script>
<template>
  <div class="row justify-content-center" v-if="state.loaded">
    <div class="col-6 bg-white p-3 rounded shadow-lg">
      <Logo></Logo>
      <h2 :data-cslp="data.$.banner" class="text-center">{{ data.content.banner }}</h2>
      <div class="row justify-content-center">
        <span class="col-6">
          <p :data-cslp="data.$.welcome_text" class="text-center">
            {{ data.content.welcome_text }}
          </p>
        </span>
      </div>
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="form-group label-top-left form-group">
            <label
              :data-cslp="data.$.user_id_text"
              for="emailAddress"
              class="form-label fw-bold small"
              >{{ data.content.user_id_text }}</label
            >
            <input
              @input="inputHandler"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': state.error }"
              id="emailAddress"
              v-model="data.model.userId"
            />
            <div v-if="state.error" class="invalid-feedback">
              <span>Check Your Entry</span>
            </div>
          </div>
          <div class="container mt-4">
            <button
              :data-cslp="data.$.log_in_text"
              :disabled="state.error"
              class="col-12 btn btn-primary btn-md rounded-pill loginBtn"
              @click="login()"
            >
              {{ data.content.log_in_text }}
            </button>
          </div>
          <div class="row mt-3">
            <span :data-cslp="data.$.no_account_text"
              >{{ data.content.no_account_text }}
              <a class="signup" :data-cslp="data.$.sign_up_text" href="http://google.com">{{
                data.content.sign_up_text
              }}</a>
            </span>
          </div>
          <div class="divider-text">
            <span class="bg-white px-3">OR</span>
          </div>
          <div class="container">
            <button class="col-12 btn btn-primary btn-md rounded-pill btn-clear-blue">
              Continue with SSO
            </button>
            <button class="mt-2 col-12 btn btn-primary btn-md rounded-pill btn-clear-blue">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './styles.css'
import { fields, validateUser } from './model'
import { userStore } from 'userStore'
export default {
  inject: ['cmsClient'],
  data: () => ({
    data: {
      content: {},
      $: {},
      model: {}
    },
    state: {
      error: false,
      loaded: false
    },
    userStore: userStore()
  }),
  mounted() {
    this.get()
  },
  methods: {
    login() {
      var result = validateUser(this.data.model.userId)
      if (!result) {
        this.state.error = true
        return
      }
      this.userStore.login(result)
      this.$router.push('/home')
    },
    inputHandler() {
      this.state.error = false
    },
    get() {
      const onSuccess = (c) => (result) => {
        c.data.content = result.content
        c.data.$ = result.$
        c.state.loaded = true
      }
      const onError = (d) => console.log(d, 'Error')

      this.cmsClient
        .getEntry('benefitsgo_login', 'bltf864720003c6a939', fields)
        .then(onSuccess(this), onError)
    }
  }
}
</script>
