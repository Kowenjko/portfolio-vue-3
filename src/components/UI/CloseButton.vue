<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { useDark } from '@vueuse/core'

type TColor = 'black' | 'white'

interface Props {
  color: TColor
}

const props = withDefaults(defineProps<Props>(), { color: 'black' })

const isDark = useDark()

const darkColor = props.color === 'white' && !isDark.value ? 'black' : 'white'
</script>

<template>
  <button type="button">
    <XMarkIcon
      :class="`fill-${color} dark:fill-${darkColor}`"
      class="h-7 w-7 hover:fill-blue-1 hover:dark:fill-blue-1 transition-all duration-300"
    />
  </button>
</template>
