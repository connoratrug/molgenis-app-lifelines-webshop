import { toUrl, toFacets } from '@/service/facetToUrlMapper'

describe('facet to url mapper', () => {

    describe('toUrl', () => {

        it('should map the facets to a url, query part', () => {
            const facet = {
                gender: ['1', '2'],
                cohort: []
            }

            expect(toUrl(facet)).toEqual({
                ge: ['1', '2'],
                co: []
            })
        })
    })

    describe('toFacets', () => {

        it('should url query part to a facets object', () => {
            const query = {
                ge: ['1', '2'],
                co: '101'
            }

            expect(toFacets(query)).toEqual({
                gender: ['1', '2'],
                cohort: ['101']
            })
        })
    })
})