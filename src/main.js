import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import {createContentStackClient} from 'contentstackClient'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

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
  environment: 'development',
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
  .provide('cmsClient', createContentStackClient())
  .use(createPinia())
  .use(bootstrap)
  .use(router)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .mount('#app')
