import { createSlice } from "@reduxjs/toolkit";


// slice berisikan state dan reducer
// setelah kita membuat state menggunakan slice, kita perlu registrasikan reducernya dari slice tersebut di store
export const counterSlice = createSlice({
  name: "counter",  // nama slice
  initialState: 0,
  reducers: { 
    // di dalam reducer ini adalah action, action ini untuk mengubah nilai state
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1 
    }

  }
})

// setelah kita buat actionsnya, lalu kita export menggunakan teknik distrukturing dari actions buka dari reducers
export const {increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;