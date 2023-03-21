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

type Query = {
  codes: string[]
  country: string | null
}

export type GeolocationResponse = GeolocationError | GeolocationData

type GeolocationError = {
  error: {
    code: string
    message: string
  }
}

export type GeolocationData = {
  ip_address: string
  city: string
  city_geoname_id: number
  region: string
  region_iso_code: string
  region_geoname_id: number
  postal_code: string
  country: string
  country_code: string
  country_geoname_id: number
  country_is_eu: boolean
  continent: string
  continent_code: string
  continent_geoname_id: number
  longitude: number
  latitude: number
  security: Security
  timezone: Timezone
  flag: Flag
  currency: Currency
  connection: Connection
}

interface Connection {
  autonomous_system_number: number
  autonomous_system_organization: string
  connection_type: string
  isp_name: string
  organization_name?: any
}

interface Currency {
  currency_name: string
  currency_code: string
}

interface Flag {
  emoji: string
  unicode: string
  png: string
  svg: string
}

interface Timezone {
  name: string
  abbreviation: string
  gmt_offset: number
  current_time: string
  is_dst: boolean
}

interface Security {
  is_vpn: boolean
}
