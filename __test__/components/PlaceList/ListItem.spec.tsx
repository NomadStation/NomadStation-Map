import React from 'react'

import { render } from '../../../testUtils'
import { ListItem } from '../../../components/PlaceList/ListItem'

const ANCHOR_ID = 'listItemAnchor'
const TITLE_ID = 'listItemTitle'
const SUBTITLE_ID = 'listItemSubtitle'
const IMAGE_ID = 'listItemImage'

describe('ListItem', () => {
  it('default', () => {
    const title = 'Title'
    const subtitle = 'Subtitle'
    const href = '/123'
    const src = '/src'
    const alt = 'alt'
    const { getByTestId } = render(
      <ListItem
        title={title}
        subtitle={subtitle}
        href={href}
        src={src}
        alt={alt}
      />,
    )

    expect(getByTestId(TITLE_ID)).toHaveTextContent(title)
    expect(getByTestId(SUBTITLE_ID)).toHaveTextContent(subtitle)
    expect(getByTestId(ANCHOR_ID)).toHaveAttribute('href', href)
    expect(getByTestId(IMAGE_ID)).toHaveAttribute('src', src)
    expect(getByTestId(IMAGE_ID)).toHaveAttribute('alt', alt)
  })
})
