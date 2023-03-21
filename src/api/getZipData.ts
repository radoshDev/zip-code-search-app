import type { ZipData, ZipResponse } from '@/types/zip'

const baseUrl = 'https://app.zipcodebase.com/api/v1/'

const zipApiKey = import.meta.env.VITE_ZIP_API_KEY

export const getZipData = async (zip: string): Promise<ZipData> => {
  const response = await fetch(
    `${baseUrl}search?codes=${zip}&country=us&apikey=${zipApiKey}`
  )
  const zipResponse = (await response.json()) as ZipResponse
  if (!zipResponse.results) throw new Error('Bad response form server')
  if (!zipResponse.results?.[zip]?.[0])
    throw new Error('Nothing was found for this zip code')
  return zipResponse.results[zip][0]
}
