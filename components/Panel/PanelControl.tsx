import React from 'react'

import { Chevron } from '../icons/Chevron'

type Props = {
  placeId?: string
  isOpen?: boolean
  onClick(): void
  data?: any[]
}

export const PanelControl: React.FC<Props> = ({
  onClick,
  data,
  isOpen,
  placeId,
}) => {
  const shouldShowButton =
    (data && data?.length > 0 && !isOpen) || (placeId && !isOpen)

  return (
    <>
      <>
        <button
          onClick={onClick}
          data-testid="controlButton"
          aria-label="open side menu"
          className={`${shouldShowButton ? 'visible' : 'invisible'}
              focus-ring
              absolute
              top-1/2
              transform
              -translate-x-0.5
              ml-0.5
              -translate-y-1/2
              left-0
              bg-white
              rounded-tr
              rounded-br
              text-lg
              text-gray-500
              px-2
              py-3
              hidden
              sm:block`}
        >
          <Chevron />
        </button>
        <button
          data-testid="controlButtonMobile"
          onClick={onClick}
          aria-label="open side menu"
          className={`${shouldShowButton ? 'visible' : 'invisible'}
            border-t
            border-gray-300
            focus-ring
            absolute
            bottom-0
            transform
            w-full
            h-12
            bg-white
            text-lg
            text-gray-500
            px-2
            py-3
            sm:hidden`}
        >
          {placeId ? 'SEE DETAIL' : 'SEE LIST'}
        </button>
      </>
    </>
  )
}
PanelControl.displayName = 'PanelControl'
