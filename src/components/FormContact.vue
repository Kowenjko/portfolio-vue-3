<script setup>
import { ref, computed, reactive } from 'vue'

import Button from './UI/Button.vue'
import TextField from './UI/TextField.vue'
import TextArea from './UI/TextArea.vue'
import StatusSendMessage from './UI/StatusSendMessage.vue'

import useVuelidate from '@vuelidate/core'
import { helpers, minLength, email, required } from '@vuelidate/validators'
import { sendEmail } from '@/api/services/EmailJSService'
import { sendTelegram } from '@/api/services/TelegramService'

const loadingEmail = ref(false)
const loadingTelegram = ref(false)
const statusSend = ref('')

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const rules = computed(() => ({
  name: {
    minLength: helpers.withMessage(`Minimum length: 3 characters`, minLength(3)),
    required,
  },
  email: {
    email: helpers.withMessage('You have entered an invalid email', email),
    required,
  },
  message: {
    required,
  },
}))

const v = useVuelidate(rules, form)

const checkForm = () => {
  v.value.$touch()
  return v.value.$error
}

const clearForm = () => {
  form.name = ''
  form.email = ''
  form.message = ''
  v.value.$reset()
  setTimeout(() => (statusSend.value = ''), 4000)
}

const onSendEmail = async () => {
  if (checkForm()) return
  loadingEmail.value = true
  statusSend.value = await sendEmail('sendEmail', form)
  loadingEmail.value = false
  clearForm()
}

const onSendTelegram = async () => {
  if (checkForm()) return
  loadingTelegram.value = true
  statusSend.value = await sendTelegram(form)
  loadingTelegram.value = false
  clearForm()
}
</script>

<template>
  <div class="forms">
    <StatusSendMessage :statusSend="statusSend" />
    <TextField
      label="Your name"
      name="name"
      placeholder="Input your name"
      v-model="v.name.$model"
      :error="v.name.$errors"
    />
    <TextField
      label="Your email"
      name="email"
      placeholder="Input your email"
      v-model="v.email.$model"
      :error="v.email.$errors"
    />
    <TextArea
      label="Your message"
      placeholder="Input your message"
      v-model="v.message.$model"
      :error="v.message.$errors"
    />
    <div class="flex gap-2">
      <Button :loading="loadingEmail" @click.prev="onSendEmail">
        <template #icon>
          <i class="uil uil-envelope-alt"></i>
        </template>
        Send Message
      </Button>
      <Button :loading="loadingTelegram" @click="onSendTelegram">
        <template #icon>
          <i class="uil uil-telegram-alt"></i>
        </template>
        Send Message
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.forms {
  @apply flex flex-col gap-8  relative;
}
</style>
