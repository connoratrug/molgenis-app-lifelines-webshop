import Vue from 'vue'
import Vuex from 'vuex'
import filterState from '@/store/state'
import ApplicationState from '@/types/ApplicationState'
import { toFacets } from '@/service/facetToUrlMapper'

Vue.use(Vuex)

export default new Vuex.Store({
  state: filterState,
  getters: {
    selectedGenderOptions: (state: ApplicationState) => toFacets(state.route.query).gender,
    selectedCohortsOptions: (state: ApplicationState) => toFacets(state.route.query).cohort
  },
  mutations: {
    updateGenderFilter (state: ApplicationState, selectedGenders: String[]) {
      state.facetFilter.gender = selectedGenders
    },
    updateCohortfilter (state: ApplicationState, selectedCohorts: String[]) {
      state.facetFilter.cohort = selectedCohorts
    }
  }
})
