import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import postsReducer from "./postsSlice";

const appStore = configureStore({
    reducer :{
       user: userReducer,
       posts: postsReducer
    }
})

export default appStore;