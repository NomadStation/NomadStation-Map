import { NextRouter } from 'next/router'

import { LAT_QUERY, LNG_QUERY, PLACE_ID_QUERY } from './constants'
import querystring from 'querystring'
import { isObject } from './utils'

export const NOMAD_STATION_URL = 'https://nomadstation.io'

export const getQueryParams = (url: string) => {
  if (url === '') {
    return {}
  }
  if (!url) {
    return null
  }
  const [, query] = url.split('?')
  if (!query) {
    return { ...querystring.parse(url) }
  }
  return { ...querystring.parse(query) }
}
export const getQueryString = (obj: {
  [key: string]: string | string[] | undefined | number
}) => {
  if (!isObject(obj)) {
    return null
  }
  return querystring.stringify(obj)
}

export const updateQueryParams = (query: string, router: NextRouter) => {
  if ((!query && query !== '') || !router) {
    throw new Error('Query and router must be defined')
  }
  const queryPath = query ? `?${query}` : ''
  return router.replace(queryPath, queryPath, { shallow: true })
}

export const getAxisQueryParams = (
  lat: number | string,
  lng: number | string,
) => {
  if ((!lat && lat !== 0) || (!lng && lng !== 0)) {
    return null
  }
  return getQueryString({ [LAT_QUERY]: lat, [LNG_QUERY]: lng })
}

export const updateAxisQueryParams = (
  lat: number,
  lng: number,
  router: NextRouter,
) => {
  const params = getAxisQueryParams(lat, lng)
  if (!params) {
    throw new Error(`Params parsing failed: ${lat}, ${lng}`)
  }
  return updateQueryParams(params, router)
}

export const removePlaceIDFromQuery = (url: string, router: NextRouter) => {
  const params = getQueryParams(url)
  if (!isObject(params)) {
    throw new Error(`Params extraction not successful: ${url} ${params}`)
  }
  const { [PLACE_ID_QUERY]: id, ...rest } = params as {
    [key: string]: string
  }
  const query = getQueryString(rest)
  if (!query && query !== '') {
    throw new Error(`Query extraction not successful: ${url} ${params}`)
  }
  return updateQueryParams(query, router)
}

export const getQueryStringWithPlaceId = (id: string, url: string) => {
  if (!id) {
    throw new Error(`Id should be defined: ${id}`)
  }
  const params = getQueryParams(url)
  if (!isObject(params)) {
    throw new Error(`Params extraction not successful: ${url} ${params}`)
  }
  return getQueryString({ ...params, [PLACE_ID_QUERY]: id })
}

export const updateQueryWithPlaceId = (
  id: string,
  url: string,
  router: NextRouter,
) => {
  const query = getQueryStringWithPlaceId(id, url)
  if (!query) {
    throw new Error(`Query building not successful: ${url} ${id}`)
  }
  return updateQueryParams(query, router)
}
