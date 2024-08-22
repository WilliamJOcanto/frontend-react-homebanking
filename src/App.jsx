// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Accounts />} />

            <Route path="/apply-card" element={<ApplyCard />}></Route>
            <Route path="/apply-loan" element={<ApplyLoan />}></Route>
            <Route path="/cards" element={<Cards />}></Route>
            <Route path="/loans" element={<Loans />}></Route>
            <Route path="/transactions" element={<MakeTransaction />}></Route>
            <Route path="/account/:id" element={<Account />}></Route>
          </Route>

          <Route path="/" element={<OnlyFooter />}>
            <Route path="sign-in" element={<SignIn />}></Route>
            <Route path="sign-up" element={<SignUp />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
