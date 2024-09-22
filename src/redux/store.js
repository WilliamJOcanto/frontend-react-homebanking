import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./reducers/authenticationReducer";
import userReducer from "./reducers/userReducer";
import loanReducer from "./reducers/loanReducer";

const store = configureStore({
  reducer: {
    authenticationReducer,
    userReducer,
    loanReducer,
  },
});

export default store;
