<script setup lang="ts">
import { computed } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { auth, isAvailableMessages, countMessages, NUMBER_AVAILABLE_MESSAGES } = useAuth()

const authMarqueeText = computed(() =>
  isAvailableMessages.value
    ? `You have already used all the questions to ChatGPT`
    : `You have ${countMessages.value} questions left for ChatGPT`
)

const marqueeText = computed(() =>
  auth.value?.id
    ? authMarqueeText.value
    : `After authorization, you can ask ${NUMBER_AVAILABLE_MESSAGES} ChatGPT questions`
)
</script>

<template>
  <section class="marquee">
    <marquee direction="left" scrollamount="10">{{ marqueeText }} </marquee>
  </section>
</template>

<style lang="scss" scoped>
.marquee {
  @apply fixed z-[9] top-16 bg-blue-1 w-full text-center text-white font-bold text-sm md:text-base py-0.5 md:py-1 ;
}
</style>
