import React from 'react'

import { BoundingBox, Coordinates } from '../../@types/types'
import { MAP_ID } from '../../utils/constants'
import { ClientRender } from '../common/ClientRender'
import { MapkitControl } from './MapkitControl'

type Props = {
  className?: string
  distance?: number
  center?: Coordinates | null
  pointers?: { id: string; _geoloc: { lat: number; lng: number } }[]
  onRefresh(boundingBox: BoundingBox): void
}

export const MapKit: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={`absolute left-0 top-0 right-0 bottom-12 sm:bottom-0 overflow-hidden ${className}`}
    >
      <div className="w-full h-full absolute" id={MAP_ID} />
      <ClientRender>
        <MapkitControl {...props} />
      </ClientRender>
    </div>
  )
}
MapKit.displayName = 'MapKit'
export default MapKit
