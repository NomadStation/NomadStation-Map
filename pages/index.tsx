import { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'

import { useAlgoliaSearch } from '../data/useAlgoliaSearch'
import MapKit from '../components/MapKit/MapKit'
import { MapkitSearch } from '../components/Search/MapkitSearch'
import { Panel } from '../components/Panel/Panel'
import { LAT_QUERY, LNG_QUERY, PLACE_ID_QUERY } from '../utils/constants'

type Props = {}

const Home: NextPage<Props> = ({}) => {
  const router = useRouter()
  const lat = router.query[LAT_QUERY] as string | undefined
  const lng = router.query[LNG_QUERY] as string | undefined
  const placeId = router.query[PLACE_ID_QUERY] as string | undefined
  const center =
    lat && lng ? { latitude: Number(lat), longitude: Number(lng) } : null
  const { data, fetch } = useAlgoliaSearch()
  const bottomOffsetClass =
    data && data.length > 0 ? 'bottom-12 sm:bottom-0' : ''

  return (
    <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
      <MapKit
        className={bottomOffsetClass}
        pointers={data}
        center={center}
        onRefresh={fetch}
      />
      <MapkitSearch />
      <Panel data={data} placeId={placeId} />
    </div>
  )
}
Home.displayName = 'Home'
export default Home
