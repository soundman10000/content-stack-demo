<template>
  <div class="card shadow-sm">
    <div class="card-header text-white fs-6 py-2">User Information</div>
    <div class="card-body px-2 py-1">
      <div class="mb-1">
        <div class="d-flex justify-content-between align-items-center">
          <label class="form-label fs-6 mb-0">Name:</label>
          <p class="mb-0 fw-bold text-truncate">{{ data.user.name }}</p>
        </div>
      </div>
      <div class="mb-1">
        <div class="d-flex justify-content-between align-items-center">
          <label class="form-label fs-6 mb-0">Company ID:</label>
          <p class="mb-0 text-truncate">{{ data.user.companyId }}</p>
        </div>
      </div>
      <div class="mb-1">
        <div class="d-flex justify-content-between align-items-center">
          <label class="form-label fs-6 mb-0">Email:</label>
          <p class="mb-0 text-muted text-truncate">{{ data.user.email }}</p>
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
      user: userStore().user
    },
    state: {
      error: false,
      loaded: false
    }
  }),
  mounted() {},
  methods: {}
}
</script>
