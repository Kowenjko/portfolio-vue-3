<script setup lang="ts">
import Dots from '@/components/UI/Dots.vue'
import CopyButton from '@/components/UI/CopyButton.vue'

const emit = defineEmits(['copyText'])

interface Props {
  message: string
  role: string
  isTyping?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="chat-message">
    <img width="35" class="avatar" :src="`${role}.png`" alt="avatar" />
    <div :class="`chat-message__text ${role}`">
      <Dots class="p-4" v-if="isTyping" />
      <p v-else>{{ message }}</p>
    </div>
    <CopyButton @click="emit('copyText')" v-if="role === 'chat-gpt' && !isTyping" />
  </div>
</template>

<style lang="scss" scoped>
.chat-message {
  @apply flex gap-3 p-3 cursor-pointer;
  &:hover {
    .button-copy {
      @apply opacity-100 scale-100;
    }
  }
  .avatar {
    @apply h-9;
  }
  &__text {
    @apply rounded-l-2xl rounded-t-2xl max-w-[500px];
    &.user {
      @apply bg-white dark:bg-purple-4;
    }
    &.chat-gpt {
      @apply bg-blue-4 dark:bg-purple-2;
    }
    p {
      text-wrap: balance;
      // max-inline-size: 100ch;
      // text-align: center;
      @apply dark:text-white p-3;
    }
  }
}
</style>
