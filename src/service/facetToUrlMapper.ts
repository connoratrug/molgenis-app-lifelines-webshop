import FacetFilter from '@/types/facetFilter'

const toUrl = (facet: any):any => {
  return {
    ge: facet.gender,
    co: facet.cohort
  }
}

const toFacets = (query: any): FacetFilter => {
  return {
    gender: queryItemToOptionsList(query.ge),
    cohort: queryItemToOptionsList(query.co)
  }
}

const queryItemToOptionsList = (item: any):string[] => {
  if (item === undefined) {
    return []
  }

  return Array.isArray(item) ? item : [item]
}

export {
  toUrl,
  toFacets
}
