<script setup lang="ts">
interface Props {
  disabledNext: boolean
  disabledPrev: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'prev'): void
  (e: 'next'): void
}>()
</script>

<template>
  <div class="wrapper">
    <button class="wrapper__button" :class="{ disabled: disabledPrev }" @click="emit('prev')" type="button">
      <i class="uil uil-angle-left-b"></i>
    </button>
    <button class="wrapper__button" :class="{ disabled: disabledNext }" @click="emit('next')" type="button">
      <i class="uil uil-angle-right-b"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  @apply absolute w-full -top-16 flex justify-end gap-3;
  &__button {
    @apply transition-all duration-300 w-10 h-10 border border-purple-1 dark:border-purple-4 rounded-xl flex justify-center  items-center text-[#237BFF] text-xl hover:bg-blue-5 hover:text-white;
    &.disabled {
      @apply transition-all duration-300  bg-gray-1 dark:bg-purple-4  text-purple-1 dark:text-purple-3  cursor-default;
    }
  }
}
</style>
