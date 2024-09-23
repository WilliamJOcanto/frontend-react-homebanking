import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import Buttons from "../components/Buttons";
import SelectContainer from "../components/SelectContainer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../components/Modal";

function ApplyCard() {
  const [cardType, setCardType] = useState("");
  const [cardMembership, setCardMembership] = useState("");
  const cardTypeOptions = ["DEBIT", "CREDIT"];
  const cardColorOptions = ["SILVER", "GOLD", "TITANIUM"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const confirmApplyCard = async (e) => {
    e.preventDefault();

    const user = {
      cardType: cardType,
      cardMembership: cardMembership,
    };

    const token = localStorage.getItem("token");

    axios
      .post(
        "https://backend-java-homebanking.onrender.com/api/clients/current/cards",
        user,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setMessage(response.data);
        navigate("/cards", {
          state: { message: response.data + " !" },
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        setMessage(error.response.data);
      });

    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="border border-solid min-h-[calc(100vh-23vh)] bg-[#D9D9D9]">
      <h1 className="text-shadow border-2 border-solid border-[#4C4C4A] underline text-4xl font-bold text-center bg-[#16374e] text-white w-[26vw] h-[10vh] py-1 text-center mx-auto my-6 rounded-lg">
        Apply for a Card
      </h1>

      <FormContainer
        imgStyle="w-[36vw] h-[55vh] ml-14"
        alt="cards-img"
        src="./cards-img.png"
        formStyle="flex flex-col justify-center items-center w-[400px] h-fit mx-auto px-8 py-4"
        fieldsetStyle="flex flex-col items-center gap-4"
        containerStyle="flex items-center justify-center w-[80vw] min-h-[56vh] border border-solid border-[#4C4C4A] mx-auto my-8 bg-[#A1ADAD] rounded-xl shadow-[7px_7px_5px_rgba(0,0,0,0.7)]"
        onSubmit={handleOpenModal}
      >
        <SelectContainer
          labelTitle="Select card type"
          labelSelectForId="cardType"
          optionExample="Ex. Debit"
          divStyle="w-[25vw]"
          arrayItems={cardTypeOptions}
          onChange={(e) => setCardType(e.target.value)}
        />

        <SelectContainer
          labelTitle="Select card membership"
          labelSelectForId="cardMembership"
          optionExample="Ex. Gold"
          divStyle="w-[25vw]"
          arrayItems={cardColorOptions}
          onChange={(e) => setCardMembership(e.target.value)}
        />

        <span className="text-lg text-red-700 font-bold ">{message}</span>

        <Buttons confirmation="Apply" cancel="Cancel" path="/cards" />
      </FormContainer>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={confirmApplyCard}
        message="Are you sure you want to request a card of the selected type and membership? This action cannot be undone."
        modalStyle="flex flex-col justify-center items-center gap-4 fixed bg-[#5F6F65] border-2 border-solid border-[#3C3D37] text-white pt-2 px-2 top-0 left-0 right-0 bottom-0 w-[36vw] h-[30vh] m-auto rounded-xl text-shadow"
      />
    </main>
  );
}

export default ApplyCard;
