import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { getIPInfo } from '@/api/getIPInfo'
import type { GeolocationData } from '@/types'

export const useUserStore = defineStore('user', () => {
  const geoData = reactive({
    data: null as GeolocationData | null,
    error: '',
    isLoading: false,
  })

  async function fetchIPInfo() {
    try {
      geoData.isLoading = true
      geoData.error = ''
      const result = await getIPInfo()
      geoData.data = result
    } catch (_error) {
      const error = _error as Error
      geoData.error = error.message
    } finally {
      geoData.isLoading = false
    }
  }
  return { geoData, fetchIPInfo }
})
