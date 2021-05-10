import React from 'react'
import { useDebounce } from 'use-debounce'

import { initMapkit, mapkit } from '../components/MapKit/utils'
import { MapkitSearchData } from '../@types/types'

const TIME = 300
const OPTIONS = {
  includeAddresses: true,
  includePointsOfInterest: false,
  getsUserLocation: false,
  includeQueries: false,
  language: 'en-GB',
}

type Result = {
  query: string
  results: MapkitSearchData[]
}

export const useMapkitSearch = (value: string) => {
  const search = React.useRef<any>()
  const [data, setData] = React.useState<MapkitSearchData[]>()
  const [loading, setLoading] = React.useState(false)
  const [searchValue, { isPending }] = useDebounce(value, TIME)

  React.useEffect(() => {
    initMapkit()
    search.current = new mapkit.Search(OPTIONS)
  }, [])

  React.useEffect(() => {
    if (!searchValue && data && data.length > 0) {
      setData([])
    }
    if (searchValue && searchValue === value) {
      searchFor(searchValue)
    }
  }, [searchValue])

  const searchFor = React.useCallback(
    (searchForValue: string) => {
      try {
        setLoading(true)
        search.current.autocomplete(
          searchForValue,
          (error: any, data: Result) => {
            setData(data.results)
            setLoading(false)
          },
          OPTIONS,
        )
      } catch (e) {
        setLoading(false)
      }
    },
    [setData],
  )

  return {
    data,
    loading: isPending() || loading,
  }
}
