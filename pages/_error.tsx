import NextErrorComponent, { ErrorProps } from 'next/error'
import * as Sentry from '@sentry/browser'
import { NextPage } from 'next'

type Props = ErrorProps & {
  err: Error | undefined | null
}

const MyError: NextPage<Props> = ({ statusCode, err }) => {
  if (err) {
    Sentry.captureException(err)
  }
  return <NextErrorComponent statusCode={statusCode} />
}
MyError.getInitialProps = async (context) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps(context)
  return { ...errorInitialProps, err: context.err }
}
export default MyError
