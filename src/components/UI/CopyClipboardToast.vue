<script setup lang="ts">
interface Props {
  text: string
  toastOpen: boolean
}
defineProps<Props>()
</script>

<template>
  <div :class="`toast ${toastOpen && 'active'} ${!toastOpen && 'invisible'}`">
    <i class="uil uil-copy text-xl text-white"></i>
    <span class="toast__text">{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped>
.toast {
  @apply bg-blue-1  py-1.5 px-2.5 rounded-lg flex items-center gap-1 min-w-[8.5rem] max-w-[12.875rem] w-max justify-between fixed bottom-4 -right-96 transition-all z-[60];

  &.active {
    @apply right-4;
  }

  &__text {
    @apply flex-1  text-sm text-white  font-medium;
  }
}
</style>
