import React from "react";
import ImgForms from "./ImgForms";

function FormContainer(props) {
  return (
    <div className={props.containerStyle}>
      <ImgForms imgStyle={props.imgStyle} src={props.src} alt={props.alt} />
      <form onSubmit={props.onSubmit} className={props.formStyle} method="POST">
        <fieldset className={props.fieldsetStyle}>{props.children}</fieldset>
      </form>
    </div>
  );
}

export default FormContainer;
