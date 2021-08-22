import { LAT_QUERY, LNG_QUERY, PLACE_ID_QUERY } from '../../utils/constants'
import {
  getAxisQueryParams,
  getQueryParams,
  getQueryString,
  getQueryStringWithPlaceId,
  removePlaceIDFromQuery,
  updateAxisQueryParams,
  updateQueryParams,
  updateQueryWithPlaceId,
} from '../../utils/routes'

describe('Routes', () => {
  const routerMock: any = {
    replace: jest.fn(),
    push: jest.fn(),
  }
  describe('getQueryParams', () => {
    it('null', () => {
      expect(getQueryParams(null as any)).toEqual(null)
    })

    it('undefined', () => {
      expect(getQueryParams(undefined as any)).toEqual(null)
    })

    it('empty', () => {
      expect(getQueryParams('')).toEqual({})
    })
    it('full url', () => {
      expect(getQueryParams('www.url.com?key=1')).toEqual({ key: '1' })
    })

    it('full url, multiple params', () => {
      expect(getQueryParams('www.url.com?key=1&key2=2')).toEqual({
        key: '1',
        key2: '2',
      })
    })
  })

  describe('updateQueryParams', () => {
    it('null', () => {
      const fn = () => {
        updateQueryParams(null as any, routerMock)
      }
      expect(fn).toThrow(Error)
    })

    it('no router', () => {
      const fn = () => {
        updateQueryParams(null as any, null as any)
      }
      expect(fn).toThrow(Error)
    })

    it('empty', () => {
      routerMock.replace.mockClear()
      updateQueryParams('', routerMock)
      const expected = ``
      expect(routerMock.replace).toBeCalledWith(expected, expected, {
        shallow: true,
      })
    })

    it('simple', () => {
      routerMock.replace.mockClear()
      updateQueryParams('a=b&b=a', routerMock)
      const expected = `?a=b&b=a`
      expect(routerMock.replace).toBeCalledWith(expected, expected, {
        shallow: true,
      })
    })
  })

  describe('getQueryString', () => {
    it('null', () => {
      expect(getQueryString(null as any)).toEqual(null)
    })

    it('undefined', () => {
      expect(getQueryString(undefined as any)).toEqual(null)
    })

    it('wrong type', () => {
      expect(getQueryString('123' as any)).toEqual(null)
    })

    it('simple', () => {
      expect(getQueryString({ key: '1' })).toBe('key=1')
    })

    it('multiple', () => {
      expect(getQueryString({ key: '1', key2: 2 })).toBe('key=1&key2=2')
    })
  })
  describe('getAxisQueryParams', () => {
    it('null', () => {
      expect(getAxisQueryParams(null as any, null as any)).toEqual(null)
    })

    it('undefined', () => {
      expect(getAxisQueryParams(undefined as any, undefined as any)).toEqual(
        null,
      )
    })

    it('empty', () => {
      expect((getAxisQueryParams as any)()).toEqual(null)
    })

    it('simple', () => {
      expect(getAxisQueryParams(0, 0)).toEqual(`${LAT_QUERY}=0&${LNG_QUERY}=0`)
    })
  })

  describe('updateAxisQueryParams', () => {
    it('null', () => {
      const fn = () => {
        return updateAxisQueryParams(null as any, null as any, routerMock)
      }
      expect(fn).toThrow(Error)
    })

    it('undefined', () => {
      const fn = () => {
        return updateAxisQueryParams(
          undefined as any,
          undefined as any,
          routerMock,
        )
      }
      expect(fn).toThrow(Error)
    })

    it('no router', () => {
      const fn = () => {
        return updateAxisQueryParams(1, 2, null as any)
      }
      expect(fn).toThrow(Error)
    })

    it('simple', () => {
      routerMock.replace.mockClear()
      updateAxisQueryParams(0, 0, routerMock)
      const expectedQuery = `?${LAT_QUERY}=0&${LNG_QUERY}=0`
      expect(routerMock.replace).toBeCalledWith(expectedQuery, expectedQuery, {
        shallow: true,
      })
    })
  })

  describe('removePlaceIDFromQuery', () => {
    it('null', () => {
      const fn = () => {
        return removePlaceIDFromQuery(null as any, routerMock)
      }
      expect(fn).toThrow(Error)
    })

    it('no router', () => {
      const fn = () => {
        return removePlaceIDFromQuery('id=123', null as any)
      }
      expect(fn).toThrow(Error)
    })

    it('empty', () => {
      routerMock.replace.mockClear()
      removePlaceIDFromQuery('', routerMock)
      const expectedQuery = ''
      expect(routerMock.replace).toBeCalledWith(expectedQuery, expectedQuery, {
        shallow: true,
      })
    })

    it('simple', () => {
      routerMock.replace.mockClear()
      removePlaceIDFromQuery('id=123', routerMock)
      const expectedQuery = ``
      expect(routerMock.replace).toBeCalledWith(expectedQuery, expectedQuery, {
        shallow: true,
      })
    })

    it('with other params', () => {
      routerMock.replace.mockClear()
      removePlaceIDFromQuery('id=123&key=1', routerMock)
      const expectedQuery = `?key=1`
      expect(routerMock.replace).toBeCalledWith(expectedQuery, expectedQuery, {
        shallow: true,
      })
    })
  })

  describe('getQueryStringWithPlaceId', () => {
    it('null', () => {
      const fn = () => {
        return getQueryStringWithPlaceId('1', null as any)
      }
      expect(fn).toThrow(Error)
    })

    it('no id', () => {
      const fn = () => {
        return getQueryStringWithPlaceId('', '')
      }
      expect(fn).toThrow(Error)
    })

    it('simple', () => {
      expect(getQueryStringWithPlaceId('123', '?key=1')).toBe(
        `key=1&${PLACE_ID_QUERY}=123`,
      )
    })
  })

  describe('updateQueryWIthPlaceId', () => {
    it('null', () => {
      const fn = () => {
        return updateQueryWithPlaceId('', null as any, routerMock)
      }
      expect(fn).toThrow(Error)
    })

    it('no id', () => {
      const fn = () => {
        return updateQueryWithPlaceId('', '', routerMock)
      }
      expect(fn).toThrow(Error)
    })

    it('with other params', () => {
      routerMock.replace.mockClear()
      updateQueryWithPlaceId('987', 'id=123&key=1', routerMock)
      const expectedQuery = `?${PLACE_ID_QUERY}=987&key=1`
      expect(routerMock.replace).toBeCalledWith(expectedQuery, expectedQuery, {
        shallow: true,
      })
    })
  })
})
