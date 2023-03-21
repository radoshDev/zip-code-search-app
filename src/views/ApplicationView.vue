<script setup lang="ts">
import UserInfo from '@/components/UserInfo/UserInfo.vue'
import ZipBlock from '@/components/ZipBlock/ZipBlock.vue'
</script>

<template>
  <div>
    <RouterLink to="/" class="btn indigo inline-block mb-6">To Main</RouterLink>
    <ZipBlock />
    <UserInfo />
  </div>
</template>
