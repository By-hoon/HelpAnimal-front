import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "../shared/Props";

export const user = createSlice({
  name: "user",
  initialState: {} as UserProps,
  reducers: {
    setUser(state, action: PayloadAction<UserProps>) {
      return action.payload;
    },
  },
});

export const { setUser } = user.actions;
export default user.reducer;
