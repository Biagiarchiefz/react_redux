import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { decrement, increment } from './counterSlice';
import Counter2 from './Counter2';
import {Link} from "react-router"


export default function Counter() {
  // state.counter disini counternya harus sama namanya sesuai dengan key yang ada di configureStore
  // useSelector() digunakan untuk mengambil state yang ada di store global state
   const counter = useSelector(state => state.counter);

   // dispatch ini digunakan untuk mengambil action yang kita export dari slice
   const dispatch = useDispatch();

   const handleIncrement = () => {
     dispatch(increment())
   }

   const handleDecrement = () => {
    // mengambil action decrement dari slice menggunakan dispatch
    dispatch(decrement())
   }
   
   

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Tambah</button>
      <button onClick={handleDecrement}>Kurang</button>
      <Link to="/counter2">Ke Counter 2</Link>
    </div>
  )
}
