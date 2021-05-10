import React from 'react'

import { PlaceData } from '../../@types/types'
import { ListItem } from './ListItem'
import { getQueryStringWithPlaceId } from '../../utils/routes'
import { PLACEHOLDER } from '../../utils/constants'

type Props = {
  data?: PlaceData[]
  className?: string
}

export const PlaceList: React.FC<Props> = ({ data, className }) => {
  return (
    <ul className={`overflow-auto h-full ${className}`}>
      {data?.map(({ name, country, pictures, id }) => (
        <ListItem
          title={name}
          key={id}
          subtitle={country}
          href={`?${getQueryStringWithPlaceId(id, window.location.search)}`}
          src={pictures[0] || PLACEHOLDER}
          alt={`${name} main picture`}
        />
      ))}
    </ul>
  )
}
PlaceList.displayName = 'PlaceList'
