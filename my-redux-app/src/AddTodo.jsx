import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoListSlice';
import { useNavigate } from 'react-router';

export default function AddTodo() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleAddTodo() {
      dispatch(addTodo({name: name})); // pada saat kita memanggil action addTodo dia kan menerima parameter, nah parameternya kita kirim berupa object dengan key name dan valuenya dari state yang nilainya dimasukan oleh user
      navigate({
        pathname: '/todoList',
      }); 
  }
  return (
    <div>
      <h1>Add Todo</h1>
      <input type="text" placeholder='masukan name todo anda' onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleAddTodo}>Tambahkan</button>
    </div>
  )
}
