export const convertRemToPixels = (rem: number) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

export const randomNumber = (min: number, max: number) => {
  const r = Math.random() * (max - min) + min
  return Math.floor(r)
}

export const pxToRem = (...amounts: number[]) =>
  amounts.map((amount) => `${amount / 16}${amount ? 'rem' : ''}`).join(' ')

export const getPlaceUrl = (id: string) => {
  return `https://nomadstation.io/raw-place/${id}`
}

export const isObject = (obj: any) => {
  return obj && typeof obj === 'object' && obj.constructor === Object
}
