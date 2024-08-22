import React from "react";
import { Link } from "react-router-dom";

function Buttons(props) {
  return (
    <div className="flex gap-6 justify-end font-semibold">
      <button
        className="border-2 border-[#FFFFFF] bg-[#32CD32] border-solid px-2 py-1 rounded-lg text-[#FFFFFF] text-lg"
        type="submit"
      >
        {props.confirmation}
      </button>
      <Link to={props.path}>
        <button
          className="border-2 border-[#FFFFFF] bg-[#FF0000] border-solid px-2 py-1 rounded-lg text-[#FFFFFF] text-lg"
          type="reset"
        >
          {props.cancel}
        </button>
      </Link>
    </div>
  );
}

export default Buttons;
