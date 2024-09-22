import React from "react";

function SelectContainer({
  divStyle,
  labelTitle,
  labelSelectForId,
  onChange,
  optionExample,
  arrayItems,
}) {
  return (
    <div className={`flex flex-col gap-2 ${divStyle}`}>
      <label className="font-bold text-xl" htmlFor={labelSelectForId}>
        {labelTitle}
      </label>
      <select
        className="font-semibold rounded-lg p-3 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
        name={labelSelectForId}
        id={labelSelectForId}
        onChange={onChange}
      >
        <option value="" selected>
          {optionExample}
        </option>
        {arrayItems.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectContainer;
