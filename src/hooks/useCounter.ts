import {useState} from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const reset = () => setCount(0);
  const decrease = () => (count > 0 ? setCount(count - 1) : null);

  return {
    count,
    increase,
    reset,
    decrease,
  };
};
