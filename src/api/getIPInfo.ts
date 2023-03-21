import type { GeolocationData, GeolocationResponse } from '@/types'

const baseUrl = 'https://ipgeolocation.abstractapi.com/v1/'

const geoApiKey = import.meta.env.VITE_GEO_API_KEY

export const getIPInfo = async (): Promise<GeolocationData> => {
  const response = await fetch(`${baseUrl}?api_key=${geoApiKey}`)
  const geolocationResponse = (await response.json()) as GeolocationResponse
  if ('error' in geolocationResponse)
    throw new Error(geolocationResponse.error.message)

  return geolocationResponse
}
