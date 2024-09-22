import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogOut from "../components/LogOut";

function Nav() {
  const [navLink, setNavLink] = useState([
    { text: "Accounts", to: "/" },
    { text: "Cards", to: "/cards" },
    { text: "Loans", to: "/loans" },
    { text: "Transactions", to: "/transactions" },
  ]);

  return (
    <nav className="flex gap-16 justify-center items-center h-full">
      {navLink.map((link) => (
        <Link
          className="text-lg border-2 border-solid border-white h-[37px] w-[125px] text-center content-center bg-[#f2c036] text-[#16374e] font-bold shadow-[0px_6px_6px_rgba(0,0,0,0.6)] transition-colors duration-[0.6s] hover:text-black hover:border-[#f2c036] hover:border-4 transition-transform hover:translate-y-[-5px]"
          to={link.to}
        >
          {link.text}
        </Link>
      ))}
      <LogOut src="./logOut.png" />
    </nav>
  );
}

export default Nav;
