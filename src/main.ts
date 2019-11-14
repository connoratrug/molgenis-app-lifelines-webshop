import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
// @ts-ignore
import i18n from '@molgenis/molgenis-i18n-js'
import router from './router'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'

Vue.config.productionTip = false

store.dispatch('fetchContext').then(() => {
  Vue.use(i18n, {
    lng: 'en',
    fallbackLng: 'en',
    namespace: ['lifelines-webshop', 'ui-form'],
    callback () {
      new Vue({
        store,
        router,
        render: h => h(App)
      }).$mount('#app')
    }
  })
}).catch(() => {
  // session key has timed out
  window.location.href = '/login'
})
