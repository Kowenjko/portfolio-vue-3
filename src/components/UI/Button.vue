<script setup lang="ts">
import Spinner from '@/components/icons/Spinner.vue'

interface Props {
  loading?: boolean
}

defineProps<Props>()
</script>
<template>
  <button class="button show-loading" type="button">
    <div v-if="$slots.icon && !loading">
      <slot name="icon"></slot>
    </div>
    <Spinner v-if="loading" />
    <slot />
  </button>
</template>

<style lang="scss">
.button {
  @apply relative flex justify-center items-center gap-2 transition-all duration-300  w-full bg-blue-1 rounded-lg text-white mt-4 py-3 hover:bg-blue-2 focus:outline-none;
}
</style>
