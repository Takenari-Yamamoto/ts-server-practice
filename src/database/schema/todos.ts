import { boolean, char, mysqlTable } from "drizzle-orm/mysql-core";

export const todos = mysqlTable("todos", {
  id: char("id", { length: 36 }).primaryKey().notNull(),
  title: char("title", { length: 255 }).notNull(),
  description: char("description", { length: 255 }).notNull(),
  done: boolean("done").notNull(),
});
