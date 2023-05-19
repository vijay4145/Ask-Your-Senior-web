import { configureStore } from "@reduxjs/toolkit";
import BookSearchSlice from "./BookSearchSlice";
import AddBookSlice from "./AddBookSlice";
import AddProjectSlice from "./AddProjectSlice";
export const store = configureStore({
    reducer: {
        BookSearchSlice,
        AddBookSlice,
        AddProjectSlice
    },
  });
  