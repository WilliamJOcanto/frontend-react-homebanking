import React from "react";

function CardContainer(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default CardContainer;
