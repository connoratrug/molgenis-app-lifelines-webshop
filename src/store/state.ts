import ApplicationState from '@/types/ApplicationState'

const state: ApplicationState = {
  genderOptions: [{ value: '1', text: 'Male' }, { value: '2', text: 'Female' }],
  cohortOptions: [{ value: '101', text: 'baseline' }, { value: '102', text: 'next' }, { value: '103', text: 'gwas' }],
  facetFilter: {
    gender: [],
    cohort: []
  },
  route: {}
}

export default state
