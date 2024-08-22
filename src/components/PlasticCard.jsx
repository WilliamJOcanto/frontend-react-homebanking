import React from "react";

function PlasticCard(props) {
  return (
    <div className={props.className}>
      <div className="flex justify-between">
        <img className="w-[70px] h-[50px]" src="./chip.png" alt="chip" />
        <span className="text-2xl">{props.type}</span>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl">{props.number}</p>
        <p className="font-bold">CVV {props.cvv}</p>
      </div>
      <div className="flex justify-between">
        <p>{props.cardHolder}</p>
        <span>{props.truDate}</span>
      </div>
    </div>
  );
}

export default PlasticCard;
