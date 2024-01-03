import mysql from "mysql2/promise";
import { options } from "../connection";
(async () => {
  try {
    const connection = mysql.createPool(options);
    await connection.query(`DROP DATABASE IF EXISTS ${options.database}`);
    console.log("deleted database");
    process.exit(0);
  } catch (e) {
    console.error("failed to delete database", e);
  }
})();
