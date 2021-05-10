import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../../testUtils'
import { SidePanel } from '../../../components/Panel/SidePanel'

const CONTAINER_ID = 'sidePanelContainer'
const MINIMIZE_ID = 'sidePanelMinimize'
const CLOSE_ID = 'sidePanelClose'

describe('SidePanel', () => {
  it('default', () => {
    const { getByTestId, queryByTestId } = render(<SidePanel />)

    expect(getByTestId(CONTAINER_ID)).not.toHaveClass('visible')
    expect(queryByTestId(MINIMIZE_ID)).not.toBeTruthy()
    expect(queryByTestId(CLOSE_ID)).not.toBeTruthy()
  })

  it('open', () => {
    const { getByTestId } = render(<SidePanel isOpen />)

    expect(getByTestId(CONTAINER_ID)).toHaveClass('visible')
  })

  it('onClose', () => {
    const spy = jest.fn()
    const { getByTestId } = render(<SidePanel onClose={spy} isOpen />)

    fireEvent.click(getByTestId(CLOSE_ID))
    expect(spy).toBeCalledTimes(1)
  })

  it('onMinimise', () => {
    const spy = jest.fn()
    const { getByTestId } = render(<SidePanel onMinimise={spy} isOpen />)

    fireEvent.click(getByTestId(MINIMIZE_ID))
    expect(spy).toBeCalledTimes(1)
  })
})
