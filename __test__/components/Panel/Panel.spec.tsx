import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../../testUtils'
import { Panel } from '../../../components/Panel/Panel'
import { getPlaceUrl } from '../../../utils/utils'

const IFRAME_ID = 'panelIframe'
const CONTAINER_ID = 'sidePanelContainer'
const OPEN_ID = 'controlButton'

const DATA_MOCK = {
  id: '132',
  name: 'name',
  country: 'country',
  pictures: ['/123'],
  _geoloc: { lat: 0, lng: 0 },
}

describe('Panel', () => {
  it('default', () => {
    const { queryByTestId, getAllByTestId } = render(<Panel />)

    expect(getAllByTestId(CONTAINER_ID)[0]).toHaveClass('invisible')
    expect(getAllByTestId(CONTAINER_ID)[1]).toHaveClass('invisible')
    expect(queryByTestId(IFRAME_ID)).toBeFalsy()
  })

  it('data', () => {
    const { getByTestId } = render(<Panel data={[DATA_MOCK]} />)

    expect(getByTestId(OPEN_ID)).toHaveClass('visible')
  })

  it('open', () => {
    const { getByTestId, getAllByTestId } = render(<Panel data={[DATA_MOCK]} />)

    fireEvent.click(getByTestId(OPEN_ID))
    expect(getAllByTestId(CONTAINER_ID)[0]).toHaveClass('visible')
    expect(getAllByTestId(CONTAINER_ID)[1]).toHaveClass('invisible')
  })

  it('iframe href', () => {
    const { getByTestId } = render(<Panel placeId="123" />)
    const expected = getPlaceUrl('123')

    expect(getByTestId(IFRAME_ID)).toHaveAttribute('src', expected)
  })

  it('list panel visibility', () => {
    const { getAllByTestId, getByTestId } = render(
      <Panel data={[DATA_MOCK]} placeId="123" />,
    )

    fireEvent.click(getByTestId(OPEN_ID))

    expect(getAllByTestId(CONTAINER_ID)[0]).toHaveClass('invisible')
    expect(getAllByTestId(CONTAINER_ID)[1]).toHaveClass('visible')
  })
})
