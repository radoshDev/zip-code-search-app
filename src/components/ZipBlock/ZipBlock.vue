<script setup lang="ts">
import SearchBox from './SearchBox.vue'
import EmptyIcon from '@/components/icons/EmptyIcon.vue'
import ErrorAlert from '@/components/ui/ErrorAlert.vue'
import Preloader from '@/components/ui/PreloaderCommon.vue'
import ShadowCard from '@/components/ui/ShadowCard.vue'
import ZipCard from './ZipCard.vue'
import { useZipStore } from '@/stores/zipStore'

const zipStore = useZipStore()
</script>

<template>
  <ShadowCard class="mb-10">
    <SearchBox />
    <Preloader v-if="zipStore.zipData.isLoading" />
    <ErrorAlert v-if="zipStore.zipData.error">{{
      zipStore.zipData.error
    }}</ErrorAlert>
    <EmptyIcon
      v-if="zipStore.zipData.data === null"
      width="100"
      class="mx-auto mt-4"
    />
    <ZipCard v-else />
  </ShadowCard>
</template>

<style scoped lang="scss"></style>
