/**
 * index.ts
 */
require("module-alias/register");
import express from "express";
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";

dotenv.config();

/**
 * start
 */
function start() {
  const app = express();
  const PORT = 4000;

  app.get("/", (req, res) => {
    res.send("Hello, World!");
  });

  app.listen(PORT, () => {
    console.log(
      `\n🚀    GraphQL is now running on http://localhost:${PORT}/graphql`
    );
  });
}

start();
