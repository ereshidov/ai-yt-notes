import { createServer as createHttpServer } from "http";
import { ApolloServer } from "@apollo/server";
import { generateSchema } from "~/schema";
import { Express } from "express";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { createContext } from "./createContext";

interface CreateServerArgs {
  app: Express;
}

export const createServer = async ({ app }: CreateServerArgs) => {
  const schema = await generateSchema();
  const httpServer = createHttpServer(app);

  const apolloServer = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  return { apolloServer, httpServer };
};
