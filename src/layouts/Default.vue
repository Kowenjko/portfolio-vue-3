<script setup lang="ts">
import Header from '@/components/sections/Header.vue'
import MarqueeInfo from '@/components/sections/MarqueeInfo.vue'
</script>
<template>
  <Header />
  <MarqueeInfo />
  <main>
    <slot />
  </main>
</template>
