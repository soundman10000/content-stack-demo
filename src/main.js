import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Contentstack from 'contentstack'
import ContentstackLivePreview from '@contentstack/live-preview-utils';

const csDeliveryClient = Contentstack.Stack({
  api_key: 'bltdb934e0566fb4e97',
  delivery_token: 'cs9e60330fee7c946161d14fe7',
  live_preview: {
    enable: true,
    host: "rest-preview.contentstack.com", 
    preview_token: "cs4df90fb20ea882e1f6adfe2b"
  },
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

createApp(App)
  .provide('csDeliveryClient', csDeliveryClient)
  .use(bootstrap)
  .use(router)
  .mount('#app')
