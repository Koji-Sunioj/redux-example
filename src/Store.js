import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./Api";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
