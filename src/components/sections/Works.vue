<script setup lang="ts">
import TitleCategory from '@/components/TitleCategory.vue'
import Slides from '@/components/UI/Slides.vue'
import type { Project } from '@/interfaces/ProjectsInterface'
const workProjects: Project[] = [
  {
    title: 'Jounce',
    isGit: false,
    href: 'https://app.jounce.ai/',
    keywords: ['Vue', 'OpenAI', 'Tailwind', 'Firebase'],
    category: 'AI marketing hub',
    description: 'AI copywriting, artwork, and chat for marketing teams',
    imageUrl: '/webp/jounce-2.webp',
  },
  {
    title: 'Jounce',
    isGit: false,
    href: '#',
    keywords: ['Vue', 'Vite', 'Tailwind', 'Firebase'],
    category: 'E-Mail System',
    description: 'Newsletter System with Email and Flow builder.',
    imageUrl: '/webp/jounce.webp',
  },
  {
    title: 'NewPet',
    isGit: false,
    href: 'https://pfotenkompass.fressnapf.de/',
    keywords: ['Nuxt', 'Vuetify'],
    category: 'Pet shelter service',
    description: 'Developed the frontend based on the design, connecting to the backend CRUD, JWT authorization.',
    imageUrl: '/webp/newpet.webp',
  },
  {
    title: 'Bitburger',
    isGit: false,
    href: '#',
    keywords: ['Shopware', 'Vue'],
    category: 'Online-Shop',
    description: 'Made design changes, developed functionality.',
    imageUrl: '/webp/pitburger.webp',
  },
  {
    title: 'Mylo',
    isGit: false,
    href: 'https://mylo.de/pages/suewag-ebike-abo',
    keywords: ['Shopify'],
    category: 'Online-Shop',
    description: 'Creation of individual sections by design',
    imageUrl: '/webp/mylo.webp',
  },
  {
    title: 'Planted',
    isGit: false,
    href: 'https://uk.shop.eatplanted.com/',
    keywords: ['Shopify'],
    category: 'Online-Shop',
    description: 'Made changes to the frontend design.',
    imageUrl: '/webp/planted.webp',
  },
  {
    title: 'Purenature',
    isGit: false,
    href: 'https://www.purenature-shop.de/',
    keywords: ['Shopify'],
    category: 'Online-Shop',
    description: 'Made changes to the frontend design.',
    imageUrl: '/webp/purenature.webp',
  },
]
</script>

<template>
  <section id="portfolios" class="works anchor">
    <div class="works__wrapper container">
      <div class="works__wrapper-title">
        <div class="w-full">
          <TitleCategory category="My Works" title="Portfolios" />
        </div>
      </div>
      <Slides :projects="workProjects" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.works {
  @apply dark:bg-purple-2;
  &__wrapper {
    @apply py-14 md:py-24;
    &-title {
      @apply flex justify-between items-center mx-5 md:mx-0;
    }
  }
}
</style>
