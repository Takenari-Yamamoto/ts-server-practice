import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const init = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "synergeee_dev",
    });
    const db = drizzle(connection);
    console.log("success to connect", db);
  } catch (e) {
    console.log("エラーです", e);
  }
};

init();
