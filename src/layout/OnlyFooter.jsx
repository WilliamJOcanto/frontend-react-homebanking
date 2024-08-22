import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function OnlyFooter() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default OnlyFooter;
