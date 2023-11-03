/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
  abstract todoById(id: string): Todo | Promise<Todo>;

  abstract todos(): Todo[] | Promise<Todo[]>;

  abstract users(): User[] | Promise<User[]>;

  abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class Todo {
  id: string;
  title: string;
  completed: boolean;
}

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
}

type Nullable<T> = T | null;
