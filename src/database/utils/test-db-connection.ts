/**
 * テストコード用のデータベースに関する処理
 */

import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import mysql from "mysql2/promise";

const opt = {
  host: "localhost",
  user: "user",
  password: "password",
  database: "test_db",
  port: 3308,
};

const connection = mysql.createPool(opt);

/**
 * DB client for test code
 */
export const testDbClient = drizzle(connection);

/**
 * create DB for test code
 */
export const createTestDb = async () => {
  try {
    const { database, ...rest } = opt;
    const connection = mysql.createPool(rest);
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${opt.database}`);
  } catch (e) {
    console.error("failed to create database", e);
  }
};

/**
 * delete DB for test code
 */
export const deleteTestDb = async () => {
  try {
    await connection.query(`DROP DATABASE IF EXISTS ${opt.database}`);
  } catch (e) {
    console.error("failed to delete database", e);
  }
};

/**
 * migrate to test DB
 */
export const migrateTestDb = async () => {
  try {
    const db = drizzle(connection);
    await migrate(db, {
      migrationsFolder: "src/database/migration",
    });
  } catch (e) {
    console.error("failed to migrate...", e);
  }
};
