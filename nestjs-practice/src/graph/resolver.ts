import { Resolver, Args, Query } from '@nestjs/graphql';
import { Todo, IQuery, User } from 'src/graph/generated/graphql';
import { TodoResolver } from 'src/todo/todo.resolver';
import { UserResolver } from 'src/user/user.resolver';

@Resolver()
export class Resolvers implements IQuery {
  constructor(
    private todoReolver: TodoResolver,
    private userResolver: UserResolver,
  ) {}

  /**
   * Todo resolver
   */
  @Query()
  todoById(@Args('id') id: string): Todo | null {
    return this.todoReolver.getTodoById(id);
  }

  @Query()
  todos(): Todo[] {
    return this.todoReolver.getAllTodos();
  }

  /**
   * User resolver
   */
  @Query()
  users(): User[] {
    return this.userResolver.getAllUsers();
  }

  @Query()
  user(@Args('id') id: string): User | null {
    return this.userResolver.getUserById(id);
  }
}
