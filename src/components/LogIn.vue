<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import Modal from './UI/Modal.vue'
import CloseButton from './UI/CloseButton.vue'
import TextField from './UI/TextField.vue'
import Checkbox from './UI/Checkbox.vue'
import Button from './UI/Button.vue'

import { helpers, minLength, email, required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import type { IFormAuth } from '@/interfaces/Form'

const isOpen = ref(false)

defineProps({
  incorrect: { type: String, default: '' },
})

const emit = defineEmits<{
  (e: 'openSignUp'): void
  (e: 'authUser', form: IFormAuth): void
  (e: 'openForgotPassword'): void
}>()

const form: IFormAuth = reactive({
  logIn: '',
  password: '',
  confirmPassword: '',
  isRemember: false,
  domainUrl: location.origin,
  showLogIn: 'block',
  showRegister: 'none',
  showForgot: 'none',
})

const rules = computed(() => ({
  logIn: {
    email: helpers.withMessage(`You have entered an invalid email`, email),
    required,
  },
  password: {
    minLength: helpers.withMessage('Minimum length: 6 characters', minLength(6)),
    required,
  },
  isRemember: {},
}))

const v = useVuelidate(rules, form)

const checkForm = () => {
  v.value.$touch()
  return v.value.$error
}

const showModal = () => (isOpen.value = true)
const closeModal = () => (isOpen.value = false)

const authUser = () => {
  if (checkForm()) return

  emit('authUser', form)
}

const openForgotPassword = () => emit('openForgotPassword')
const openSignUp = () => emit('openSignUp')

defineExpose({ showModal, closeModal })
</script>

<template>
  <Modal :open="isOpen" @close="closeModal">
    <div class="card">
      <CloseButton class="absolute right-4" color="white" @click="closeModal" />
      <h2 class="title">Login</h2>
      <p v-if="incorrect" class="incorrect">
        {{ incorrect }}
      </p>
      <TextField
        class="mt-4"
        v-model="v.logIn.$model"
        :error="v.logIn.$errors"
        name="login"
        placeholder="Enter your email"
        label="Your email"
      />
      <TextField
        class="mt-8"
        v-model="v.password.$model"
        :error="v.password.$errors"
        type="password"
        name="password"
        placeholder="Enter your password"
        label="Your password"
      />
      <div class="remeber-forgot">
        <Checkbox v-model:change="v.isRemember.$model" label="Remember Me" />
        <button @click="openForgotPassword">Forgot password?</button>
      </div>
      <Button @click="authUser">Login Now</Button>
      <div class="signup">
        Dont't have an ccount?
        <button @click="openSignUp" type="button">Signup</button>
      </div>
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
  .remeber-forgot {
    @apply mt-4 mb-8 flex items-center justify-between;
    button {
      @apply text-sm text-blue-1 hover:underline transition-all;
    }
  }
  .signup {
    @apply mt-4 text-sm text-center text-white;
    button {
      @apply text-blue-1 hover:underline transition-all;
    }
  }
}
</style>
