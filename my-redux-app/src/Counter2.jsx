import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router"
import { getCounter, getDoubleCounter } from "./counterSlice";

export default function Counter2() {
  const counter = useSelector((state) => {
    console.log("Page2 state:", state); // Debug
    return state.counter;
  });


  const doubleCounter = useSelector(getDoubleCounter);
  const trippleCounter = useSelector( state => getCounter(state, 3))

  return (
    <div>
      <h1>Ini halaman admin contoh</h1>
      <h1>nilai state global = {counter}</h1>
      <h1>ini selecetors getDoubleCounter = {doubleCounter}</h1>
      <h1>ini selecetors getCounter yang ada parameter = {trippleCounter}</h1>
      <Link to="/counter">back to </Link>
    </div>

  );
}
