import type { Config } from "drizzle-kit";
import { options } from "./src/database/connection";

export default {
  schema: "src/database/schema/*",
  out: "src/database/migration",
  driver: "mysql2",
  dbCredentials: options,
} satisfies Config;
