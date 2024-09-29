import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import SelectContainer from "../components/SelectContainer";
import Buttons from "../components/Buttons";
import InputContainer from "../components/InputContainer";
import InputRadioContainer from "../components/InputRadioContainer";
import InputRadio from "../components/InputRadio";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";
import axios from "axios";

function MakeTransaction() {
  const [sourceAccount, setSourceAccount] = useState("");
  const [destinationAccount, setDestinationAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const accountsClient = useSelector(
    (state) => state.userReducer.userData.accounts
  );
  const [selectedValue, setSelectedValue] = useState("");

  const handleOpenModal = (e) => {
    e.preventDefault();

    if (!sourceAccount && !destinationAccount && !amount && !description) {
      setMessage("No fields have been filled out.");
      return; // No abrir el modal
    }

    setMessage("");
    setIsModalOpen(true);
  };

  const confirmTransaction = async (e) => {
    e.preventDefault();

    const idAccount = accountsClient.find(
      (account) => account.number === sourceAccount
    )?.id;

    const makeTransaction = {
      sourceAccount: sourceAccount,
      destinationAccount: destinationAccount,
      amount: amount,
      description: description,
    };

    const token = localStorage.getItem("token");

    axios
      .post(
        "https://backend-java-homebanking.onrender.com/api/transactions",
        makeTransaction,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        navigate(`/account/${idAccount}`, {
          state: { message: response.data + " !" },
        });
      })
      .catch((error) => {
        setMessage(error.response.data);
        console.log(error.response.data);
      });

    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const radioValueChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const textDestinationClass = selectedValue === "others" ? "inline" : "hidden";
  const selectDestinationClass = selectedValue === "own" ? "inline" : "hidden";

  const accountSelectedBalance = sourceAccount
    ? accountsClient.find((account) => account.number === sourceAccount)
        ?.balance
    : 0;

  return (
    <main className="border border-solid min-h-[calc(100vh-23vh)] bg-[#D9D9D9]">
      <h1 className="text-shadow border-2 border-solid border-[#4C4C4A] underline text-4xl font-bold text-center bg-[#16374e] text-white w-[30vw] h-[10vh] py-1 text-center mx-auto my-6 rounded-lg">
        Make a transaction
      </h1>
      <FormContainer
        imgStyle="border border-solid border-[#4B4B4B] rounded-xl w-[500px] h-[350px] ml-12"
        src="./img-transaction.jpg"
        formStyle="flex justify-center w-[400px] h-fit mx-auto py-6"
        fieldsetStyle="flex flex-col items-center justify-center gap-3"
        containerStyle="flex items-center justify-center w-[78vw] min-h-[76vh] border border-solid border-[#4C4C4A] bg-[#A1ADAD] mx-auto my-8  rounded-xl shadow-[7px_7px_5px_rgba(0,0,0,0.7)] "
        onSubmit={handleOpenModal}
      >
        <InputRadioContainer>
          <InputRadio
            labelInputForIdValue="own"
            labelTitle="Own"
            inputName="destination-type"
            onChange={radioValueChange}
          />

          <InputRadio
            labelInputForIdValue="others"
            labelTitle="Others"
            inputName="destination-type"
            onChange={radioValueChange}
          />
        </InputRadioContainer>

        <SelectContainer
          labelTitle="Source account"
          labelSelectForId="source-account"
          optionExample="Ex. VINXXX"
          divStyle="w-[30vw]"
          onChange={(e) => setSourceAccount(e.target.value)}
          arrayItems={accountsClient.map((account) => account.number)}
        />
        {sourceAccount &&
          (() => {
            const formattedBalance = accountSelectedBalance.toLocaleString(
              "en-US",
              {
                style: "decimal",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            );

            return (
              <span className="font-bold">
                Available balance: ${formattedBalance}
              </span>
            );
          })()}

        <SelectContainer
          divStyle={`${selectDestinationClass} w-[30vw]`}
          labelTitle="Destination account"
          labelSelectForId="destinacion-account"
          optionExample="Ex. VINXXX"
          onChange={(e) => setDestinationAccount(e.target.value)}
          arrayItems={accountsClient
            .filter((account) => account.number !== sourceAccount)
            .map((account) => account.number)}
        />

        <InputContainer
          labelStyle={`flex flex-col gap-2 font-bold text-xl w-[30vw] ${textDestinationClass}`}
          labelInputForId="destinacion-account"
          labelTitle="Destination account"
          inputStyle="font-semibold rounded-lg p-2 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
          inputType="text"
          inputPlaceholder="Ex. VINXXX"
          onChange={(e) => setDestinationAccount(e.target.value)}
        />

        <InputContainer
          labelStyle="flex flex-col gap-2 font-bold text-xl w-[30vw]"
          labelInputForId="amount-transaction"
          labelTitle="Amount"
          inputStyle="font-semibold rounded-lg p-2 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
          inputType="number"
          inputPlaceholder="$0.00"
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <TextArea
          labelAreaForId="description-transactions"
          labelTitle="Description:"
          rows="4"
          cols="50"
          placeholder="Ex. Salary payment"
          onChange={(e) => setDescription(e.target.value)}
        />

        <Buttons confirmation="Send money" cancel="Cancel" path="/" />
        <span className="text-lg text-red-700 font-bold text-center">
          {message}
        </span>
      </FormContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={confirmTransaction}
        message="Are you sure you want to request a loan? This action cannot be undone."
        modalStyle="flex flex-col justify-center items-center gap-4 fixed bg-[#5F6F65] border-2 border-solid border-[#3C3D37] text-white pt-2 px-2 top-[200px] left-[195px] w-[36vw] h-[30vh] rounded-xl text-shadow"
      />
    </main>
  );
}

export default MakeTransaction;
