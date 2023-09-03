<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Progress } from '@/interfaces/Progress'
import ProgressItem from './ProgressItem.vue'
import { getYearsAtWork } from '@/helpers/dates'

interface Props {
  progress: Progress
}

const props = defineProps<Props>()
const show = ref(props.progress.start)

const { years, months } = getYearsAtWork()

const toggle = () => (show.value = !show.value)

const positionArrow = computed(() => (show.value ? '' : '-rotate-180'))
const showDetail = computed(() => (show.value ? 'max-h-screen' : 'max-h-0'))
</script>

<template>
  <div class="accordion-progress">
    <div class="accordion-progress__wrapper" @click="toggle">
      <i :class="`icon uil ${progress.icon}`"></i>
      <div class="accordion-progress__wrapper-text">
        <h4 class="title">{{ progress.title }}</h4>
        <span class="description"> {{ years }} years {{ months }} months</span>
      </div>
      <i :class="`icon-arrow uil uil-angle-down ${positionArrow}`"> </i>
    </div>
    <ProgressItem :developers="progress.developers" :class="showDetail" />
  </div>
</template>

<style lang="scss" scoped>
.accordion-progress {
  @apply dark:bg-purple-2 w-full text-center bg-white px-4 rounded-xl py-4;
  &__wrapper {
    @apply flex items-center justify-center cursor-pointer gap-4;
    .icon {
      @apply text-blue-1 text-2xl;
    }
    .icon-arrow {
      @apply transition-all duration-300 text-blue-1 text-2xl;
    }
    &-text {
      @apply text-left;
      .title {
        @apply dark:text-white text-2xl font-bold;
      }
      .description {
        @apply text-sm text-gray-3;
      }
    }
  }
}
</style>
