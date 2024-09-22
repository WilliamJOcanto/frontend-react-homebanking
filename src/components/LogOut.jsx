import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction } from "../redux/actions/authenticationAction";

function LogOut(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.clear();
    dispatch(logoutAction());
    navigate("/sign-in");
  };

  return (
    <div className="flex flex-col items-center absolute top-[20px] right-[60px]">
      <Link to="/sign-in" onClick={handleLogOut}>
        <img className="w-[5vw] h-[11vh]" src={props.src} alt="log-out" />
      </Link>
      <span className="text-white font-bold text-shadow">Log out</span>
    </div>
  );
}

export default LogOut;
