<script setup lang="ts">
import { useZipStore } from '@/stores/zipStore'

const zipStore = useZipStore()
</script>

<template>
  <div class="text-start">
    <div class="text-blue-600 text-5xl">
      {{ zipStore.zipData.data?.postal_code }}
    </div>
    <div class="text-blue-600 text-4xl my-3">
      {{ zipStore.zipData.data?.city }}, {{ zipStore.zipData.data?.state_code }}
    </div>
    <div class="text-gray-500 text-xl">
      Lat/Long:{{ zipStore.zipData.data?.latitude }},
      {{ zipStore.zipData.data?.longitude }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
