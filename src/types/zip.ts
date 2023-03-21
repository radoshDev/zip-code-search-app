export type ZipResponse = {
  query: Query
  results: { [key: string]: ZipData[] }
}

export type ZipData = {
  postal_code: string
  country_code: string
  latitude: string
  longitude: string
  city: string
  state: string
  state_code: string
  province?: string
  province_code?: string
}

export type Query = {
  codes: string[]
  country: string | null
}
