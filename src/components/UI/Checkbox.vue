<script setup lang="ts">
interface Props {
  change: boolean
  label: string
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:change', event: boolean): void
}>()

const changeInput = (event: Event) => {
  emit('update:change', (event.target as HTMLInputElement).checked)
}
</script>

<template>
  <div class="checkbox-wrapper">
    <input id="checked-checkbox" type="checkbox" :checked="change" @change="changeInput" class="checkbox-input" />
    <label for="checked-checkbox" class="checkbox-label">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
.checkbox {
  &-wrapper {
    @apply flex items-center;
  }
  &-input {
    @apply cursor-pointer w-4 h-4 text-blue-1 bg-gray-1 border-white rounded focus:ring-blue-5 dark:focus:ring-blue-5 dark:ring-offset-blue-5 focus:ring-2 dark:bg-blue-1 dark:border-blue-1;
  }
  &-label {
    @apply cursor-pointer ml-2 text-sm font-medium text-white dark:text-white;
  }
}
</style>
