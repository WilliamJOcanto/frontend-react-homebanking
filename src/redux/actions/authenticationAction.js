import { createAction } from "@reduxjs/toolkit";

export const loginAction = createAction("loginAction", (data) => {
  let user = {
    token: data,
    isLoggedIn: true,
  };

  localStorage.setItem("token", data);
  return {
    payload: user,
  };
});

export const logoutAction = createAction("logoutAction", () => {
  return {
    payload: {},
  };
});
