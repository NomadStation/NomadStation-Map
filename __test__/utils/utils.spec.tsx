import { isObject } from '../../utils/utils'

describe('Utils', () => {
  describe('isObject', () => {
    it('undefined', () => {
      expect(isObject(undefined)).toBeFalsy()
    })

    it('null', () => {
      expect(isObject(null)).toBeFalsy()
    })

    it('string', () => {
      expect(isObject('')).toBeFalsy()
    })

    it('array', () => {
      expect(isObject([])).toBeFalsy()
    })

    it('empty', () => {
      expect(isObject({})).toBeTruthy()
    })

    it('with value', () => {
      expect(isObject({ a: '1' })).toBeTruthy()
    })
  })
})
