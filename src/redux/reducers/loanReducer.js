import { createReducer } from "@reduxjs/toolkit";
import { loadLoans } from "../actions/loanAction";

const initialState = {
  availableLoans: [],
  status: "idle",
};

const loanReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadLoans.fulfilled, (state, action) => {
      return {
        ...state,
        availableLoans: action.payload,
        status: "success",
      };
    })
    .addCase(loadLoans.pending, (state) => {
      state.status = "loading";
    })
    .addCase(loadLoans.rejected, (state) => {
      state.status = "failed";
    });
});

export default loanReducer;
