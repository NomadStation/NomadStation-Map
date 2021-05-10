import React from 'react'

type Props = {
  innerProps: any
  innerRef: any
  isFocused?: boolean
  className?: string
}

export const SearchOption: React.FC<Props> = ({
  innerProps,
  innerRef,
  isFocused,
  className = '',
  children,
}) => {
  if (typeof children !== 'string') {
    return null
  }
  const [line, line2] = children.split(';')
  const isFocusedClass = isFocused ? 'bg-blue-100' : ''
  return (
    <button
      className={`${className} ${isFocusedClass} px-4 py-2 block w-full text-left bg-white hover:bg-gray-200`}
      {...innerProps}
      ref={innerRef}
    >
      <div className="text-gray-800 text-sd">{line}</div>
      {line2 && <div className="text-gray-400 text-sm">{line2}</div>}
    </button>
  )
}
SearchOption.displayName = 'SearchOption'
