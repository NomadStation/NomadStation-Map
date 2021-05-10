import React from 'react'
import { useRouter } from 'next/router'

import {
  annotationFactory,
  initMapkit,
  mapkit,
  renderMap,
  useSelectedAnnotation,
} from './utils'
import { BoundingBox, Coordinates, CoordinatesDelta } from '../../@types/types'
import { MAP_ID } from '../../utils/constants'
import { updateAxisQueryParams } from '../../utils/routes'

const DISTANCE = 30000
const DEFAULT_LAT_DELTA = 0.25983016825057703
const DEFAULT_LNG_DELTA = 0.313286761841141

type Props = {
  className?: string
  distance?: number
  center?: Coordinates | null
  pointers?: { id: string; _geoloc: { lat: number; lng: number } }[]
  onRefresh(boundingBox: BoundingBox): void
}

export const MapkitControl: React.FC<Props> = ({
  distance = DISTANCE,
  center,
  onRefresh,
  pointers = [],
}) => {
  const router = useRouter()
  useSelectedAnnotation()
  const map = React.useRef<any>()
  React.useLayoutEffect(() => {
    initMapkit()
    map.current = renderMap(MAP_ID)
  }, [])

  React.useEffect(() => {
    map.current.removeAnnotations(map.current.annotations)
    pointers.forEach((item) => {
      const {
        _geoloc: { lat, lng },
      } = item
      const coordinate = new mapkit.Coordinate(lat, lng)
      map.current.addAnnotation(
        new mapkit.Annotation(coordinate, annotationFactory, {
          data: { place: item, router },
        }),
      )
    })
  }, [pointers])

  React.useEffect(() => {
    if (
      !center ||
      !center.longitude ||
      !center.latitude ||
      center.longitude === map.current.center.longitude ||
      center.latitude === map.current.center.latitude
    ) {
      return
    }
    const { latitude, longitude } = center
    const coordinate = new mapkit.Coordinate(latitude, longitude)
    map.current
      .setCenterAnimated(coordinate)
      .setCameraDistanceAnimated(distance, false)
    refresh(center, {
      latitudeDelta: DEFAULT_LAT_DELTA,
      longitudeDelta: DEFAULT_LNG_DELTA,
    })
  }, [center && center.latitude, center && center.longitude])

  const refresh = React.useCallback(
    (
      { latitude, longitude }: Coordinates,
      { latitudeDelta, longitudeDelta }: CoordinatesDelta,
    ) => {
      onRefresh([
        latitude - latitudeDelta / 2,
        longitude - longitudeDelta / 2,
        latitude + latitudeDelta / 2,
        longitude + longitudeDelta / 2,
      ])
    },
    [onRefresh],
  )

  const onSearchThisArea = React.useCallback(async () => {
    const { center, span } = map.current.region
    await updateAxisQueryParams(center.latitude, center.longitude, router)
    refresh(center, span)
  }, [refresh, map])

  return (
    <button
      className={[
        'absolute',
        'bottom-8',
        'left-1/2',
        'transform',
        '-translate-x-1/2',
        'rounded-md',
        'bg-gray-100',
        'py-1',
        'px-2',
        'text-sm',
        'shadow-md',
        'text-black',
      ].join(' ')}
      onClick={onSearchThisArea}
    >
      Search this area
    </button>
  )
}
MapkitControl.displayName = 'MapkitControl'
