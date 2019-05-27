import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

// @ts-ignore
import i18n from '@molgenis/molgenis-i18n-js'

import router from './router'
import { sync } from 'vuex-router-sync'
import { toUrl } from './service/facetToUrlMapper'
import ApplicationState from '@/types/ApplicationState'

Vue.config.productionTip = false

sync(store, router)

store.subscribe((mutation, state:ApplicationState) => {
  console.log(mutation.type)
  if (mutation.type !== 'route/ROUTE_CHANGED') {
    router.push({ query: toUrl(state.facetFilter) })
  }
})

Vue.use(i18n, {
  lng: 'en',
  fallbackLng: 'en',
  namespace: ['lifelines-webshop'],
  callback () {
    new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
