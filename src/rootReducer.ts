import { combineReducers } from "@reduxjs/toolkit";
import user from "./Slices/user";

const reducer = combineReducers({
  user,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
