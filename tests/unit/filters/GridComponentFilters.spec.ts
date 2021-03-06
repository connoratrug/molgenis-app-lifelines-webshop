import { formatCount } from '@/filters/GridComponentFilters'

describe('GridComponentsFilter', () => {
  it('returns "1-15" when a negative value is given [threshold]', () => {
    expect(formatCount(-1)).toBe('1-15')
  })
  it('returns "-" when a value that is NaN is provided', () => {
    expect(formatCount(NaN)).toBe('-')
  })
  it('returns "0" when a value is 0', () => {
    expect(formatCount(0)).toBe('0')
  })
})
