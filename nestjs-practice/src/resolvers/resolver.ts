import { Resolver, Args, Query } from '@nestjs/graphql';
import { Todo, IQuery, User } from 'src/generated/graphql';

@Resolver()
export class Resolvers implements IQuery {
  /**
   * Todo resolver
   */
  @Query()
  todoById(@Args('id') id: string): Todo | null {
    return todosData.find((todo) => todo.id === id) || null;
  }

  @Query()
  todos(): Todo[] {
    return todosData;
  }

  /**
   * User resolver
   */
  @Query()
  users(): User[] {
    return userData;
  }

  @Query()
  user(@Args('id') id: string): User | null {
    return userData.find((user) => user.id === id) || null;
  }
}

const todosData: Todo[] = [
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

const userData: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'secret',
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: 'secret',
  },
];
