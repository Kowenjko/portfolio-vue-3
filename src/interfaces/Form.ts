import type { IMessage } from '@/interfaces/Messages'

export interface IForm {
  name: string
  email: string
  message: string
}

export interface IFormAuth {
  id?: string
  logIn: string
  password: string
  confirmPassword: string
  messages: IMessage[]
  domainUrl?: string
  isRemember: boolean
  showLogIn?: string
  showRegister?: string
  showForgot?: string
  forgotUrl?: string
}
