<script setup>
defineProps({
  text: { type: String },
})
</script>

<template>
  <div class="no-message">
    <img width="35" class="avatar" src="/public/chat-gpt.png" alt="avatar" />
    <h2 class="title">{{ text }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.no-message {
  @apply flex justify-center items-center gap-5;
  .title {
    @apply dark:text-white text-xl font-bold;
  }
}
</style>
