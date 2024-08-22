import React from "react";

function InputRadioContainer({ children, spanText }) {
  return (
    <div className="flex justify-between font-bold text-xl mb-4">
      <span>{spanText}</span>
      {children}
    </div>
  );
}

export default InputRadioContainer;

{
  /* <span>Destination type:</span> */
}
