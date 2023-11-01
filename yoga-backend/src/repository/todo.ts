import { Todo } from "../generated/resolvers-types";

const dummyTodos: Todo[] = [
  { id: "1", title: "Buy groceries", completed: false },
  { id: "2", title: "Clean the house", completed: true },
];

export const todoRepository = {
  getTodos: async () => {
    return dummyTodos;
  },
  todoById: async (id: string) => {
    const todo = dummyTodos.find((todo) => todo.id === id);
    return todo || null;
  },
};
