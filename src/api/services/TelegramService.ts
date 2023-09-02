import { telegramUrl } from '@/configs/configApi'
import { IForm } from '@/interfaces/Form'

export const sendTelegram = async (form: IForm) => {
  const dataJSON: string = JSON.stringify(form)

  const requestOptions: RequestInit = {
    method: 'POST',
    body: dataJSON,
    redirect: 'follow',
  }

  try {
    await fetch(telegramUrl, requestOptions)
    return 'OK'
  } catch (error) {
    return error
  }
}
