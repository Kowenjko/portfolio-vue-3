<script setup lang="ts">
import { Developer } from '@/interfaces/Progress'

interface Props {
  developers: Developer[]
}

defineProps<Props>()
</script>

<template>
  <div class="progress">
    <template v-for="developer in developers" :key="developer.name">
      <div class="progress__left">
        <h5 class="progress__left-title">{{ developer.name }}</h5>
        <span class="dark:text-white">{{ developer.progress }} %</span>
      </div>
      <div class="progress__right">
        <span class="progress__right-line" :style="`width:${developer.progress}%`"> </span>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.progress {
  @apply transition-all duration-300 overflow-hidden pb-5;
  &__left {
    @apply flex justify-between pt-4;
    &-title {
      @apply dark:text-white font-medium;
    }
  }
  &__right {
    @apply w-full rounded-lg h-1 bg-blue-4 relative mb-2;
    &-line {
      @apply absolute left-0 rounded-lg h-1 bg-blue-1;
    }
  }
}
</style>
