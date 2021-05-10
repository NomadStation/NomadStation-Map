import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../../testUtils'
import { PanelControl } from '../../../components/Panel/PanelControl'

const ID = 'controlButton'
const MOBILE_ID = 'controlButtonMobile'

describe('PanelControl', () => {
  it('default', () => {
    const { getByTestId } = render(
      <PanelControl onClick={() => {}} data={['1']} />,
    )

    expect(getByTestId(ID)).toBeVisible()
    expect(getByTestId(MOBILE_ID)).toHaveTextContent('SEE LIST')
  })

  it('placeId mobile text', () => {
    const { getByTestId } = render(
      <PanelControl onClick={() => {}} data={['1']} placeId="123" />,
    )

    expect(getByTestId(MOBILE_ID)).toHaveTextContent('SEE DETAIL')
  })

  it('placeId, visibility', () => {
    const { getByTestId } = render(
      <PanelControl onClick={() => {}} data={['1']} placeId="123" />,
    )

    expect(getByTestId(ID)).not.toHaveClass('invisible')
    expect(getByTestId(MOBILE_ID)).not.toHaveClass('invisible')
  })

  it('open visibility', () => {
    const { getByTestId } = render(
      <PanelControl onClick={() => {}} data={['1']} isOpen />,
    )

    expect(getByTestId(ID)).toHaveClass('invisible')
    expect(getByTestId(MOBILE_ID)).toHaveClass('invisible')
  })

  it('no data visibility', () => {
    const { getByTestId } = render(<PanelControl onClick={() => {}} />)

    expect(getByTestId(ID)).toHaveClass('invisible')
    expect(getByTestId(MOBILE_ID)).toHaveClass('invisible')
  })

  it('empty data visibility', () => {
    const { getByTestId } = render(
      <PanelControl onClick={() => {}} data={[]} />,
    )

    expect(getByTestId(ID)).toHaveClass('invisible')
    expect(getByTestId(MOBILE_ID)).toHaveClass('invisible')
  })

  it('empty data with placeId visibility', () => {
    const { getByTestId } = render(
      <PanelControl onClick={() => {}} data={[]} placeId="123" />,
    )

    expect(getByTestId(ID)).not.toHaveClass('invisible')
    expect(getByTestId(MOBILE_ID)).not.toHaveClass('invisible')
  })

  it('click', () => {
    const spy = jest.fn()
    const { getByTestId } = render(
      <PanelControl onClick={spy} data={['1']} isOpen />,
    )

    fireEvent.click(getByTestId(ID))

    expect(spy).toBeCalledTimes(1)
  })

  it('mobile click', () => {
    const spy = jest.fn()
    const { getByTestId } = render(
      <PanelControl onClick={spy} data={['1']} isOpen />,
    )

    fireEvent.click(getByTestId(MOBILE_ID))

    expect(spy).toBeCalledTimes(1)
  })
})
