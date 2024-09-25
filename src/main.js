import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Contentstack from 'contentstack'
import ContentstackLivePreview from '@contentstack/live-preview-utils';

const csDeliveryClient = Contentstack.Stack({
  api_key: 'blt16b8a435e6f90caa',
  delivery_token: 'csdb6a16940f5a9fb667945ecd',
  live_preview: {
    enable: true,
    host: "rest-preview.contentstack.com", 
    preview_token: "cs08b2313d23612772dc185b06"
  },
  environment: 'localhost',
});

ContentstackLivePreview.init({
 stackDetails: {
     apiKey: "blt16b8a435e6f90caa",
     environment: "development",
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
