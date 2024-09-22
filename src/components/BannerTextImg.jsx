import React from "react";

function BannerTextImg(props) {
  return (
    <div className={props.ContainerStyle}>
      <div className={props.ContainerTextStyle}>
        <p className={props.titleStyle}>{props.title}</p>
        <span className={props.textStyle}>{props.text}</span>
        <ul className={`list-disc pl-5 text-lg ${props.ulStyle}`}>
          <li>View your accounts</li>
          <li>
            Request a new account: Click the button to start the process
            <br />
            (remember that you can have a maximum of 3 accounts).
          </li>
          <li>
            Access your transactions: Click on any account to see its movements.
          </li>
        </ul>
      </div>
      {props.children}
    </div>
  );
}

export default BannerTextImg;
