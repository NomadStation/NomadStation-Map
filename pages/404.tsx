import React from 'react'
import { NextPage } from 'next'

import Error from './_error'

type Props = {}

const ErrorNotFound: NextPage<Props> = ({}) => {
  return <Error statusCode={404} text={'Page not found'} />
}

export default ErrorNotFound
