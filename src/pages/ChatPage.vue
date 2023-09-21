<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import InputMessage from '@/modules/chat/components/InputMessage.vue'
import Button from '@/components/UI/Button.vue'
import InfoMessage from '@/modules/chat/components/InfoMessage.vue'
import OutputMessage from '@/modules/chat/components/OutputMessage.vue'

import { getAnswerGPT } from '@/api/services/ChatGPTService'
import { useAuth } from '@/composables/useAuth'

import { useAutoScrollChat } from '@/composables/useAutoScrollChat'
import type { IMessage } from '@/interfaces/Messages'
import { v4 as uuidv4 } from 'uuid'

const isGenerate = ref(false)

const { scrollChat } = useAutoScrollChat()
const { users, userInfo, userIndex, isAvailableMessages } = useAuth()

const answer =
  'ID of the model to use. See the model endpoint compatibility table for details on which models work with the Chat API.'

const noMessages = computed(() => userInfo.value?.messages?.length === 0)

const getMessageIndex = (id: string) => {
  if (userInfo.value?.messages) return userInfo.value.messages.findIndex((message: IMessage) => message.id === id)
  return -1
}
const clearMessages = () => (users.value[userIndex.value].messages = [])

const sendQuestion = async (quastion: string) => {
  if (isGenerate.value) return

  isGenerate.value = true

  const newMessage: IMessage = {
    id: uuidv4(),
    answer: '',
    quastion: quastion,
    isTyping: true,
  }
  users.value[userIndex.value].messages.push(newMessage)
  scrollChat()

  const index = getMessageIndex(newMessage.id)
  const messages = users.value[userIndex.value].messages

  const answerGpt = await getAnswerGPT(quastion)
  const answer = await answerGpt.answer

  if (answer && !noMessages.value) {
    users.value[userIndex.value].messages[index] = { ...messages[index], answer, isTyping: false }

    isGenerate.value = false
  } else {
    users.value[userIndex.value].messages.pop()
  }
  scrollChat()
  //   setTimeout(() => {
  //     const index = getMessageIndex(newMessage.id)

  //     const messages = users.value[userIndex.value].messages

  //     users.value[userIndex.value].messages[index] = { ...messages[index], answer, isTyping: false }
  //     isGenerate.value = false
  //     scrollChat()
  //   }, 2000)
}

watch(isAvailableMessages, () => window.scrollTo({ top: 0 }))
</script>

<template>
  <section class="chat">
    <div class="chat-wrapper container">
      <div class="messages">
        <!-- <div v-show="!noMessages && !isGenerate " class="messages__clear-button">
          <Button @click="clearMessages">Clear Chat</Button>
        </div> -->
        <InfoMessage v-if="noMessages" text="Please talk to me" />
        <InfoMessage v-if="isAvailableMessages" text="Sorry, your question limit has been reached" />
        <OutputMessage class="chat-output" v-if="userInfo?.messages" :messages="userInfo.messages" />
        <InputMessage
          v-if="!isAvailableMessages"
          :class="[isGenerate ? 'opacity-0' : 'opacity-100']"
          class="chat-input"
          @sendQuestion="sendQuestion"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.chat {
  @apply dark:bg-purple-4 h-full;
  &-wrapper {
    @apply dark:bg-purple-3 bg-blue-3 relative min-h-screen  gap-3 pb-24;
    .messages {
      @apply pt-32;
      &__clear-button {
        @apply absolute top-24 right-4 w-28;
      }
    }
  }
}
</style>
