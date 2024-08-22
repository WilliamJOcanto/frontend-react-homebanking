import React from "react";

function InputContainer({
  labelStyle,
  labelInputForId,
  labelTitle,
  inputStyle,
  inputType,
  inputPlaceholder,
  max,
  min,
}) {
  return (
    <label className={labelStyle} htmlFor={labelInputForId}>
      {labelTitle}
      <input
        className={inputStyle}
        type={inputType}
        id={labelInputForId}
        placeholder={inputPlaceholder}
        name={labelInputForId}
        max={max}
        min={min}
      />
    </label>
  );
}

export default InputContainer;
