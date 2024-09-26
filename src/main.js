import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
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

createApp(App)
  .provide('csDeliveryClient', Contentstack)
  .provide('cmsClient', createContentStackClient())
  .use(createPinia())
  .use(router)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .mount('#app')
