import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increment } from "../stateManagement/counterSlice";

export function Home(props) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);

  function handleClick() {
    dispatch(increment());
  }

  return (
    <div>
      <h2> Home Page</h2>

      <button onClick={handleClick}> Increment {value} </button>
    </div>
  );
}
