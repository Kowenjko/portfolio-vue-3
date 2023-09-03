<script setup lang="ts">
import ChatMessege from './ChatMessege.vue'
import CopyClipboardToast from '@/components/UI/CopyClipboardToast.vue'

import type { IMessage } from '@/interfaces/Messages'
import { useClipboard } from '@vueuse/core'
const { copy, copied } = useClipboard()

interface Props {
  messages: IMessage[]
}

defineProps<Props>()
</script>

<template>
  <div>
    <template v-for="message in messages" :key="message.id">
      <ChatMessege role="user" :message="message.quastion" />
      <ChatMessege
        @copyText="copy(message.answer)"
        class="!pl-16"
        role="chat-gpt"
        :is-typing="message.isTyping"
        :message="message.answer"
      />
    </template>
    <CopyClipboardToast :toastOpen="copied" text="copy" />
  </div>
</template>

<style scoped></style>
