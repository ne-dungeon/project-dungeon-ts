import { sample } from './sample'

describe('Testing Sample', () => {
  test('should be defined', () => {
    expect(sample).toBeDefined()
  })

  test('returns the string sample', () => {
    expect(sample()).toEqual('sample')
  })
})
