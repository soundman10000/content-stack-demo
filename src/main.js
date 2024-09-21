import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Stack } from 'contentstack';

const csDeliveryClient = Stack({
  api_key: 'bltdb934e0566fb4e97',
  delivery_token: 'cs9e60330fee7c946161d14fe7',
  environment: 'localhost',
});

const app = createApp(App)
app.provide('csDeliveryClient', csDeliveryClient);

app.use(router)

app.mount('#app')
