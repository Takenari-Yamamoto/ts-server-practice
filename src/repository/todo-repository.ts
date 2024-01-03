import { eq } from "drizzle-orm";
import { DbClient } from "../database/connection";
import { todos } from "../database/schema/todos";
import { Todo } from "../domain/todo";
import { v4 as uuidv4 } from "uuid";

export interface TodoRepositoryIF {
  findAll: () => Promise<Todo[]>;
  findById: (id: string) => Promise<Todo | undefined>;
  create: (title: string, description: string) => Promise<Todo>;
  update: (
    id: string,
    title: string,
    description: string
  ) => Promise<Todo | undefined>;
  delete: (id: string) => Promise<string>;
}

export const TodoRepository = (client: DbClient): TodoRepositoryIF => {
  return {
    findAll: async () => {
      return await client.select().from(todos);
    },

    findById: async (id: string) => {
      const res = await client.select().from(todos).where(eq(todos.id, id));

      return res[0];
    },

    create: async (title: string, description: string) => {
      const id = uuidv4();
      await client
        .insert(todos)
        .values({ id, title, description, done: false })
        .execute();

      const created = await TodoRepository(client).findById(id);
      if (!created) {
        throw new Error("failed to create todo");
      }

      return created;
    },

    update: async (id: string, title: string, description: string) => {
      const res = await client
        .update(todos)
        .set({ title, description })
        .where(eq(todos.id, id));

      return await TodoRepository(client).findById(id);
    },

    delete: async (id: string) => {
      await client.delete(todos).where(eq(todos.id, id));

      return id;
    },
  };
};
