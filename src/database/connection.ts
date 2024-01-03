import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

export const options = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "user",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "node_dev_db",
  port: 3306,
};

export const connection = mysql.createPool(options);

export const dbClient = drizzle(connection);
