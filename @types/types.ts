export type Empty = ''

export type SelectOptions = { value: any; label: string }[]
export type Coordinates = { latitude: number; longitude: number }
export type CoordinatesDelta = { latitudeDelta: number; longitudeDelta: number }
export type MapkitSearchData = {
  displayLines: string[]
  coordinate: { latitude: number; longitude: number }
}

export type PlaceData = {
  id: string
  name: string
  country: string
  pictures: string[]
  _geoloc: { lat: number; lng: number }
}

type Point1Lat = number
type Point1Lng = number
type Point2Lat = number
type Point2Lng = number
export type BoundingBox = [Point1Lat, Point1Lng, Point2Lat, Point2Lng]
