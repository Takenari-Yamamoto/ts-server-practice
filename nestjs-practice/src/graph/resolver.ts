import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import {
  Todo,
  IQuery,
  User,
  IMutation,
  CreateTodoInput,
  UpdateTodoInput,
} from 'src/graph/generated/graphql';
import { TodoResolver } from 'src/modules/todo/todo.resolver';
import { UserResolver } from 'src/modules/user/user.resolver';

@Resolver()
export class Resolvers implements IQuery, IMutation {
  constructor(
    private todoReolver: TodoResolver,
    private userResolver: UserResolver,
  ) {}

  /**
   * Todo resolver
   */
  @Mutation()
  createTodo(input: CreateTodoInput): Todo | Promise<Todo> {
    return this.todoReolver.createTodo(input);
  }

  @Query()
  todoById(@Args('id') id: string): Todo | null {
    return this.todoReolver.getTodoById(id);
  }

  @Query()
  todos(): Todo[] {
    return this.todoReolver.getAllTodos();
  }

  @Mutation()
  updateTodo(input: UpdateTodoInput): Todo | null {
    return this.todoReolver.updateTodo(input);
  }

  @Mutation()
  deleteTodo(id: string): Todo | Promise<Todo> {
    return this.todoReolver.deleteTodoById(id);
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

  /**
   * Comment resolver
   */
  @Query()
  comments(): any {
    return [
      {
        id: '1',
        text: 'Comment 1',
      },
      {
        id: '2',
        text: 'Comment 2',
      },
    ];
  }
}
