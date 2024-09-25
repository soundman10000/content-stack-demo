import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  actions: {
    login(user) {
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
    }
  }
})