import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Contentstack from 'contentstack'
import ContentstackLivePreview from '@contentstack/live-preview-utils';

const csDeliveryClient = Contentstack.Stack({
  api_key: 'bltdb934e0566fb4e97',
  delivery_token: 'cs9e60330fee7c946161d14fe7',
  environment: 'localhost',
});

ContentstackLivePreview.init({
 stackDetails: {
     apiKey: "bltdb934e0566fb4e97",
     environment: "localhost",
     branch: "main"
},
 clientUrlParams: {
     protocol: "https",
     host: "app.contentstack.com",
     port: 443,
 },
})

const app = createApp(App)
app.provide('csDeliveryClient', csDeliveryClient);

app.use(router)

app.mount('#app')
