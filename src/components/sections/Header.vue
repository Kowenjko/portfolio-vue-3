<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

import HeaderNavigation from '@/components/HeaderNavigation.vue'
import SwitchTheme from '@/components/SwitchTheme.vue'
import MobileHeader from '@/components/MobileHeader.vue'

import LogIn from '../LogIn.vue'
import SignUp from '../SignUp.vue'
import ForgotPassword from '../ForgotPassword.vue'

import { useAuth } from '@/composables/useAuth'
import { NavigationLink } from '@/interfaces/Navigation'

const forgotPasswordRef = ref<InstanceType<typeof ForgotPassword> | null>(null)

const {
  logInRef,
  signUpRef,
  incorrect,
  statusRecoverPassword,
  isLoading,
  auth,
  authDefault,
  userInfo,
  authUser,
  registerUser,
  recoverPassword,
} = useAuth()

const links: NavigationLink[] = [
  { name: 'Home', url: '/#home' },
  { name: 'Services', url: '/#services' },
  { name: 'Skills', url: '/#skills' },
  { name: 'Portfolios', url: '/#portfolios' },
  { name: 'Contact', url: '/#contact' },
]

const router = useRouter()

const logOut = () => {
  router.push('/')
  incorrect.value = ''
  auth.value = authDefault
}

const openLogIn = () => {
  incorrect.value = ''

  signUpRef.value?.closeModal()
  logInRef.value?.showModal()
}
const openSignUp = () => {
  incorrect.value = ''

  logInRef.value?.closeModal()
  signUpRef.value?.showModal()
}
const openForgotPassword = () => {
  incorrect.value = ''

  logInRef.value?.closeModal()
  forgotPasswordRef.value?.showModal()
}

// onMounted(() => {
//   if (!auth.value.isRemember) auth.value = authDefault
// })

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
</script>

<template>
  <header class="header">
    <div class="header__wrapper container">
      <a class="logo" href="/#home">Kovenko</a>
      <HeaderNavigation class="hidden md:flex" :links="links" />
      <div class="header__wrapper-desktop">
        <SwitchTheme />
        <div v-if="userInfo?.id">
          <span class="dark:text-white">{{ userInfo.logIn }} | </span>
          <button class="logo" @click="logOut">Log out</button>
        </div>
        <button v-else @click="openLogIn" class="logo">Log in</button>
      </div>
      <MobileHeader @openLogIn="openLogIn">
        <HeaderNavigation :links="links" />
      </MobileHeader>
    </div>
    <LogIn
      ref="logInRef"
      @openSignUp="openSignUp"
      @authUser="authUser"
      @openForgotPassword="openForgotPassword"
      :incorrect="incorrect"
    />
    <SignUp
      ref="signUpRef"
      @openLogIn="openLogIn"
      @register="registerUser"
      :incorrect="incorrect"
      :isLoading="isLoading"
    />
    <ForgotPassword
      ref="forgotPasswordRef"
      @recoverPassword="recoverPassword"
      :status="statusRecoverPassword"
      :incorrect="incorrect"
      :isLoading="isLoading"
    />
  </header>
</template>

<style lang="scss" scoped>
.header {
  @apply fixed w-full z-10 dark:bg-opacity-dark bg-opacity-light;
  &__wrapper {
    @apply px-2 container flex items-center justify-between h-16;
    & .logo {
      @apply font-bold dark:text-white hover:text-blue-1 dark:hover:text-blue-1  transition-all;
    }
    &-desktop {
      @apply hidden md:flex items-center gap-2;
    }
  }
}
</style>
