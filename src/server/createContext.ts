import { OpenAIApi } from 'openai'
import { openAIConfiguration } from '~/lib/openAI'

export interface Context {
  openAI: OpenAIApi
}
export const createContext = (): Context => {
  const openAI = new OpenAIApi(openAIConfiguration)

  return {
    openAI
  }
}
