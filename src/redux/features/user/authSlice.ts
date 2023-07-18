import { createSlice } from "@reduxjs/toolkit";

export const authState = {
  token: localStorage.getItem("token") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = "";
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
