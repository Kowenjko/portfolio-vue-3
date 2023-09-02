<script setup lang="ts">
import TitleCategory from './TitleCategory.vue'

type Services = {
  title: string
  icon: string
  description: string
}

const services: Services[] = [
  {
    title: 'Application Development',
    icon: 'uil-layer-group',
    description: 'Standard designing, building, and implementing your applications.',
  },
  {
    title: 'Web Development',
    icon: 'uil-globe',
    description: 'I create and maintain websites, according to the chosen design.',
  },
  {
    title: 'Mobile Development',
    icon: 'uil-android-alt',
    description: 'I can quickly master technologies for developing mobile applications.',
  },
  {
    title: 'Web Scraping',
    icon: 'uil-servers',
    description: 'I can collect content and data from the internet then manipulate and analyze as needed.',
  },
]
</script>

<template>
  <TitleCategory category="Services" title="Specialized in" />

  <ul class="services">
    <li v-for="service in services" :key="service.title" class="services__item">
      <div class="services__item-icon">
        <i :class="`uil ${service.icon}`"></i>
      </div>
      <h5 class="services__item-title">{{ service.title }}</h5>
      <p class="services__item-description">{{ service.description }}</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.services {
  @apply flex flex-wrap md:flex-nowrap gap-6 py-14 md:py-24;
  &__item {
    @apply dark:bg-purple-2 w-full rounded-lg flex flex-col items-center bg-white mx-5 md:mx-0;
    &-icon {
      @apply flex justify-center items-center w-14 h-14 bg-blue-4 text-xl rounded-2xl text-blue-1 mt-12;
    }
    &-title {
      @apply dark:text-white py-6 font-medium;
    }
    &-description {
      @apply dark:text-white text-center px-3 text-sm pb-12;
    }
  }
}
</style>
