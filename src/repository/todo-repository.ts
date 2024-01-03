import { eq } from "drizzle-orm";
import { dbClient } from "../database/connection";
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

// Todoのリポジトリ層
export const TodoRepository: TodoRepositoryIF = {
  findAll: async () => {
    return await dbClient.select().from(todos);
  },

  findById: async (id: string) => {
    const res = await dbClient.select().from(todos).where(eq(todos.id, id));

    return res[0];
  },

  create: async (title: string, description: string) => {
    const id = uuidv4();
    await dbClient
      .insert(todos)
      .values({ id, title, description, done: false })
      .execute();

    const created = await TodoRepository.findById(id);
    if (!created) {
      throw new Error("failed to create todo");
    }

    return created;
  },

  update: async (id: string, title: string, description: string) => {
    const res = await dbClient
      .update(todos)
      .set({ title, description })
      .where(eq(todos.id, id));

    return await TodoRepository.findById(id);
  },

  delete: async (id: string) => {
    await dbClient.delete(todos).where(eq(todos.id, id));

    return id;
  },
};
