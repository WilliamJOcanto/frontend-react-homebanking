import React from "react";

function InputContainer({
  labelStyle,
  labelInputForId,
  labelTitle,
  inputStyle,
  inputType,
  inputPlaceholder,
  onChange,
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
        onChange={onChange}
      />
    </label>
  );
}

export default InputContainer;
