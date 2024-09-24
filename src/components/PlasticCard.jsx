import React from "react";

function PlasticCard(props) {
  return (
    <div className={props.className}>
      <div className="flex justify-between">
        <img className="w-[70px] h-[50px]" src="./chip.png" alt="chip" />
        <span className="text-2xl">{props.type}</span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-2xl">{props.number}</p>
        <p className="font-bold">CVV {props.cvv}</p>
      </div>
      <div className="flex justify-between items-center">
        <span>{props.cardHolder}</span>
        <div className="flex flex-col gap-1">
          <span>From: {props.fromDate}</span>
          <span>Thru: {props.truDate}</span>
        </div>
      </div>
    </div>
  );
}

export default PlasticCard;
