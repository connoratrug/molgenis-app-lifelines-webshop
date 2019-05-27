import ToggleFacetOption from '@/types/toggleFacetOption'
import FacetFilter from '@/types/facetFilter'

export default interface ApplicationState {
    genderOptions: ToggleFacetOption[],
    cohortOptions: ToggleFacetOption[],
    facetFilter: FacetFilter,
    route: any
  }
