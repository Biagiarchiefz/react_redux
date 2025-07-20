import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { getTodo, updateTodo } from './todoListSlice';

export default function UpdateTodo() {

  const params = useParams();
  console.log(params)
  
  const todo = useSelector((state) => getTodo(state, Number(params.id)));   // ingat parameter state-nya itu merupakan seluruh state yang ada di store redux, return selector getTodo berupa object todo dari array state yang id-nya sama seperti id url yang kita kirim
  console.log(todo)  // isi dari variabel todo berupa object {name: belajar, id: 0}

  const [name, setName] = useState(todo.name)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleUpdateTodo(){
    dispatch(updateTodo({id: todo.id, name: name}))
    navigate({
      pathname: "/todoList"
    })
  }

  return (
    <div>
      <h1>Edit Todo</h1>
      <input type="text" value={name} placeholder='masukkan todo anda' onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleUpdateTodo}>Edit</button>
    </div>
  )
}
