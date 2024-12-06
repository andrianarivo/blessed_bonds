import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  HOSTNAME: z.string().default("localhost"),
  FRONTEND_URL: z.string().default("http://localhost:5173"),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  SESSION_SECRET: z.string(),
  JWT_SECRET: z.string(),
  FACEBOOK_APP_ID: z.string(),
  FACEBOOK_APP_SECRET: z.string(),
});

export const config = envSchema.parse(process.env);
