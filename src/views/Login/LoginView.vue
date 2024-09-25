<template>
  <div class="row justify-content-center" v-if="state.loaded">
    <div class="col-6 bg-white p-3 rounded shadow-lg">
      <h2 class="text-center">{{ data.content.banner }}</h2>
      <div class="row justify-content-center">
        <span class="col-6">
          <p class="text-center">{{ data.content.welcome_text }}</p>
        </span>
      </div>
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="form-group label-top-left">
            <label for="emailAddress" class="form-label fw-bold small">{{
              data.content.user_id_text
            }}</label>
            <input type="text" class="form-control" id="emailAddress" />
          </div>
          <div class="container mt-4">
            <button class="col-12 btn btn-primary btn-md rounded-pill loginBtn">
              {{ data.content.log_in_text }}
            </button>
          </div>
          <div class="row mt-3">
            <span
              >{{ data.content.no_account_text }}
              <a class="signup" :href="data.content.url">{{ data.content.sign_up_text }}</a>
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
import { clients } from './model'

const fields = [
  'banner',
  'log_in_text',
  'no_account_text',
  'sign_up_text',
  'title',
  'url',
  'user_id_text',
  'welcome_text'
]

export default {
  inject: ['cmsClient'],
  setup() {},
  data: () => ({
    data: {
      clients: clients,
      content: {}
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
      const onSucess = (c) => (result) => {
        c.data.content = result
        c.state.loaded = true
      }
      const onError = (d) => console.log(d, 'Error')

      this.cmsClient
        .getEntry('benefitsgo_login', 'bltf864720003c6a939', fields)
        .then(onSucess(this), onError)
    }
  }
}
</script>
