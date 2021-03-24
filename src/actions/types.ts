import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  // by default redux set numbers
  // string val doesn't make a big difference
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
