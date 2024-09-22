import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadLoans = createAsyncThunk("loadLoans", async () => {
  const token = localStorage.getItem("token");

  try {
    const loans = await axios.get("http://localhost:8080/api/loans", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(loans.data);
    return loans.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});
