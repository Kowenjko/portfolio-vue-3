import { ref, computed } from 'vue'

import LogIn from '@/components/LogIn.vue'
import SignUp from '@/components/SignUp.vue'

import { useStorage } from '@vueuse/core'
import type { IFormAuth } from '@/interfaces/Form'
import { sendEmail } from '@/api/services/EmailJSService'
import { v4 as uuidv4 } from 'uuid'

export function useAuth() {
  interface IAuth {
    id: string
    isRemember?: boolean
  }

  const usersDefault: IFormAuth[] = [
    {
      id: '',
      logIn: '',
      password: '',
      confirmPassword: '',
      messages: [],
      isRemember: false,
    },
  ]

  const NUMBER_AVAILABLE_MESSAGES = 10

  const logInRef = ref<InstanceType<typeof LogIn> | null>(null)
  const signUpRef = ref<InstanceType<typeof SignUp> | null>(null)

  const incorrect = ref('')
  const statusRecoverPassword = ref<string | any>('')
  const isLoading = ref(false)

  const authDefault: IAuth = { id: '', isRemember: false }
  const recoveryUserDefault: IAuth = { id: '' }

  const users = useStorage('users', usersDefault)
  const auth = useStorage('auth', authDefault)
  const recoveryUser = useStorage('recovery', recoveryUserDefault)

  const getUserIndex = (id: string): number => users.value.findIndex((user: IFormAuth) => user.id === id)

  const userInfo = computed(() => users.value.find((user) => user.id === auth.value.id))
  const getUser = computed(() => users.value.find((user) => user.id === recoveryUser.value.id))
  const userIndex = computed(() => getUserIndex(userInfo.value?.id || ''))
  const isAvailableMessages = computed(() => users.value[userIndex.value].messages.length > NUMBER_AVAILABLE_MESSAGES)
  const countMessages = computed(() =>
    users.value[userIndex.value].messages.length > 0
      ? NUMBER_AVAILABLE_MESSAGES - users.value[userIndex.value].messages.length
      : NUMBER_AVAILABLE_MESSAGES
  )

  /**
   * function for user login
   *
   * @param form
   * @return Promise<any>
   */

  const authUser = async (form: IFormAuth) => {
    incorrect.value = ''

    const checkUser: IFormAuth[] = users.value.filter(
      (user: IFormAuth) => user.logIn === form.logIn && user.password === form.password
    )

    if (checkUser.length > 0) {
      const index = getUserIndex(checkUser[0].id || '')

      users.value[index].isRemember = form.isRemember
      const { id, isRemember } = users.value[index]

      if (id) auth.value = { id, isRemember }

      logInRef.value?.closeModal()

      const message = {
        name: form.logIn,
        email: form.logIn,
        message: 'This user has logged into the portfolio',
      }

      await sendEmail('sendEmail', message)
      return
    }

    incorrect.value = 'Incorrect password or login'
  }

  /**
   * function for user registration
   *
   * @param form
   * @return Promise<any>
   */
  const registerUser = async (form: IFormAuth) => {
    incorrect.value = ''

    const checkUser: IFormAuth[] = users.value.filter((user: IFormAuth) => user.logIn === form.logIn)

    if (checkUser.length > 0) return (incorrect.value = 'There is already such a user')

    const newUser: IFormAuth = {
      id: uuidv4(),
      logIn: form.logIn,
      password: form.password,
      confirmPassword: '',
      messages: [],
      isRemember: false,
    }
    isLoading.value = true

    users.value.push({ ...newUser })
    await sendEmail('sendEmailAuth', form)
    await authUser(form)

    isLoading.value = false
    signUpRef.value?.closeModal()
  }

  /**
   * function for password recovery
   *
   * @param form
   * @return Promise<any>
   */
  const recoverPassword = async (form: IFormAuth) => {
    incorrect.value = ''

    const checkUser: IFormAuth[] = users.value.filter((user: IFormAuth) => user.logIn === form.logIn)

    if (checkUser.length > 0) {
      isLoading.value = true
      statusRecoverPassword.value = await sendEmail('sendEmailAuth', form)
      isLoading.value = false

      if (checkUser[0].id) recoveryUser.value.id = checkUser[0].id

      return
    }

    incorrect.value = 'This user does not exist'
  }

  return {
    logInRef,
    signUpRef,
    users,
    incorrect,
    statusRecoverPassword,
    isLoading,
    auth,
    authDefault,
    userInfo,
    authUser,
    registerUser,
    recoverPassword,
    getUser,
    recoveryUser,
    getUserIndex,
    userIndex,
    countMessages,
    isAvailableMessages,
    NUMBER_AVAILABLE_MESSAGES,
  }
}
