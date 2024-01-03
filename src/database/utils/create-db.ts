import mysql from "mysql2/promise";
import { options } from "../connection";

(async () => {
  try {
    const { database, ...rest } = options;
    const connection = mysql.createPool(rest);
    await connection.query(`CREATE DATABASE ${options.database}`);
    console.log("created database");
    process.exit(0);
  } catch (e) {
    console.error("failed to create database", e);
  }
})();
