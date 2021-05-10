import algoliasearch from 'algoliasearch'
import React from 'react'

import {
  ALGOLIA_APP_ID,
  PLACE_KEY,
  ALGOLIA_SEARCH_KEY,
} from '../utils/constants'
import { BoundingBox, PlaceData } from '../@types/types'

export const SEARCH_AMOUNT = 10
export const SearchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY)
export const SearchIndex = SearchClient.initIndex(PLACE_KEY)

export const searchFor = async (
  boundingBox: BoundingBox,
  length: number = SEARCH_AMOUNT,
): Promise<any[]> => {
  const search = await SearchIndex.search('', {
    length,
    insideBoundingBox: [boundingBox],
  })

  return search.hits
}

export const useAlgoliaSearch = () => {
  const [data, setData] = React.useState<any[] | undefined>(undefined)
  const fetch = React.useCallback(
    async (boundingBox: BoundingBox) => {
      const newData = await searchFor(boundingBox)
      setData(newData)
    },
    [setData],
  )

  return {
    data: data as PlaceData[],
    fetch,
    loading: data === undefined,
  }
}
