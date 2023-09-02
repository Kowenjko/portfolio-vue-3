<script setup lang="ts">
import { QualificationDetail } from '@/interfaces/QualificationInterface'

interface Props {
  item: QualificationDetail
  isShow: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="lines">
    <div v-if="isShow" class="lines-item">
      <h5 class="lines-item__title">{{ item.title }}</h5>
      <span class="lines-item__city"> {{ item.city }} </span>
      <div class="lines-item__date">
        <i class="uil uil-calendar-alt pr-2"></i>
        {{ item.date }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lines {
  @apply w-[48%];
  &-item {
    @apply pr-[2%] dark:text-white;
    &__title {
      @apply font-medium;
    }
    &__city {
      @apply text-sm;
    }
    &__date {
      @apply text-gray-3 text-sm;
    }
  }
}
</style>
