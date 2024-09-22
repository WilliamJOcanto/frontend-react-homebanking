import { createReducer } from "@reduxjs/toolkit";
import { loginAction, logoutAction } from "../actions/authenticationAction";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  isLoggedIn: !!localStorage.getItem("token"), // True si hay un token
};

const authenticationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginAction, (state, action) => {
      return {
        ...state,
        token: action.payload.token,
        isLoggedIn: true,
      };
    })
    .addCase(logoutAction, (state) => {
      return {
        ...state,
      };
    });
});

export default authenticationReducer;
