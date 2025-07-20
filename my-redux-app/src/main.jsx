import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import { counterSlice } from "./counterSlice.js";
import Counter from "./counter.jsx";
import Counter2 from "./Counter2.jsx";
import { todoListSlice } from "./todoListSlice.js";
import ListTodo from "./ListTodo.jsx";
import AddTodo from "./AddTodo.jsx";
import UpdateTodo from "./UpdateTodo.jsx";

const store = configureStore({
  // configureStore digunakan untuk membuat store
  reducer: {
    // kita registrasikan reducer yang kita buat menggunakan slice tdi dari counterSlice.js
    counter: counterSlice.reducer, // nama kunci counter di sini bebas tpi bisa mencerminkan nama slicenya
    todoList: todoListSlice.reducer
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
           <Route path={"/todolist"} element={<ListTodo/>}/>
          <Route path={"/todolist/add"} element={<AddTodo/>}/>
          <Route path="/todoList/:id/edit" element={<UpdateTodo/>}/>
          <Route path={"/"} element={<App />} />
          <Route
            path={"/counter"}
            element={
              <>
                <Counter />
                <Counter />
              </>
            }
          />
          <Route path={"/counter2"} element={<Counter2 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
