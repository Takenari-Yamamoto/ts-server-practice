import { Todo } from "../domain/todo";

export interface TodoRepositoryIF {
  findAll: () => Todo[];
  findById: (id: number) => Todo | undefined;
  create: (title: string, description: string) => Todo;
  update: (id: number, title: string, description: string) => Todo | undefined;
  delete: (id: number) => Todo | undefined;
}

const TodoStore: Todo[] = [];

// Todoのリポジトリ層
export const TodoRepository: TodoRepositoryIF = {
  findAll: () => {
    return TodoStore;
  },

  findById: (id: number) => {
    return TodoStore.find((todo) => todo.id === id);
  },

  create: (title: string, description: string) => {
    const newTodo: Todo = {
      id: Math.max(...TodoStore.map((t) => t.id), 0) + 1, // 簡易ID生成
      title,
      description,
      done: false,
    };
    TodoStore.push(newTodo);
    return newTodo;
  },

  update: (id: number, title: string, description: string) => {
    const todoIndex = TodoStore.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) return undefined;

    const updatedTodo = { ...TodoStore[todoIndex], title, description };
    TodoStore[todoIndex] = updatedTodo;
    return updatedTodo;
  },

  delete: (id: number) => {
    const todoIndex = TodoStore.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) return undefined;

    const [deletedTodo] = TodoStore.splice(todoIndex, 1);
    return deletedTodo;
  },
};
