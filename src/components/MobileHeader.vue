<script setup lang="ts">
import { ref } from 'vue'

import type { IFormAuth } from '@/interfaces/Form'

import SwitchTheme from './SwitchTheme.vue'
import OpenSidebarButton from '@/components/UI/OpenSidebarButton.vue'
import CloseButton from '@/components/UI/CloseButton.vue'
import AuthAction from '@/components/AuthAction.vue'

const showSidebar = ref(false)
const openSidebar = () => (showSidebar.value = true)
const closeSidebar = () => (showSidebar.value = false)

interface Props {
  userInfo?: IFormAuth
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'openLogIn'): void
  (e: 'logOut'): void
}>()

const openLogIn = () => emit('openLogIn')
const logOut = () => emit('logOut')
</script>

<template>
  <OpenSidebarButton class="flex md:hidden" @click="openSidebar" />
  <div class="sidebar" :class="[showSidebar ? ' w-full' : ' w-0']" @click.self="closeSidebar">
    <div class="sidebar__wrapper" :class="[showSidebar ? ' w-[60%]' : ' w-0']">
      <div class="sidebar__wrapper-top">
        <SwitchTheme />
        <AuthAction :userInfo="userInfo" @log-out="logOut" @open-log-in="openLogIn" />
        <CloseButton @click="closeSidebar" color="black" />
      </div>

      <div class="sidebar__wrapper-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  @apply fixed z-20 top-0 right-0 dark:bg-modal-dark bg-modal-light h-screen;
  &__wrapper {
    @apply dark:bg-purple-3 transition-all duration-700 absolute right-0 bg-white h-screen;
    &-top {
      @apply flex w-full justify-between items-center py-5 px-6;
      .logo {
        @apply font-bold dark:text-white hover:text-blue-1 dark:hover:text-blue-1  transition-all;
      }
    }
    &-content {
      @apply w-full px-6;
    }
  }
}
</style>
