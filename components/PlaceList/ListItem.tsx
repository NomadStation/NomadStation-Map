import React from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link'

type Props = {
  title: string
  subtitle: string
  href: string
  src: string
  alt: string
}

export const ListItem: React.FC<Props> = ({
  title,
  subtitle,
  src,
  alt,
  href,
}) => {
  return (
    <li className="list-none m-1 h-20 relative">
      <NextLink href={href} passHref shallow>
        <a
          data-testid="listItemAnchor"
          className="flex justify-between h-full w-full bg-transparent rounded-md hover:bg-white p-2"
        >
          <div className="mt-1 w-40 flex-grow-0">
            <h2
              data-testid="listItemTitle"
              className="text-gray-800 overflow-ellipsis overflow-hidden font-semibold m-0 leading-none"
            >
              {title}
            </h2>
            <p
              data-testid="listItemSubtitle"
              className="text-gray-500 text-sm m-0 leading-none"
            >
              {subtitle}
            </p>
          </div>
          <NextImage
            data-testid="listItemImage"
            width={85}
            height={64}
            src={src}
            alt={alt}
            className="rounded"
          />
        </a>
      </NextLink>
    </li>
  )
}
