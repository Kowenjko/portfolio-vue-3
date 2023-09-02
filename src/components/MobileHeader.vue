<script setup lang="ts">
import { ref } from 'vue'
import SwitchTheme from './SwitchTheme.vue'
import OpenSidebarButton from '@/components/UI/OpenSidebarButton.vue'
import CloseButton from '@/components/UI/CloseButton.vue'

const showSidebar = ref(false)
const openSidebar = () => (showSidebar.value = true)
const closeSidebar = () => (showSidebar.value = false)

const emit = defineEmits<{
  (e: 'openLogIn'): void
}>()

const openLogIn = () => emit('openLogIn')
</script>

<template>
  <OpenSidebarButton class="flex md:hidden" @click="openSidebar" />
  <div class="sidebar" :class="[showSidebar ? ' w-full' : ' w-0']" @click.self="closeSidebar">
    <div class="sidebar__wrapper" :class="[showSidebar ? ' w-[60%]' : ' w-0']">
      <div class="sidebar__wrapper-top">
        <SwitchTheme />
        <button @click="openLogIn" class="logo">Log in</button>
        <CloseButton @click="closeSidebar" color="black"/>
      </div>

      <div class="sidebar__wrapper-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  @apply fixed z-10 top-0 right-0 dark:bg-modal-dark bg-modal-light h-screen;
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
