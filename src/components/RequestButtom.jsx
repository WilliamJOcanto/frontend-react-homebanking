import React from "react";

function RequestButtom(props) {
  return (
    <div className="justify-center">
      <button onClick={props.onClick} className={props.className}>
        {props.text}
      </button>
    </div>
  );
}

export default RequestButtom;
