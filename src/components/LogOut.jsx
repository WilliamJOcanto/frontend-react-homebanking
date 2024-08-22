import React from "react";
import { Link } from "react-router-dom";

function LogOut(props) {
  return (
    <div className="flex flex-col items-center absolute top-[40px] right-[40px]">
      <Link to="/sign-in">
        <img className="w-[27px] h-[27px]" src={props.src} alt="log-out" />
      </Link>
      <span className="text-white font-bold">Log out</span>
    </div>
  );
}

export default LogOut;
