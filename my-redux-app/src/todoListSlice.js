import { createSlice } from "@reduxjs/toolkit";

let id = 0;

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const {name} = action.payload;
      state.push({name: name, id: id++})
    },
    removeTodo: (state, action) => {
      const {id} = action.payload;
      const index = state.findIndex(todo => todo.id === id);  // parameter todo itu untuk mewakili setiap item (object) yang ada didalam array, satu per satu
      if ( index !== -1 ){
        state.splice(index, 1)   
      }
    },

    updateTodo: (state, action) => {
      const {id, name} = action.payload;
      const todo = state.find(todo => todo.id === id);  // cek setiap todo, apakah todo.id sama dengan id yang kita cari. state.find(...) digunakan untuk mencari 1 todo berdasarkan id, dan menyimpannya ke variabel todo
      if(todo) {  // jika todonya ada nilainya tidak undifine atau null 
        todo.name = name   // maka kita ubah value namenya menjadi nilai baru yang dikirim lewat action.payload
      }
    }

  },

  selectors: {
    getTodo(state, id) {
      return state.find(todo => todo.id === id); // todo mewakili setiap element yang ada di dalam array, hasil return .find() berupa elementnya dari array
    },

  }

})

export const {addTodo, removeTodo, updateTodo } = todoListSlice.actions;

export const {getTodo} = todoListSlice.selectors;