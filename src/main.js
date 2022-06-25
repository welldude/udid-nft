import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/tailwindcss.css'
import './assets/css/global.less'

createApp(App).use(store).use(router).mount('#app')
