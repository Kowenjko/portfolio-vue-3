<script setup lang="ts">
import TitleCategory from '@/components/TitleCategory.vue'
import AccordionProgress from '@/components/AccordionProgress.vue'
import { Progress } from '@/interfaces/Progress'

const progressFrontent: Progress = {
  start: true,
  title: 'Frontent developer',
  icon: 'uil-brackets-curly',
  developers: [
    { name: 'HTML', progress: 90 },
    { name: 'CSS', progress: 90 },
    { name: 'JavaScript', progress: 80 },
    { name: 'React', progress: 60 },
    { name: 'Vue 3', progress: 85 },
  ],
}
const progressBackend: Progress = {
  start: false,
  title: 'Backend developer',
  icon: 'uil-server-network',
  developers: [
    { name: 'Python', progress: 60 },
    { name: 'Node', progress: 40 },
    { name: 'Deno', progress: 40 },
    { name: 'Firebase', progress: 70 },
    { name: 'PostgresSQL', progress: 75 },
  ],
}
</script>

<template>
  <section id="skills" class="anchor skills">
    <div class="skills__wrapper container">
      <TitleCategory category="Skills" title="My technical level" />
      <div class="skills__wrapper-accordion">
        <AccordionProgress :progress="progressFrontent" />
        <AccordionProgress :progress="progressBackend" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  @apply dark:bg-purple-2;
  &__wrapper {
    @apply py-14 md:py-24;

    &-accordion {
      @apply flex flex-col md:flex-row justify-center gap-0 md:gap-24 mx-5 md:mx-0;
    }
  }
}
</style>
