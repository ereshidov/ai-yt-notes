import * as dotenv from 'dotenv'

// TODO: Enhancement add typescript validation to throw error if
// some error is not found in process.env

dotenv.config()

export const config = {
  port: process.env.PORT as string,
  openAPIKey: process.env.OPENAI_API_KEY as string
}
