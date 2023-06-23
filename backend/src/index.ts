import cors from 'cors'
import express from 'express'
import { expressMiddleware } from '@apollo/server/express4'
import bodyParser from 'body-parser'

import { createServer } from './server'
import { config } from './config'
import { createContext } from './server/createContext'

const runServer = async () => {
  const app = express()
  const context = createContext()
  const { apolloServer, httpServer } = await createServer({
    app
  })

  await apolloServer.start()

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    bodyParser.json({ limit: '50mb' }),
    expressMiddleware(apolloServer, {
      context: async () => context
    })
  )

  httpServer.listen(config.port, () => {
    console.log(`✅ Server listening on at port: ${config.port}`)
  })
}

void runServer().catch((error) => {
  console.error(error)
  process.exit(1)
})
