import { type Server, createServer as createHttpServer } from 'http'
import { ApolloServer } from '@apollo/server'
import { generateSchema } from '~/schema'
import { type Express } from 'express'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'

interface CreateServerArgs {
  app: Express
}

interface CreateServerReturn {
  apolloServer: ApolloServer
  httpServer: Server
}

export const createServer = async ({
  app
}: CreateServerArgs): Promise<CreateServerReturn> => {
  const schema = await generateSchema()
  const httpServer = createHttpServer(app)

  const apolloServer = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })

  return { apolloServer, httpServer }
}
