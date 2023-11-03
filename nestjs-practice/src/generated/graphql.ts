/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
  todoById(id: string): Todo | Promise<Todo>;
  todos(): Todo[] | Promise<Todo[]>;
  users(): User[] | Promise<User[]>;
  user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

type Nullable<T> = T | null;
