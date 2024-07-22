import type { Config } from "drizzle-kit";
import "dotenv/config";

if (!process.env.DATABASE_URL)
  throw new Error("DATABASE_URL not found in environment");

export default {
  schema: "./app/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
  strict: true,
} satisfies Config;
