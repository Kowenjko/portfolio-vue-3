import emailjs from '@emailjs/browser'
import { paramsEmailJS } from '@/configs/configApi'
import { IForm, IFormAuth } from '@/interfaces/Form'

const { serviceID, templateSendID, templateAuthID, userID } = paramsEmailJS

type templateAction = 'sendEmail' | 'sendEmailAuth'

const getTemplateId = (action: templateAction) => {
  if (action === 'sendEmail') return templateSendID
  if (action === 'sendEmailAuth') return templateAuthID
}

export const sendEmail = async (action: templateAction = 'sendEmail', templateParams: IForm | IFormAuth) => {
  const templateID: string = getTemplateId(action)

  try {
    const request = await emailjs.send(serviceID, templateID, templateParams, userID)
    return request.text
  } catch (error) {
    return error
  }
}
