import React from 'react'

import { render } from '../../../testUtils'
import { PlaceList } from '../../../components/PlaceList/PlaceList'
import { PLACEHOLDER } from '../../../utils/constants'

const TITLE_ID = 'listItemTitle'
const IMAGE_ID = 'listItemImage'

const getMockedData = (amount: number) =>
  new Array(amount).fill(null).map((_, i) => {
    return {
      id: `132-${i}`,
      name: `name-${i}`,
      country: 'country',
      pictures: [`aaaaa-${i}`, `bbbbb-${i}`],
      _geoloc: { lat: i, lng: i },
    }
  })

describe('PlaceItem', () => {
  it('default', () => {
    const data = getMockedData(5)
    const { getAllByTestId } = render(<PlaceList data={data} />)

    getAllByTestId(TITLE_ID).forEach((elem, i) => {
      expect(elem).toHaveTextContent(data[i].name)
    })

    getAllByTestId(IMAGE_ID).forEach((elem, i) => {
      expect(elem).toHaveAttribute('src', data[i].pictures[0])
    })
  })

  it('no picture', () => {
    const data = [{ ...getMockedData(1)[0], pictures: [] }]
    const { getAllByTestId } = render(<PlaceList data={data} />)

    getAllByTestId(IMAGE_ID).forEach((elem) => {
      expect(elem).toHaveAttribute('src', PLACEHOLDER)
    })
  })
})
