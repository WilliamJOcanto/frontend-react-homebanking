import React from "react";

function ImgForms(props) {
  return (
    <div>
      <img className={props.imgStyle} src={props.src} alt={props.alt} />
    </div>
  );
}

export default ImgForms;
