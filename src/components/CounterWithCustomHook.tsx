import CounterButton from "./CounterButton";
import { useCounter } from "../hooks/useCounter";

const CounterWithCustomHook = () => {

  const { count, increase, decrease, reset } = useCounter();

  return (
    <>
      <div className="space-y-4 text-2xl pt-8">
        <h1 className="text-center">Count is {count}</h1>
        <div className="text-center space-x-4">
          <CounterButton
            onClick={increase}
            label="Increase"
            addClass="bg-green-700"
          />
          <CounterButton
            onClick={decrease}
            disabled={count === 0}
            label="Decrease"
            addClass="bg-cf-dark-red"
          />
          <CounterButton
            onClick={reset}
            disabled={count === 0}
            label="Reset"
          />
        </div>
      </div>
      {/*<p className="text-center pt-8">*/}
      {/*  Last change: <strong>{state.lastAction || "-"}</strong> at <strong>{state.time || "-"}</strong>*/}
      {/*</p>*/}
    </>
  );
};

export default CounterWithCustomHook;