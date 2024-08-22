import React from "react";

function InputRadio({ labelInputForIdValue, labelTitle, inputName, onChange }) {
  return (
    <label for={labelInputForIdValue}>
      {labelTitle}
      <input
        className="ml-4"
        type="radio"
        id={labelInputForIdValue}
        name={inputName}
        value={labelInputForIdValue}
        onChange={onChange}
      />
    </label>
  );
}

export default InputRadio;
