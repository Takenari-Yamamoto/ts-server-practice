import { boolean, char, mysqlTable } from "drizzle-orm/mysql-core";

export const todos = mysqlTable("todos", {
  id: char("id").primaryKey().notNull(),
  title: char("title").notNull(),
  description: char("description").notNull(),
  done: boolean("done").notNull(),
});
