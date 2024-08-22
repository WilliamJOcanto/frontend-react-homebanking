import React from "react";
import FormContainer from "../components/FormContainer";
import Buttons from "../components/Buttons";
import SelectContainer from "../components/SelectContainer";

function ApplyCard() {
  const cardType = ["DEBIT", "CREDIT"];
  const cardColor = ["SILVER", "GOLD", "PLATINUM"];
  return (
    <main className="border border-solid min-h-[calc(100vh-23vh)] bg-[#48a6f4]">
      <h1 className="border border-solid border-[#f2c036] text-4xl font-bold text-center mt-8 bg-[#16374e] text-white w-[40vw] py-2 text-center mx-auto my-10 shadow-[8px_8px_6px_rgba(0,0,0,0.7)] rounded-xl">
        Apply for a Card
      </h1>

      <FormContainer
        imgStyle="w-[36vw] h-[53vh] ml-14"
        alt="cards-img"
        src="./cards-img.png"
        formStyle="flex flex-col justify-center w-[400px] h-[300px] mx-auto px-8 pt-6"
        fieldsetStyle="flex flex-col gap-10"
        containerStyle="flex items-center justify-center w-[88vw] h-[80vh] border border-solid border-[#f2c036] mx-auto my-10 bg-[#D9D9D9] rounded-xl shadow-[7px_7px_5px_rgba(0,0,0,0.7)]"
      >
        <SelectContainer
          labelTitle="Select card type"
          labelSelectForId="card-type"
          optionExample="Ex. Debit"
          arrayItems={cardType}
        />

        <SelectContainer
          labelTitle="Select card membership"
          labelSelectForId="card-membership"
          optionExample="Ex. Gold"
          arrayItems={cardColor}
        />
        <Buttons confirmation="Apply" cancel="Cancel" path="/cards" />
      </FormContainer>
    </main>
  );
}

export default ApplyCard;
