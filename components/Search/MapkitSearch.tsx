import React from 'react'
import { useRouter } from 'next/router'

import { Search } from './Search'
import { useMapkitSearch } from '../../data/useMapkitSearch'
import { MapkitSearchData } from '../../@types/types'
import { updateAxisQueryParams } from '../../utils/routes'

type Props = {
  className?: string
}

export const MapkitSearch: React.FC<Props> = ({ className }) => {
  const router = useRouter()
  const [value, setValue] = React.useState('')
  const { loading, data } = useMapkitSearch(value)
  const onChange = React.useCallback(
    async (option: { label: string; value: MapkitSearchData }) => {
      if (option) {
        const { latitude, longitude } = option.value.coordinate
        await updateAxisQueryParams(latitude, longitude, router)
        setValue(option.value.displayLines[0])
      }
    },
    [setValue],
  )
  return (
    <Search
      className={className}
      value={value}
      options={data?.map((item) => ({
        label: `${item.displayLines[0]};${
          item.displayLines[1] ? item.displayLines[1] : ''
        }`,
        value: item,
      }))}
      loading={loading}
      onChange={onChange}
      setValue={setValue}
    />
  )
}
MapkitSearch.displayName = 'MapkitSearch'
