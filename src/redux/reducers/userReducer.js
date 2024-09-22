import { createReducer } from "@reduxjs/toolkit";
import { loadUser } from "../actions/userAction";
import { updateAccounts } from "../actions/userAction";
import { updateCards } from "../actions/userAction";

const initialState = {
  userData: {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    accounts: [],
    loans: [
      {
        id: 0,
        loanid: 0,
        name: "",
        amount: 0.0,
        payments: 0,
      },
    ],
    cards: [],
  },
  status: "idle",
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUser.fulfilled, (state, action) => {
      return {
        ...state,
        userData: action.payload,
        status: "success",
      };
    })
    .addCase(loadUser.pending, (state) => {
      return {
        ...state,
        status: "pending",
      };
    })
    .addCase(loadUser.rejected, (state, action) => {
      return {
        ...state,
        status: "rejected",
        error: action.payload,
      };
    })
    .addCase(updateAccounts.fulfilled, (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          accounts: action.payload,
        },
      };
    })
    .addCase(updateAccounts.pending, (state) => {
      return {
        ...state,
        status: "pending",
      };
    })
    .addCase(updateAccounts.rejected, (state, action) => {
      return {
        ...state,
        status: "rejected",
        error: action.payload,
      };
    })
    .addCase(updateCards.fulfilled, (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          cards: action.payload,
        },
      };
    })
    .addCase(updateCards.pending, (state) => {
      return {
        ...state,
        status: "pending",
      };
    })
    .addCase(updateCards.rejected, (state, action) => {
      return {
        ...state,
        status: "rejected",
        error: action.payload,
      };
    });
});

export default userReducer;
