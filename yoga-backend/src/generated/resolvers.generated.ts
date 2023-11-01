/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { todoById as Query_todoById } from './graphql/resolvers/Query/todoById';
import    { todos as Query_todos } from './graphql/resolvers/Query/todos';
import    { user as Query_user } from './graphql/resolvers/Query/user';
import    { users as Query_users } from './graphql/resolvers/Query/users';
import    { Todo } from './graphql/resolvers/Todo';
import    { User } from './graphql/resolvers/User';
    export const resolvers: Resolvers = {
      Query: { todoById: Query_todoById,todos: Query_todos,user: Query_user,users: Query_users },
      
      
      Todo: Todo,
User: User
    }