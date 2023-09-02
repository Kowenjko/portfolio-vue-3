<script setup lang="ts">
import { MinusIcon } from '@heroicons/vue/24/solid'

interface Props {
  title?: string
  category?: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-center gap-2" v-if="category">
    <MinusIcon class="fill-gray-3 h-5 w-4" />
    <span class="text-gray-3 tracking-[7.5px] uppercase text-xs"> {{ category }} </span>
  </div>
  <h3 v-if="title" class="dark:text-white text-center text-4xl font-bold py-3">{{ title }}</h3>
</template>
