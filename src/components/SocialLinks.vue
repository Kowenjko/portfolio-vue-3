<script setup lang="ts">
const socialLinks = [
  { icon: 'uil-linkedin-alt', url: 'https://www.linkedin.com/in/kovenko' },
  { icon: 'uil-github-alt', url: 'https://github.com/kowenjko' },
]
</script>

<template>
  <ul class="links">
    <li v-for="(link, index) in socialLinks" :key="index">
      <a class="links__item" :href="link.url" target="_blank">
        <i :class="`icon uil ${link.icon}`"></i>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.links {
  @apply flex gap-8;
  &__item {
    @apply text-xl transition-all duration-300 dark:text-white;
    .icon {
      @apply hover:text-blue-1 transition-all;
    }
  }
}
</style>
