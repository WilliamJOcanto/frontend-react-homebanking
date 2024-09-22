import React from "react";
import { Link } from "react-router-dom";

function SingleButton({
  linkStyle,
  containerStyle,
  buttonStyle,
  buttonText,
  link,
  linkText,
}) {
  return (
    <div className={containerStyle}>
      <button type="submit" className={buttonStyle}>
        {buttonText}
      </button>
      <span>o</span>
      <div>
        <Link to={link}>
          <span className={linkStyle}>{linkText}</span>
        </Link>
      </div>
    </div>
  );
}

export default SingleButton;
