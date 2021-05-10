import React from 'react'

export const ClientRender: React.FC = ({ children }) => {
  const [showChild, setShowChild] = React.useState(
    typeof window !== 'undefined',
  )

  React.useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  return <>{children}</>
}
