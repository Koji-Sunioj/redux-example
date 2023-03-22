import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetUser: () => initialState,
    setUser: (state, action) => {
      console.log(action);
      state.user = action.payload;
    },
  },
});

export const { resetUser, setUser } = userSlice.actions;
export default userSlice.reducer;
