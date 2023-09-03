<script setup lang="ts">
import type { Project } from '@/interfaces/ProjectsInterface'

interface Props {
  project: Project
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'openModal', data: Project): void
}>()
</script>
<template>
  <div class="card" @click="emit('openModal', project)">
    <img class="card__image" :src="project.imageUrl" :alt="project.title" />
    <div class="card__bottom">
      <h5 class="card__bottom-title">{{ project.title }}</h5>
      <p class="card__bottom-category">{{ project.category }}</p>
      <ul class="card__bottom-keywords">
        <li v-for="keyword in project.keywords" :key="keyword" class="keyword" @click.stop="">
          {{ keyword }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply dark:bg-purple-3 border dark:border-purple-4 border-gray-2 overflow-hidden transition-all duration-300 rounded-lg shadow-xl mx-2  hover:-translate-x-1 hover:-translate-y-1 cursor-pointer;

  &__image {
    @apply rounded-t-lg object-cover h-56 w-full opacity-50 transition-all duration-300;
  }

  &:hover &__image {
    @apply opacity-100;
  }
  &__bottom {
    @apply p-6;
    &-title {
      @apply dark:text-white font-medium;
    }
    &-category {
      @apply text-gray-3 text-xs pt-1;
    }
    &-keywords {
      @apply flex gap-2 pt-4;
      .keyword {
        @apply transition-all duration-300 dark:text-white inline-block text-gray-3 text-xs rounded border border-gray-1 px-2 py-1 dark:hover:text-purple-2 hover:bg-gray-1;
      }
    }
  }
}
</style>
