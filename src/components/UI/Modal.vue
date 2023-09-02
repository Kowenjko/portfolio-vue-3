<script setup lang="ts">
import CloseButton from './CloseButton.vue'

interface Props {
  open: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => emit('close')
</script>

<template>
  <div class="modal" :class="{ open }" @click.self="close">
    <CloseButton class="modal__close" @click="close" color="black" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.modal {
  @apply fixed top-0 left-0  dark:bg-modal-dark bg-modal-light transition-all duration-300 z-50 w-full h-screen opacity-0 scale-0 flex justify-center items-center;
  &.open {
    @apply opacity-100 scale-100;
  }
  &__close {
    @apply absolute top-4 right-4;
  }
}
</style>
