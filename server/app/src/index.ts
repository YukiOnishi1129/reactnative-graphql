/**
 * index.ts
 */
require("module-alias/register");
import express from "express";
import "reflect-metadata";
import { ApolloServer, PubSub } from "apollo-server-express";
import { createConnection } from "typeorm";
/* schema */
import schema from "./graphql/schemasMap";

/**
 * start
 */
async function start() {
  const app = express();
  const PORT = 4000;

  const pubsub = new PubSub();

  // DBのコネクションプール作成
  await createConnection();

  const server = new ApolloServer({
    schema,
    context: () => {
      return { pubsub };
    },
  });

  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(
      `\n🚀    GraphQL is now running on http://localhost:${PORT}/graphql`
    );
  });
}

start();
