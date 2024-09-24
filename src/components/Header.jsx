import React from "react";
import Nav from "../components/Nav";
import ImgLogo from "../components/ImgLogo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="relative flex justify-center items-center border-b border-white border-solid h-[21vh] bg-[#16374e]">
      <Link to="/">
        <ImgLogo />
      </Link>

      <Nav />
    </header>
  );
}

export default Header;
