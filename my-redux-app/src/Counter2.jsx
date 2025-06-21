import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router"

export default function Counter2() {
  const counter = useSelector((state) => {
    console.log("Page2 state:", state); // Debug
    return state.counter;
  });

  return (
    <div>
      <h1>Ini halaman admin contoh</h1>
      <h1>ini {counter}</h1>
      <Link to="/counter">back to </Link>
    </div>

  );
}
