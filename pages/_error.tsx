import React from 'react'
import styled, { css } from 'styled-components'
import { NextPage } from 'next'

import { pxToRem } from '../utils/utils'

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Code = styled.h1(
  ({ theme }) => css`
    width: 100%;
    text-align: center;
    font-size: ${pxToRem(42)};
    color: ${theme.color.dark};
    margin: 0 0 1rem;
  `,
)

const Title = styled.h1(
  ({ theme }) => css`
    width: 100%;
    text-align: center;
    margin: 0;
    font-size: ${pxToRem(34)};
    color: ${theme.color.dark};
  `,
)

type Props = {
  statusCode?: number
  text?: string
}

const Error: NextPage<Props> = ({
  statusCode = 500,
  text = 'Unexpected error',
}) => {
  return (
    <Wrap>
      <Code>{statusCode}</Code>
      {text && <Title>{text}</Title>}
    </Wrap>
  )
}

export default Error
