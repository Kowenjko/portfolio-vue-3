<script setup lang="ts">
import { ref, computed } from 'vue'

import InputMessage from '@/modules/chat/components/InputMessage.vue'
import Button from '@/components/UI/Button.vue'
import NoMessage from '@/modules/chat/components/NoMessage.vue'
import OutputMessage from '@/modules/chat/components/OutputMessage.vue'

import { getAnswerGPT } from '@/api/services/ChatGPTService'
import { useAuth } from '@/composables/useAuth'

import { useAutoScrollChat } from '@/composables/useAutoScrollChat'
import { IMessage } from '@/interfaces/Messages'
import { v4 as uuidv4 } from 'uuid'

const isGenerate = ref(false)

const { scrollChat } = useAutoScrollChat()
const { users, userInfo, userIndex } = useAuth()

const answer =
  'ID of the model to use. See the model endpoint compatibility table for details on which models work with the Chat API.'

const noMessages = computed(() => userInfo.value?.messages?.length === 0)

const getMessageIndex = (id: string) => userInfo.value?.messages.findIndex((message: IMessage) => message.id === id)
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

  // const answer = await getAnswerGPT(quastion)

  // if (answer && !noMessages.value) {
  //   messages.value.at(-1).answer = answerGPT.answer
  //   messages.value.at(-1).isTyping = false
  // } else {
  //   messages.value.pop()
  // }

  setTimeout(() => {
    const index = getMessageIndex(newMessage.id)

    const messages = users.value[userIndex.value].messages

    users.value[userIndex.value].messages[index] = { ...messages[index], answer, isTyping: false }
    isGenerate.value = false
    scrollChat()
  }, 2000)
}
</script>

<template>
  <section class="chat">
    <div class="chat-wrapper container">
      <div class="messages">
        <div v-show="!noMessages && !isGenerate" class="messages__clear-button">
          <Button @click="clearMessages">Clear Chat</Button>
        </div>
        <NoMessage v-if="noMessages" />
        <OutputMessage class="chat-output" v-else :messages="userInfo?.messages" />
        <InputMessage
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
      @apply pt-28;
      &__clear-button {
        @apply absolute top-16 right-4 w-28;
      }
    }
  }
}
</style>
