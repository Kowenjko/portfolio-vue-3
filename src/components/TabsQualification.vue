<script setup lang="ts">
import { ref } from 'vue'
import TabsQualificationTitle from './TabsQualificationTitle.vue'
import TabsTimeLines from './TabsTimeLines.vue'
import { Qualification } from '@/interfaces/QualificationInterface'

interface Props {
  qualification: Qualification
}

defineProps<Props>()

const show = ref(false)
</script>

<template>
  <div class="tabs-qualification">
    <div class="tabs-qualification__title">
      <TabsQualificationTitle :show="show" title="Education" @click="show = false" />
      <TabsQualificationTitle :show="!show" title="Work" @click="show = true" />
    </div>

    <div class="tabs-qualification__lines">
      <TabsTimeLines :class="show && 'opacity-0'" :lists="qualification.educations" />
      <TabsTimeLines :class="!show && 'opacity-0'" :lists="qualification.works" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabs-qualification {
  @apply mx-5 md:mx-0;
  &__title {
    @apply flex justify-around md:gap-24 pb-10;
  }
  &__lines {
    @apply relative pb-32;
  }
}
</style>
