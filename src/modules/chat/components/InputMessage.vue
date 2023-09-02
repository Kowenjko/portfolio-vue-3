<script setup lang="ts">
import { ref } from 'vue'

import TextArea from '@/components/UI/TextArea.vue'
import EnterButton from '@/components/UI/EnterButton.vue'

const emit = defineEmits<{
  (e: 'sendQuestion', quastion: string): void
}>()

const quastion = ref<string>('')

const sendQuestion = () => {
  if (!quastion.value) return

  emit('sendQuestion', quastion.value)
  quastion.value = ''
}
</script>

<template>
  <div class="fixed bottom-0 container px-3 transition-all">
    <div class="relative">
      <TextArea
        placeholder="Input your message"
        v-model="quastion"
        @keydown.enter.prevent="sendQuestion"
        height="56px"
      />
      <EnterButton @click="sendQuestion" />
    </div>
  </div>
</template>
