import { NextRouter, useRouter } from 'next/router'

import { MAPKIT_MAP_TOKEN } from '../../utils/constants'
import { Coordinates, PlaceData } from '../../@types/types'
import { updateQueryWithPlaceId } from '../../utils/routes'

export let mapkit: any
export const ANNOTATION = 'annotation'
export const NOT_SELECTED = 'not_selected'

export const annotationFactory = (
  coordinate: Coordinates,
  {
    data: {
      place: { id },
      router,
    },
  }: { data: { place: PlaceData; router: NextRouter } },
) => {
  const queryId = (router.query.id as string) || undefined
  const elem = document.createElement('button')
  elem.className = ANNOTATION
  elem.id = `${ANNOTATION}-${id}`
  if (queryId && queryId !== id) {
    elem.classList.add(NOT_SELECTED)
  }
  elem.addEventListener('click', () => {
    updateQueryWithPlaceId(id, window.location.search, router)
  })
  return elem
}

export const renderMap = (id: string) => {
  const map = new mapkit.Map(id)
  map.showsMapTypeControl = true
  map.showsUserLocationControl = true

  return map
}

export const initMapkit = () => {
  mapkit = (window as any).mapkit
  mapkit.init({
    authorizationCallback: function (done: (token: string) => void) {
      done(MAPKIT_MAP_TOKEN)
    },
    language: 'en',
  })
}

export const useSelectedAnnotation = () => {
  const {
    query: { id },
  } = useRouter()
  const elems = document.getElementsByClassName(ANNOTATION)
  for (let i = 0; i < elems.length; i++) {
    const elem = elems[i]
    if (elem.id === `${ANNOTATION}-${id}` || !id) {
      elem.classList.remove(NOT_SELECTED)
      continue
    }
    elem.classList.add(NOT_SELECTED)
  }
}
