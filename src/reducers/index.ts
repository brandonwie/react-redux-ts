import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions";

// validate store
export interface StoreState {
  todos: Todo[];
}

// T: StoreState ensures reducer return type
export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
