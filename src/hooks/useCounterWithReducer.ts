import {useReducer} from "react";

type CounterState = {
  count: number;
  lastAction: string;
  time: string;
}

type Action =
  | { type: "INCREASE" }
  | { type: "DECREASE" }
  | { type: "RESET" }

const initialState: CounterState = {
  count: 0,
  lastAction: "",
  time: "",
}

function reducer(state: CounterState, action: Action): CounterState {
  switch (action.type) {
    case "INCREASE":
      return {
        count: state.count + 1,
        lastAction: "Increase",
        time: new Date().toLocaleTimeString(),
      }
    case "RESET":
      return state.count > 0 ?
        {
          count: 0,
          lastAction: "Reset",
          time: new Date().toLocaleTimeString(),
        }
        : state;
    case "DECREASE":
      return {
        count: state.count - 1,
        lastAction: "Decrease",
        time: new Date().toLocaleTimeString(),
      }
    default:
      return state;
  }
}

export const useCounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = () => dispatch({type: "INCREASE"});
  const reset = () => dispatch({type: "RESET"});
  const decrease = () => dispatch({type: "DECREASE"});

  return {
    count: state.count,
    lastAction: state.lastAction,
    time: state.time,
    increase,
    decrease,
    reset,
  }

}
