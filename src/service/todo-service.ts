import { Todo } from "../domain/todo";
import { TodoRepositoryIF } from "../repository/todo-repository";

export const TodoService = (todoRepository: TodoRepositoryIF) => {
  const findAllTodos = (): Todo[] => {
    return todoRepository.findAll();
  };

  const findTodoById = (id: number): Todo | undefined => {
    return todoRepository.findById(id);
  };

  const createTodo = (title: string, description: string): Todo => {
    return todoRepository.create(title, description);
  };

  const updateTodo = (
    id: number,
    title: string,
    description: string
  ): Todo | undefined => {
    return todoRepository.update(id, title, description);
  };

  const deleteTodo = (id: number): Todo | undefined => {
    return todoRepository.delete(id);
  };

  return {
    findAllTodos,
    findTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
  };
};
