import { Injectable } from '@nestjs/common';
import { Todo } from 'src/generated/graphql';

@Injectable()
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

  getTodoById(id: string): Todo | null {
    return this.todosData.find((todo) => todo.id === id) || null;
  }

  getAllTodos(): Todo[] {
    return this.todosData;
  }
}
