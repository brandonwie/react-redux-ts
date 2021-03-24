import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

// fetched data interface
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// action object interface
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";

// action creator
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

// action creator
export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
