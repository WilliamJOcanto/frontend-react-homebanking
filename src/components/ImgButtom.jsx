import React from "react";

function ImgButtom(props) {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <img className={props.imgStyle} src={props.imgSrc} alt={props.imgAlt} />
      {props.children}
    </div>
  );
}

export default ImgButtom;
