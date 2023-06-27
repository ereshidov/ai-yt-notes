import { Configuration } from 'openai'

export const openAIConfiguration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
