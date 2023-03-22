import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("fetch-users", async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
});

const init = {
  data: null,
  loading: false,
  error: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: init,
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default usersSlice.reducer;
