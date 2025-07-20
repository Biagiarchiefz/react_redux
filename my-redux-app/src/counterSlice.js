import { createSlice } from "@reduxjs/toolkit";


// slice berisikan state dan reducer
// setelah kita membuat state menggunakan slice, kita perlu registrasikan reducernya dari slice tersebut di store
export const counterSlice = createSlice({
  name: "counter",  // nama slice
  initialState: 0,  // nilai awal state
  reducers: { 
    // di dalam reducer ini adalah action, action ini digunakan untuk mengubah nilai dari statenya
    increment: (state, action) => {   // parameter state itu merupakan nilai state saat ini dan action merupakan parameter yang digunakan untuk menangkap nilai yang kita masukkan pada saat function increment di panggil
      if (action.payload) {           // action parameter ini nnti menjadi berupa object, nahh nilai yang kita masukkan pada argumen parameter saat memanggil actions increment tersebut, akan masukan ke action lalu diletakkan di ( action.payload ) 
        return state + action.payload
      } else {
        return state + 1     // ini kita return data state barunya
      }   
    },
    decrement: (state, action) => {
      return state - 1
    }
  },

  selectors: {
      getDoubleCounter ( state ) {  // parameter state merupakan nilai yang sudah kita manipulasi
          return state * 2         // ketika ada perubahan di statenya otomasi selectors getDoubleCounter akan di trigger perubahanya, 
      },
      getCounter : (state, value) => {
          return state * value
      }
  }

})

// setelah kita buat actionsnya, lalu kita export menggunakan teknik distrukturing dari actions buka dari reducers
export const {increment, decrement } = counterSlice.actions;

export const {getDoubleCounter, getCounter} = counterSlice.selectors;

export default counterSlice.reducer;