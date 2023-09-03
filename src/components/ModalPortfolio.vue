<script setup lang="ts">
import { ref } from 'vue'
import Modal from './UI/Modal.vue'
import type { Project } from '@/interfaces/ProjectsInterface'

interface Props {
  project: Project
}

defineProps<Props>()

const isOpen = ref(false)

const showModal = () => (isOpen.value = true)
const closeModal = () => (isOpen.value = false)

defineExpose({ showModal, closeModal })
</script>
<template>
  <Modal :open="isOpen" @close="closeModal">
    <div class="modal__wrapper">
      <img class="modal__wrapper-image" :src="project?.imageUrl" :alt="project?.title" />
      <div class="p-6">
        <div class="modal__wrapper-info">
          <div>
            <h5 class="title">{{ project?.title }}</h5>
            <p class="category">{{ project?.category }}</p>
          </div>
          <a :href="project?.href" class="link" target="_blank">
            <i v-if="project?.isGit" class="uil uil-github text-3xl"></i>
            <span v-else>{{ project?.href }}</span>
          </a>
        </div>

        <ul class="modal__wrapper-keywords">
          <li v-for="keyword in project.keywords" :key="keyword" class="keyword">
            {{ keyword }}
          </li>
        </ul>
        <p class="modal__wrapper-description">{{ project?.description }}</p>
      </div>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.modal__wrapper {
  @apply dark:bg-purple-3 bg-white border dark:border-purple-4 border-gray-2 rounded-lg max-w-[800px] shadow-2xl shadow-purple-3;
  &-image {
    @apply rounded-t-lg object-cover w-full;
  }
  &-info {
    @apply flex justify-between items-center;
    .title {
      @apply dark:text-white font-medium;
    }
    .category {
      @apply text-gray-3 text-xs pt-1;
    }
    .link {
      @apply dark:text-white text-xs dark:hover:text-blue-1 hover:text-blue-1 transition-all duration-300;
    }
  }
  &-keywords {
    @apply flex gap-4 py-4;
    .keyword {
      @apply inline-block dark:text-white text-gray-3 text-xs rounded border border-gray-1 px-2 py-1;
    }
  }
  &-description {
    @apply dark:text-white text-sm;
  }
}
</style>
