import { TodoRepositoryIF } from "../repository/todo-repository";

export const TodoService = (todoRepository: TodoRepositoryIF) => {
  const findAllTodos = () => {
    return todoRepository.findAll();
  };

  const findTodoById = (id: string) => {
    return todoRepository.findById(id);
  };

  const createTodo = (title: string, description: string) => {
    return todoRepository.create(title, description);
  };

  const updateTodo = (id: string, title: string, description: string) => {
    return todoRepository.update(id, title, description);
  };

  const deleteTodo = (id: string) => {
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
