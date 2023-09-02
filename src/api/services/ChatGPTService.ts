import { chatGPTUrl } from '@/configs/configApi'

export const getAnswerGPT = async (quastion: string) => {
  const dataJSON: string = JSON.stringify({ quastion })

  const requestOptions: RequestInit = {
    method: 'POST',
    body: dataJSON,
    redirect: 'follow',
  }

  try {
    const response = await fetch(chatGPTUrl, requestOptions)
    const answer = await response.json()
    
    return answer
  } catch (error) {
    return { answer: 'An error occurred, try again later' }
  }
}
