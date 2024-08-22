import React from "react";
import Nav from "../components/Nav";
import ImgLogo from "../components/imgLogo";

function Header() {
  return (
    <header className="relative flex justify-center items-center border-b-2 border-[#f2c036] border-solid h-[21vh] bg-[#16374e]">
      <ImgLogo />
      <Nav />
    </header>
  );
}

export default Header;
