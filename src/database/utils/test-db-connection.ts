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

export const connection = mysql.createPool(opt);

/**
 * DB client for test code
 */
export const testDbClient = drizzle(connection);

/**
 * create DB for test code
 */
export const createTestDb = async () => {
  const { database, ...rest } = opt;
  const tempConnection = mysql.createPool(rest);
  try {
    await tempConnection.query(`CREATE DATABASE IF NOT EXISTS ${opt.database}`);
  } catch (e) {
    console.error("failed to create database", e);
  } finally {
    await tempConnection.end();
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
  } finally {
    await connection.end();
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
