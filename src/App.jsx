// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Accounts from "./pages/Accounts";
import MainLayout from "./layout/MainLayout";
import ApplyCard from "./pages/ApplyCard";
import ApplyLoan from "./pages/ApplyLoan";
import Loans from "./pages/Loans";
import MakeTransaction from "./pages/MakeTransaction";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import OnlyFooter from "./layout/OnlyFooter";
import Cards from "./pages/Cards";
import Account from "./pages/Account";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/userAction";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state) => state.authenticationReducer.isLoggedIn
  );

  // Verificamos si hay un token y cargamos el usuario si existe
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loadUser());
    }
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <MainLayout /> : <Navigate to="/sign-in" />}
          >
            <Route index element={<Accounts />} />
            <Route path="/apply-card" element={<ApplyCard />}></Route>
            <Route path="/apply-loan" element={<ApplyLoan />}></Route>
            <Route path="/cards" element={<Cards />}></Route>
            <Route path="/loans" element={<Loans />}></Route>
            <Route path="/transactions" element={<MakeTransaction />}></Route>
            <Route path="/account/:id" element={<Account />}></Route>
          </Route>

          <Route element={<OnlyFooter />}>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
