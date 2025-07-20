import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { decrement, getCounter, getDoubleCounter, increment } from './counterSlice';
import Counter2 from './Counter2';
import {Link} from "react-router"


export default function Counter() {
  // state.counter disini counternya harus sama namanya sesuai dengan key yang ada di configureStore
  // useSelector() digunakan untuk mengambil state yang ada di store global state
  // counter ini seperti state biasa
  const counter = useSelector(state => state.counter);  // state di didalam useSelector itu merupakan kumpulan semua statenya, nnti kalau kita membuat global state smpe puluhan akan disimpan didalam state tersebut, tapi karna kta ingin counternya saja maka ( state.counter )
  const doubleCounter = useSelector(getDoubleCounter);

  // selectors dengan parameter, cara penggunaanya berbeda dengan selector yang tanpa parameter
  const trippleCounter = useSelector( state => getCounter(state, 3))
   
   // dispatch ini digunakan untuk memanggil action yang kita export dari slice
   // dispatch ini seperti setStatenya
   const dispatch = useDispatch();

   const handleIncrement = () => {
     dispatch(increment())   // ini kita panggil actions increment sebagai function
   }

   const handleDecrement = () => {
    // mengambil action decrement dari slice menggunakan dispatch
    dispatch(decrement())
   }
   
   

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>getDoubleCounter: {doubleCounter}</h1>
      <h1>tripleCouter: {trippleCounter}</h1>
      <button onClick={handleIncrement}>Tambah</button>
        <button onClick={() => dispatch(increment(2))}>Tambah + 2</button>
      <button onClick={handleDecrement}>Kurang</button>
      <Link to="/counter2">Ke Counter 2</Link>
    </div>
  )
}
