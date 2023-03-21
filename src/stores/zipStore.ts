import { getZipData } from '@/api/getZipData'
import type { ZipData } from '@/types/zip'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useZipStore = defineStore('zip', () => {
  const searchZip = ref('')
  const zipData = reactive({
    isLoading: false,
    error: '',
    data: null as ZipData | null,
  })

  async function fetchZipData() {
    try {
      zipData.isLoading = true
      zipData.error = ''
      const result = await getZipData(searchZip.value)
      zipData.data = result
    } catch (_error) {
      const error = _error as Error

      zipData.error = error.message
      zipData.data = null
    } finally {
      zipData.isLoading = false
    }
  }
  return { fetchZipData, zipData, searchZip }
})
