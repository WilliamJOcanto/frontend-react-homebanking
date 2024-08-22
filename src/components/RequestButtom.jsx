import React from "react";

function RequestButtom(props) {
  return (
    <div>
      <button className={props.className}>{props.text}</button>
    </div>
  );
}

export default RequestButtom;
