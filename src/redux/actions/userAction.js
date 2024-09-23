import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadUser = createAsyncThunk("loadUser", async () => {
  const token = localStorage.getItem("token");

  try {
    const userCurrent = await axios.get(
      "https://backend-java-homebanking.onrender.com/api/auth/current",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(userCurrent.data);

    return userCurrent.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});

export const updateAccounts = createAsyncThunk("updateAccounts", async () => {
  const token = localStorage.getItem("token");

  try {
    const accounts = await axios.get(
      "http://localhost:8080/api/accounts/clients/current/accounts",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return accounts.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});

export const updateCards = createAsyncThunk("updateCards", async () => {
  const token = localStorage.getItem("token");

  try {
    const cards = await axios.get(
      "http://localhost:8080/api/clients/current/cards",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return cards.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});
