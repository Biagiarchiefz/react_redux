import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from './todoListSlice';
import { Link } from 'react-router';

export default function ListTodo() {

  // ingat parameter state itu ada seluruh state yang ada distore, tetapi kita ingin ambil global state todoListnya saja
  // variabel todos ini menjadi seperti state biasa yang ada di react dasar
    const todos = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  function handleDeleteTodo(id) {
    dispatch(removeTodo({id: id}));
  }

  return (
      <div>
      <h1>List Todo</h1>
      <Link to={"/todolist/add"}>Add Todo</Link>

      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.name}</td>
            <td>
              <Link to={`/todolist/${todo.id}/edit`}>Update</Link>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
