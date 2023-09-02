<script setup lang="ts">
import SunIcon from './icons/SunIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="switch-theme">
    <input type="checkbox" id="darkmode-toggle" :checked="isDark" @change="toggleDark()" class="switch-input" />
    <label for="darkmode-toggle" class="switch-label">
      <SunIcon class="sun" />
      <MoonIcon class="moon" />
    </label>
  </div>
</template>

<style lang="scss" scoped>
.switch-theme {
  @apply transition-all duration-300 flex items-center justify-between mr-8 cursor-pointer;
  .switch-label {
    @apply w-14 h-[30px] relative block bg-gray-1 active:after:w-9  rounded-full dark:bg-purple-3 dark:after:left-[50px] dark:after:-translate-x-[100%] dark:after:bg-blue-1 cursor-pointer transition-all duration-300;
    &:after {
      content: '';
      @apply w-6 h-6 absolute top-0.5 left-1 bg-white rounded-full shadow-md transition-all duration-300;
    }
    & svg {
      @apply absolute top-1 z-10 transition-all duration-300;
    }
    & .sun {
      @apply left-2 w-4 opacity-100 stroke-yellow;
    }
    & .moon {
      @apply top-1.5 left-2 w-4 opacity-0  stroke-white;
    }
  }

  .switch-input {
    @apply w-0 h-0 invisible;
    &:checked + .switch-label {
      @apply bg-purple-4;
      &:after {
        @apply left-[50px] -translate-x-full bg-blue-1;
      }
      & .sun {
        @apply opacity-0 left-8;
      }
      & .moon {
        @apply opacity-100 left-[31px];
      }
    }
  }
}
</style>
