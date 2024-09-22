import React from "react";

function TextArea({
  labelAreaForId,
  labelTitle,
  rows,
  cols,
  placeholder,
  onChange,
}) {
  return (
    <label
      className="flex flex-col gap-2 font-bold text-xl h-[20vh] w-[30vw]"
      for={labelAreaForId}
    >
      {labelTitle}
      <textarea
        className="font-semibold rounded-lg p-2 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
        id={labelAreaForId}
        name={labelAreaForId}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </label>
  );
}

export default TextArea;
