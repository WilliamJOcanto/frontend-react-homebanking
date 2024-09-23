import React from "react";
import Nav from "../components/Nav";
import ImgLogo from "../components/ImgLogo";

function Header() {
  return (
    <header className="relative flex justify-center items-center border-b border-white border-solid h-[21vh] bg-[#16374e]">
      <ImgLogo />
      <Nav />
    </header>
  );
}

export default Header;
