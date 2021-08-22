import React from 'react'

import { Logo } from './Logo'

export const TopLogo: React.FC = () => {
  return (
    <div className="fixed z-10 top-0 left-0 p-6 py-3 pl-3 pr-6 sm:p-6 sm:py-4 sm:pl-4 sm:pr-8 bg-white rounded-br-full shadow-md">
      <Logo />
    </div>
  )
}
