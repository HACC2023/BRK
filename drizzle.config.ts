import { type Config } from "drizzle-kit";

import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
  tablesFilter: ["brk_*"],
  out: './drizzle'
} satisfies Config;
