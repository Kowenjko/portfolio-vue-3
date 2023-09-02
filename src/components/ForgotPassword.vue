<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import Modal from './UI/Modal.vue'
import CloseButton from './UI/CloseButton.vue'
import TextField from './UI/TextField.vue'
import Button from './UI/Button.vue'

import { helpers, email, required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { IFormAuth } from '@/interfaces/Form'

const isOpen = ref(false)

defineProps({
  incorrect: { type: String, default: '' },
  status: { type: String, default: '' },
  isLoading: { type: Boolean, default: false },
})

const emit = defineEmits<{
  (e: 'recoverPassword', form: IFormAuth): void
}>()

const form: IFormAuth = reactive({
  logIn: '',
  password: '',
  confirmPassword: '',
  isRemember: false,
  domainUrl: location.origin,
  showLogIn: 'none',
  showRegister: 'none',
  showForgot: 'block',
})

const rules = computed(() => ({
  logIn: {
    email: helpers.withMessage(`You have entered an invalid email`, email),
    required,
  },
}))

const v = useVuelidate(rules, form)

const checkForm = () => {
  v.value.$touch()
  return v.value.$error
}

const showModal = () => (isOpen.value = true)
const closeModal = () => (isOpen.value = false)

const recoverPassword = () => {
  if (checkForm()) return

  emit('recoverPassword', form)
}

defineExpose({ showModal, closeModal })
</script>

<template>
  <Modal :open="isOpen" @close="closeModal">
    <div class="card">
      <CloseButton class="absolute right-4" color="white" @click="closeModal" />
      <h2 class="title">Recover Password</h2>
      <p v-if="incorrect" class="incorrect">
        {{ incorrect }}
      </p>
      <p v-if="status === 'OK'" class="status-ok">Go to your mail to continue password recovery</p>
      <TextField
        class="my-8"
        v-model="v.logIn.$model"
        :error="v.logIn.$errors"
        name="loginRecover"
        placeholder="Enter your email"
        label="Your email"
      />

      <Button :loading="isLoading" @click="recoverPassword">Recover Password</Button>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.card {
  @apply relative w-[350px] bg-purple-4 rounded-2xl px-4 py-6;
  .title {
    @apply text-center pt-4 text-xl font-bold text-white;
  }
  .incorrect {
    @apply bg-red-4 text-red-2 text-sm rounded-lg px-5 py-2 mt-2 w-full;
  }
  .status-ok {
    @apply bg-gray-1 text-green-1 text-sm text-center rounded-lg py-2 px-5 mt-2 w-full;
  }
}
</style>
