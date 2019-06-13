/**
 * Vue
 * @library
 */
import Vue from 'vue'

// Plugins
import { sync } from 'vuex-router-sync'
import media from '@/plugins/media'

// Global Components
import '@/components/global'
import '@/components/mat'

// Tailwind Styles
import '@/assets/tailwind-styles.css'
// Custom Styles
import '@/sass/app-styles.scss'

// Application imports
import App from './App'
import store from '@/store'
import router from '@/router'
import { AppConstants } from '@/services/util'

sync(store, router)
Vue.use(media)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  mq: {
    ...AppConstants.MEDIA
  },
  render: h => h(App)
}).$mount('#app')
