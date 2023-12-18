<script lang="ts" setup>
import AuthView from '@/views/Auth-View.vue'
import { useAuthStore } from '@/stores/auth'
import ListView from '@/views/List-View.vue'

const authStore = useAuthStore()
</script>

<template>
  <AuthView v-if="!authStore.isAuth"></AuthView>
  <ListView v-if="authStore.isAuth"></ListView>
</template>

<style scoped></style>
