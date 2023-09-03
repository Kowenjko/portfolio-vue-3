<script setup lang="ts">
import TabsTimeLinesItem from './TabsTimeLinesItem.vue'
import TimeLines from './TimeLines.vue'
import type { QualificationDetail } from '@/interfaces/QualificationInterface'

interface Props {
  lists: QualificationDetail[]
}

defineProps<Props>()
</script>

<template>
  <div class="time-wrapper">
    <div class="flex" v-for="(item, index) in lists" :key="index">
      <TabsTimeLinesItem class="flex justify-end" :is-show="index % 2 === 0" :item="item" />
      <TimeLines :is-show="lists.length > index" />
      <TabsTimeLinesItem :is-show="index % 2 !== 0" :item="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.time-wrapper {
  @apply transition-all duration-300 absolute top-0 left-0 w-full;
}
</style>
