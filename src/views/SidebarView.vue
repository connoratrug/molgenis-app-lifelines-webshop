<template>
  <div id="Sidebar-view">
    <h3>{{ 'lifelines-webshop-sidebar-header' | i18n }}</h3>
    <ul class="list-unstyled">
      <li>
        <toggle-facet facetId="gender" label="Gender facet" :options="genderOptions" v-model="selectedGenderOptions" />
      </li>
      <li>
        <toggle-facet facetId="cohort" label="Cohort facet" :options="cohortOptions" v-model="selectedCohortOptions" />
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import ToggleFacet from '../components/facets/ToggleFacet.vue'
import { toFacets } from '../service/facetToUrlMapper'

export default Vue.extend({
  name: 'SidebarView',
  components: { ToggleFacet },
  computed: {
    genderOptions () {
      return this.$store.state.genderOptions
    },
    cohortOptions () {
      return this.$store.state.cohortOptions
    },
    selectedGenderOptions: {
      get () {
        return this.$store.getters.selectedGenderOptions
      },
      set (value) {
        this.$store.commit('updateGenderFilter', value)
      }
    },
    selectedCohortOptions: {
      get () {
        return this.$store.getters.selectedCohortsOptions
      },
      set (value) {
        this.$store.commit('updateCohortfilter', value)
      }
    }
  },
  mounted: function () {
    const initialFacetState = toFacets(this.$store.state.route.query)
    this.$store.commit('updateGenderFilter', initialFacetState.gender)
    this.$store.commit('updateCohortfilter', initialFacetState.cohort)
  }
})
</script>
