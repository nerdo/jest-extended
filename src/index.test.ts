import * as index from './index'

describe('index', () => {
  it('should export arrayExclusivelyContaining', () => {
    expect(index.arrayExclusivelyContaining).toBeDefined()
  })
  it('should export objectExclusivelyContaining', () => {
    expect(index.objectExclusivelyContaining).toBeDefined()
  })
})
