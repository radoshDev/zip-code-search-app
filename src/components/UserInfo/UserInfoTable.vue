<script setup lang="ts">
import type { GeolocationData } from '@/types'
import { ref, onMounted } from 'vue'

defineProps<{ userInfo: GeolocationData }>()
const userAgent = ref('')
onMounted(() => {
  userAgent.value = window.navigator.userAgent
})
</script>

<template>
  <table class="user-info">
    <tr>
      <th>IP Address</th>
      <td>{{ userInfo.ip_address }}</td>
    </tr>
    <tr>
      <th>Internet Provider</th>
      <td>{{ userInfo.connection.autonomous_system_organization }}</td>
    </tr>
    <tr>
      <th>City</th>
      <td>{{ userInfo.city }}</td>
    </tr>
    <tr>
      <th>Region</th>
      <td>{{ userInfo.region }}</td>
    </tr>
    <tr>
      <th>Country</th>
      <td>
        <div class="flex gap-2">
          {{ userInfo.country }} <img width="25" :src="userInfo.flag.svg" />
        </div>
      </td>
    </tr>
    <tr>
      <th>User Agent</th>
      <td>{{ userAgent }}</td>
    </tr>
  </table>
</template>

<style scoped>
.user-info {
  margin-top: 2rem;
  margin-inline: auto;
}
.user-info th,
td {
  border-bottom: 1px solid gray;
  padding: 1rem;
  text-align: start;
}
</style>
