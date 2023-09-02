<script setup lang="ts">
import SocialLinks from '@/components/SocialLinks.vue'

const currentYear = new Date().getFullYear()
const nextYear = new Date().getFullYear() + 1
</script>

<template>
  <footer class="footer">
    <SocialLinks />
    <p class="footer__date">&copy; {{ currentYear }} - {{ nextYear }} @Kovenko</p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply dark:bg-purple-2 px-2 py-12 flex flex-col items-center justify-center;
  &__date {
    @apply dark:text-white text-sm mt-4;
  }
}
</style>
