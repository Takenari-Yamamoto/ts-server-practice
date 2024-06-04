import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { options } from "../connection";

(async () => {
  try {
    const connection = await mysql.createConnection(options);
    const db = drizzle(connection);
    await migrate(db, {
      migrationsFolder: "../migration",
    });
  } catch (e) {
    console.error("failed to migrate...", e);
  } finally {
    process.exit();
  }
})();
