import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { increment, decrement } from "./counterSlice";
import Button from "sharedComponent/ButtonWrapper";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter?.value || 0);
  const [counter, setCount] = useState(0);
  const dispatch = useDispatch();

  const dispatchCounterUpdateEvent = (value: number) => {
    const counterUpdateEvent = new CustomEvent("counterUpdate", {
      detail: { value },
    });
    window.dispatchEvent(counterUpdateEvent);
  };

  const incrementCounter = () => {
    dispatchCounterUpdateEvent(counter + 1);
    setCount(counter + 1);
    dispatch(increment());
  };

  const decrementCounter = () => {
    dispatchCounterUpdateEvent(counter - 1);
    setCount(counter - 1);
    dispatch(decrement());
  };

  return (
    <div>
      <h2>Count: {count || counter}</h2>
      <Button type="primary" onClick={incrementCounter}>
        Increment
      </Button>
      <Button type="primary" onClick={decrementCounter}>
        Decrement
      </Button>
    </div>
  );
};

export default Counter;
