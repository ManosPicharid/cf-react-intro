import { useState } from "react";
import CounterButton from "./CounterButton";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const resetCount = () => setCount(0);
  const decreaseCount = () => (count > 0 ? setCount(count - 1) : null);

  return (
    <>
      <div className="space-y-4 text-2xl pt-8">
        <h1 className="text-center">Count is {count}</h1>
        <div className="text-center space-x-4">
          <CounterButton
            onClick={increaseCount}
            label="Increase"
            addClass="bg-green-700"
          />
          <CounterButton
            onClick={decreaseCount}
            disabled={count === 0}
            label="Decrease"
            addClass="bg-cf-dark-red"
          />
          <CounterButton
            onClick={resetCount}
            disabled={count === 0}
            label="Reset"
          />
        </div>
      </div>
    </>
  );
};

export default Counter;
