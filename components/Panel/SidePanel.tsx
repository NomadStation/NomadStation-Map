import React from 'react'

import { Minus } from '../icons/Minus'
import { X } from '../icons/X'

type Props = {
  isOpen?: boolean
  onOpen?(): void
  onMinimise?(): void
  onClose?(): void
}

export const SidePanel: React.FC<Props> = ({
  isOpen = false,
  onMinimise,
  onClose,
  children,
}) => {
  return (
    <div
      data-testid="sidePanel"
      className={[
        'backdrop-filter',
        'bg-white',
        'bg-opacity-70',
        'backdrop-blur-lg',
        'absolute',
        'rounded',
        'shadow-sm',
        'left-0',
        'w-full',
        'h-auto',
        'transform',
        'bottom-0',
        'sm:w-72',
        'lg:w-96',
        'sm:h-3/5',
        'sm:bottom-auto',
        'sm:-translate-y-1/2',
        isOpen
          ? 'top-24 sm:top-1/2 sm:left-1'
          : 'top-full sm:top-1/2 sm:-left-72 lg:-left-96',
      ].join(' ')}
    >
      <div
        data-testid="sidePanelContainer"
        className={[
          isOpen ? 'visible' : 'invisible',
          'z-1',
          'absolute',
          'left-0',
          'top-0',
          'pt-12',
          'w-full',
          'h-full',
        ].join(' ')}
      >
        {children}
      </div>
      <div
        className={[
          'relative',
          'flex',
          'align-middle',
          'justify-end',
          'w-full',
          'h-12',
          'border-b',
          'border-gray-200',
        ].join(' ')}
      >
        {onMinimise && (
          <button
            data-testid="sidePanelMinimize"
            onClick={onMinimise}
            aria-label="minimise side menu"
            className={[
              'hover:shadow-sm',
              'border-1',
              'border-gray-400',
              'rounded-sm',
              'w-12',
              'h-12',
              'text-lg',
              'text-gray-500',
              'px-2',
              'py-3',
            ].join(' ')}
          >
            <Minus />
          </button>
        )}
        {onClose && (
          <button
            data-testid="sidePanelClose"
            onClick={onClose}
            aria-label="close side menu"
            className={[
              'hover:shadow-sm',
              'border-1',
              'border-gray-400',
              'rounded-sm',
              'w-12',
              'h-12',
              'text-lg',
              'text-gray-500',
              'px-2',
              'py-3',
            ].join(' ')}
          >
            <X />
          </button>
        )}
      </div>
    </div>
  )
}
SidePanel.displayName = 'SidePanel'
