## RTK Asynchronous Action
RTK menyediakan dukungan middleware seperti redux thunk secara bawaan untuk menanggani async action

### postSlice.js
``` jsx
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// middleware redux thunk bawaan redux toolkit
export const fetchPost = createAsyncThunk("post/fetchPost", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // data dari fetchPost otomatis masuk ke sini, lalu kita bisa set value dari state globalnyya dengan data yang di dapatkan
      })
      .addCase(fetchPost.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default postSlice.reducer;

```


### store.js
``` jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/CounterSlice"
import postReducer from "./Post/PostSlice"


export const store = configureStore({
    reducer: {    // mendaftarkan ke store, key yang ada di dalam object reducer itu disesuikan saja dengan name yang ada di slicenya
      counter: counterReducer,
      post: postReducer
    }
})
```

### components PostList.jsx
```jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/Post/PostSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.post.items);
  const status = useSelector((state) => state.post.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPost());
    }
  }, []);


  if ( status == 'loading'){
    return (
      <div className="">Loading</div>
    )
  }

  if ( status == 'failed'){
    return (
      <div className="">failed fetching post</div>
    )
  }

  return (
    <div>
      <ul>
        {items.map((items) => (
          <li key={items.id}>{items.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

```

