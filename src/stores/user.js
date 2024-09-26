import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(sessionStorage.getItem('user')) || null
  }),
  actions: {
    login(user) {
      this.user = user
      sessionStorage.setItem('user', JSON.stringify(user))
    },
    logout() {
      this.user = null
      sessionStorage.removeItem('user')
    }
  }
})