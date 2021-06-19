/**
 * index.ts
 */
require("module-alias/register");
import express from "express";
import "reflect-metadata";
import { ApolloServer, PubSub } from "apollo-server-express";
import { createConnection } from "typeorm";
import { createServer } from "http";
import expressPlayground from "graphql-playground-middleware-express";
/* schema */
import schema from "./graphql/schemasMap";
/* services */
import { authTokenUser } from "@Services/User";

/**
 * start
 */
async function start() {
  const app = express();
  const PORT = 4000;

  const pubsub = new PubSub();

  // DBのコネクションプール作成
  await createConnection();

  /**
   * サーバーインスタンス作成
   */
  const server = new ApolloServer({
    schema,
    context: async ({ req, connection }) => {
      // playgroundでtokenを設定する場合、HTTP_HEADERSに以下を記載する
      //   {"authorization": tokenの値}

      let token = "";
      // webSocket(Subscription)の場合
      if (connection) {
        token = connection.context.authorization || "";
        // httpリクエスト(Query, Mutation)の場合
      } else {
        // headers情報にtokenを入れておき、そのtokenからuser情報を取得し、リゾルバへ渡す
        token = req?.headers?.authorization || "";
      }
      const currentUser = await authTokenUser(token);
      return { currentUser, pubsub };
    },
  });

  server.applyMiddleware({ app });

  // playground用のルート
  app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

  // ApolloServerでサブスクリプションを実施するためには、httpサーバーが必要
  // httpサーバーを作成
  const httpServer = createServer(app);

  // server.installSubscriptionHandlers: WebSocketを動作させるためのコード
  server.installSubscriptionHandlers(httpServer);

  httpServer.listen(PORT, () => {
    console.log(
      `\n🚀    GraphQL is now running on http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

start();
