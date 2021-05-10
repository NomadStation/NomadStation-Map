import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Search } from '../components/Search/Search'

const SearchWrap: React.FC<any> = ({ ...props }) => {
  const [value, setValue] = React.useState('')

  return <Search value={value} setValue={setValue} {...props} />
}

storiesOf('components/Search', module).add('default', () => (
  <SearchWrap onChange={action('onChange')} />
))
