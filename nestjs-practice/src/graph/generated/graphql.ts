/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateTodoInput {
  title: string;
  completed: boolean;
}

export interface UpdateTodoInput {
  id: string;
  title?: Nullable<string>;
  completed?: Nullable<boolean>;
}

export interface Comment {
  id: string;
  text: string;
}

export interface IQuery {
  comments():
    | Nullable<Nullable<Comment>[]>
    | Promise<Nullable<Nullable<Comment>[]>>;
  todoById(id: string): Todo | Promise<Todo>;
  todos(): Todo[] | Promise<Todo[]>;
  users(): User[] | Promise<User[]>;
  user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
  createTodo(input: CreateTodoInput): Todo | Promise<Todo>;
  updateTodo(input: UpdateTodoInput): Todo | Promise<Todo>;
  deleteTodo(id: string): Todo | Promise<Todo>;
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
