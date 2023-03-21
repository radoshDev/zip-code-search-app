<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import ErrorAlert from '../ui/ErrorAlert.vue'
import PreloaderCommon from '../ui/PreloaderCommon.vue'
import ShadowCard from '../ui/ShadowCard.vue'
import UserInfoTable from './UserInfoTable.vue'

const userStore = useUserStore()
</script>

<template>
  <ShadowCard class="mb-6">
    <button
      class="btn blue mb-4"
      @click="userStore.fetchIPInfo"
      :disabled="!!userStore.geoData.data"
    >
      IP Lookup
    </button>
    <PreloaderCommon v-if="userStore.geoData.isLoading" />
    <ErrorAlert v-else-if="userStore.geoData.error">{{
      userStore.geoData.error
    }}</ErrorAlert>
    <UserInfoTable
      v-else-if="userStore.geoData.data"
      :userInfo="userStore.geoData.data"
    />
  </ShadowCard>
</template>

<style scoped lang="scss"></style>
