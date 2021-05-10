import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { ListItem } from '../components/PlaceList/ListItem'

storiesOf('components/ListItem', module).add('default', () => (
  <ListItem
    title="Title"
    href={'123'}
    subtitle="Subtitle"
    src={'https://picsum.photos/400/300'}
    alt={'Alternative text'}
  />
))
