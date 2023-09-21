<script setup lang="ts">
import type { IFormAuth } from '@/interfaces/Form'

interface Props {
  userInfo?: IFormAuth
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'logOut'): void
  (e: 'openLogIn'): void
}>()

const logOut = () => emit('logOut')
const openLogIn = () => emit('openLogIn')
</script>

<template>
  <div v-if="userInfo?.id">
    <span class="dark:text-white">{{ userInfo.logIn }} | </span>
    <button class="logo" @click="logOut">Log out</button>
  </div>
  <button v-else @click="openLogIn" class="logo">Log in</button>
</template>

<style lang="scss" scoped>
.logo {
  @apply font-bold dark:text-white hover:text-blue-1 dark:hover:text-blue-1  transition-all;
}
</style>
