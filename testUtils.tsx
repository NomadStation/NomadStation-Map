import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import '@testing-library/jest-dom/extend-expect'
import { Form, Formik } from 'formik'
import { NextApiRequest, NextApiResponse } from 'next'

import { theme } from './themes'

jest.mock('next/link', () => ({ children, href }: any) =>
  React.Children.map(children, (child) =>
    React.cloneElement(child, {
      href,
    }),
  ),
)

window.matchMedia = jest.fn().mockImplementation((query: any) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }
})

export const mockRequest = (
  fn: (req: NextApiRequest, res: NextApiResponse) => Promise<void>,
  reqData: any = {},
) => {
  return new Promise((res) => {
    const response = {
      status: (code: any) => ({
        json: (value: any) => {
          res([code, value])
        },
        send: (value: any) => response.status(code).json(value),
      }),
    }
    return fn(reqData, response as any)
  })
}

const AllTheProviders: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export const FORM_ID = 'form'
export const FormikWrap: React.FC<{ onSubmit?: any; values?: any }> = ({
  onSubmit = () => {},
  values = { name: '' },
  children,
}) => {
  return (
    <Formik
      initialValues={{ ...values }}
      validate={() => {}}
      onSubmit={(values) => onSubmit(Object.entries(values))}
    >
      {() => <Form data-testid="form">{children}</Form>}
    </Formik>
  )
}

const customRender = (ui: React.ReactElement) => {
  return render(ui, { wrapper: AllTheProviders })
}

export * from '@testing-library/react'

export { customRender as render }
