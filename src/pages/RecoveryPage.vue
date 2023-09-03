<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'

import TitleCategory from '@/components/TitleCategory.vue'
import TextField from '@/components/UI/TextField.vue'
import Button from '@/components/UI/Button.vue'
import Footer from '@/components/sections/Footer.vue'

import { useAuth } from '@/composables/useAuth'
import type { IFormAuth } from '@/interfaces/Form'
import { helpers, minLength, required, sameAs } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'

const { users, getUser, recoveryUser, getUserIndex } = useAuth()

const router = useRouter()

const form: IFormAuth = reactive({
  logIn: getUser.value?.logIn || '',
  password: '',
  confirmPassword: '',
  isRemember: false,
  domainUrl: location.origin,
  showLogIn: 'none',
  showRegister: 'block',
  showForgot: 'none',
})

const rules = computed(() => ({
  password: {
    minLength: helpers.withMessage('Minimum length: 6 characters', minLength(6)),
    required,
  },
  confirmPassword: {
    sameAs: helpers.withMessage('Passwords do not match', sameAs(form.password)),
    required,
  },
}))

const v = useVuelidate(rules, form)

const checkForm = () => {
  v.value.$touch()
  return v.value.$error
}

const recovery = () => {
  if (checkForm()) return

  const index = getUserIndex(recoveryUser.value.id || '')
  users.value[index].password = v.value.password.$model

  recoveryUser.value.id = ''

  router.push('/')
}

window.addEventListener('unload', () => (recoveryUser.value.id = ''))
</script>

<template>
  <section class="dark:bg-purple-3 bg-blue-3 px-2">
    <div class="container pt-24 md:pt-40 h-screen -mb-40">
      <TitleCategory category="recovery" title="Recovery Password" />
      <h4 class="dark:text-white font-bold">
        Your login: <span class="text-blue-1"> {{ getUser?.logIn }}</span>
      </h4>
      <TextField
        class="mt-8"
        v-model="v.password.$model"
        :error="v.password.$errors"
        type="password"
        name="passwordRecovery"
        placeholder="Create password"
        label="Create password"
      />
      <TextField
        class="mt-8"
        v-model="v.confirmPassword.$model"
        :error="v.confirmPassword.$errors"
        type="password"
        name="confirmRecovery"
        placeholder="Confirm password"
        label="Confirm password"
      />
      <div class="flex justify-end">
        <Button class="md:!w-40" @click="recovery">Recovery</Button>
      </div>
    </div>
  </section>
  <Footer />
</template>
