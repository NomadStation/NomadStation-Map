import NextLink from 'next/link'
import React from 'react'

import { NOMAD_STATION_URL } from '../utils/routes'

export const Logo: React.FC = () => {
  return (
    <NextLink href={NOMAD_STATION_URL} passHref>
      <a className="flex items-center">
        <img
          src={'/logo-dark.svg'}
          alt=""
          className="w-6 h-6 mr-1 sm:w-8 sm:h-8 sm:mr-2"
        />
        <span className="text-gray-800 text-md font-medium sm:text-lg">
          <span className="text-red-800">Nomad</span>Station
        </span>
      </a>
    </NextLink>
  )
}
