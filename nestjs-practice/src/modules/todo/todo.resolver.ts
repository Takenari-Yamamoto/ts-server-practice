import { Resolver } from '@nestjs/graphql';
import {
  CreateTodoInput,
  Todo,
  UpdateTodoInput,
} from 'src/graph/generated/graphql';

@Resolver()
export class TodoResolver {
  private todosData: Todo[] = [
    {
      id: '1',
      title: 'First Todo',
      completed: false,
    },
    {
      id: '2',
      title: 'Second Todo',
      completed: true,
    },
  ];

  createTodo(input: CreateTodoInput): Todo | Promise<Todo> {
    const todo: Todo = {
      id: Math.random().toString(),
      title: input.title,
      completed: input.completed,
    };

    this.todosData.push(todo);

    return todo;
  }

  getTodoById(id: string): Todo | null {
    return this.todosData.find((todo) => todo.id === id) || null;
  }

  getAllTodos(): Todo[] {
    return this.todosData;
  }

  updateTodo(input: UpdateTodoInput): Todo | null {
    const todo = this.todosData.find((todo) => todo.id === input.id);

    if (!todo) {
      return null;
    }

    todo.title = input.title || todo.title;
    todo.completed = input.completed || todo.completed;

    return todo;
  }

  deleteTodoById(id: string): Todo | Promise<Todo> {
    const todoIndex = this.todosData.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return null;
    }

    const todo = this.todosData[todoIndex];

    this.todosData.splice(todoIndex, 1);

    return todo;
  }
}
