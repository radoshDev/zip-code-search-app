<script setup lang="ts">
import { useZipStore } from '@/stores/zipStore'
import TextField from '../ui/NumberField.vue'

const zisStore = useZipStore()
</script>

<template>
  <div class="flex mb-6">
    <TextField
      label="ZIP Code"
      v-model="zisStore.searchZip"
      placeholder="Enter a US Zip Code (e.g. 08057)"
      :maxLength="5"
    />
    <button
      class="btn blue inline-block ml-4"
      @click="zisStore.fetchZipData"
      :disabled="zisStore.searchZip.length !== 5"
    >
      Find
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
