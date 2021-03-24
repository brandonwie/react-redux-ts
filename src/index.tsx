import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { App } from "./components/App";
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// interface AppProps {
//   color?: string;
// }

// interface AppState {
//   counter: number;
// }

// // const App = (props: AppProps): JSX.Element => {
// //   const { color } = props;
// //   return <div>{color}</div>;
// // };

// class App extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);
//     this.state = { counter: 0 };
//   }

//   onIncrement = (): void => {
//     this.setState((prevState) => ({ counter: prevState.counter + 1 }));
//   };

//   onDecrement = (): void => {
//     this.setState((prevState) => ({ counter: prevState.counter - 1 }));
//   };

//   render() {
//     const { counter } = this.state;
//     return (
//       <div>
//         <button type="button" onClick={this.onIncrement}>
//           Increment
//         </button>
//         <button type="button" onClick={this.onDecrement}>
//           Decrement
//         </button>
//         {counter}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App color="red" />, document.querySelector("#root"));
