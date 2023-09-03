<script setup lang="ts">
const name = 'Resume'
</script>

<template>
  <a
    href="/resume.pdf"
    class="transition-all duration-300 rounded-lg px-5 py-2 bg-blue-1 text-white hover:bg-blue-2 cursor-pointer"
    target="_blank"
  >
    {{ name }}
  </a>
</template>
