import React from 'react'
import ReactSelect from 'react-select'

import { SelectOptions } from '../../@types/types'
import { SearchOption } from './SearchOption'

type Props = {
  value: string
  onChange(value: any): void
  setValue(value: string): void
  options?: SelectOptions
  loading?: boolean
  className?: string
}

export const Search: React.FC<Props> = ({
  value,
  onChange,
  setValue,
  options = [],
  className = '',
  loading,
}) => {
  const onInputChange = React.useCallback(
    (value: string, { action }: { action: string }) => {
      if (action === 'input-change') {
        setValue(value)
      }
    },
    [onChange],
  )
  const onSelectChange = React.useCallback(
    (value: any) => {
      onChange(value)
    },
    [onChange],
  )
  return (
    <ReactSelect
      className={`search_select ${className}`}
      isLoading={loading}
      onChange={onSelectChange}
      options={options}
      isClearable={false}
      placeholder="Search..."
      noOptionsMessage={({ inputValue }) =>
        Boolean(inputValue) ? 'Nothing found' : ''
      }
      isSearchable
      components={{ Option: SearchOption } as any}
      classNamePrefix={'search_select'}
      inputValue={value}
      onInputChange={onInputChange}
      value={null}
      filterOption={() => true}
      isValidNewOption={() => false}
    />
  )
}
Search.displayName = 'Search'
