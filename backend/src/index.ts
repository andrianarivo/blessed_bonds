import { config } from "@/config";
import { resolvers } from "@/features/resolvers";
import typeDefs from "@/features/typeDefs";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { User } from "@prisma/client";
import cors from "cors";
import express from "express";
import { graphqlUploadExpress } from "graphql-upload-ts";
import http from "http";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { configureAuth } from "./auth/middleware";
import { verifyToken } from "./auth/verify_token";
import { prisma } from "./db";
import { Context } from "./types/context";

// because ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  configureAuth(app);

  const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>({
      origin: true,
      credentials: true,
    }),
    express.json(),
    graphqlUploadExpress(),
    expressMiddleware<Context>(server, {
      context: async ({ req }) => {
        if (req.user) {
          return { user: req.user as User, prisma };
        }

        const token = req.headers.authorization?.replace("Bearer ", "");
        if (!token) {
          return { user: null, prisma };
        }

        try {
          const user = await verifyToken(token);
          return { user, prisma };
        } catch (err) {
          return { user: null, prisma };
        }
      },
    })
  );

  app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

  await new Promise<void>((resolve) => httpServer.listen({ port: config.PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${config.PORT}/graphql`);
}

startApolloServer().catch((err) => console.error(err));
