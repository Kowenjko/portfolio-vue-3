<script setup lang="ts">
interface Props {
  show: boolean
  title: string
}

defineProps<Props>()
</script>
<template>
  <div class="tabs-title">
    <i class="tabs-title__icon uil uil-graduation-cap"></i>
    <h4 class="tabs-title__text" :class="!show && '!dark:text-blue-1 !text-blue-1'">
      {{ title }}
    </h4>
  </div>
</template>

<style lang="scss" scoped>
.tabs-title {
  @apply flex gap-4 cursor-pointer hover:opacity-80 transition-all;
  &__icon {
    @apply text-blue-1 text-2xl;
  }
  &__text {
    @apply dark:text-white text-2xl font-bold transition-all;
  }
}
</style>
