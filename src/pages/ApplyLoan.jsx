import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import SelectContainer from "../components/SelectContainer";
import InputContainer from "../components/InputContainer";
import Buttons from "../components/Buttons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Modal from "../components/Modal";

function ApplyLoan() {
  const [loanSelected, setLoanSelected] = useState("");
  const [accountSelected, setAccountSelected] = useState("");
  const [amount, setAmount] = useState(0);
  const [payments, setPayments] = useState(0);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const allLoans = useSelector((state) => state.loanReducer.availableLoans);
  const accountsClient = useSelector(
    (state) => state.userReducer.userData.accounts
  );

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const confirmApplyLoan = async (e) => {
    e.preventDefault();

    const selectedLoan = allLoans.find((loan) => loan.name === loanSelected);
    const idLoan = selectedLoan ? selectedLoan.id : "";

    const idAccount = accountsClient.find(
      (account) => account.number === accountSelected
    )?.id;

    if (!idLoan) {
      setMessage("Please select a loan");
      setIsModalOpen(false);
      return;
    }

    const loanApplication = {
      id: idLoan,
      sourceAccount: accountSelected,
      amount: amount,
      payment: payments,
    };

    const token = localStorage.getItem("token");

    axios
      .post("http://localhost:8080/api/loans", loanApplication, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMessage(response.data);
        navigate(`/account/${idAccount}`, {
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

  const maxAmountNumber = loanSelected
    ? allLoans.find((loan) => loan.name === loanSelected)?.maxAmount
    : 0;

  return (
    <main className="border border-solid min-h-[calc(100vh-23vh)] bg-[#D9D9D9]">
      <h1 className="text-shadow border-2 border-solid border-[#4C4C4A] text-4xl font-bold text-center bg-[#16374e] text-white w-[23vw] h-[10vh] underline py-1 text-center mx-auto my-6 rounded-lg">
        ApplyLoan
      </h1>
      <FormContainer
        imgStyle="border border-solid border-[#4B4B4B] rounded-xl w-[500px] h-[350px] ml-12"
        src="./img-loans.jpg"
        formStyle="flex justify-center w-[500px] h-fit mx-auto py-4"
        fieldsetStyle="flex flex-col justify-center items-center gap-3 w-full"
        containerStyle="flex items-center justify-start w-[82vw] min-h-[78vh] border border-solid border-[#4C4C4A] mx-auto my-8  bg-[#A1ADAD] rounded-xl shadow-[7px_7px_5px_rgba(0,0,0,0.7)]"
        onSubmit={handleOpenModal}
      >
        <SelectContainer
          labelTitle="Select loan"
          labelSelectForId="select-loan"
          optionExample="Ex. Mortgage"
          arrayItems={allLoans.map((loan) => loan.name)}
          onChange={(e) => setLoanSelected(e.target.value)}
          divStyle="w-[30vw]"
        />

        <SelectContainer
          labelTitle="Select an account"
          labelSelectForId="source-account"
          optionExample="Ex. VINXXX"
          divStyle="w-[30vw]"
          arrayItems={accountsClient.map((account) => account.number)}
          onChange={(e) => setAccountSelected(e.target.value)}
        />

        {loanSelected &&
          (() => {
            const formattedMaxAmount = maxAmountNumber.toLocaleString("en-US", {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });

            return (
              <span className="font-bold">
                Maximum amount allowed: ${formattedMaxAmount}
              </span>
            );
          })()}
        <InputContainer
          labelStyle="flex flex-col gap-2 font-bold text-xl mt[-10px]"
          labelInputForId="amount-loan"
          labelTitle="Amount"
          inputStyle="font-semibold rounded-lg p-2 border border-solid border-[#4B4B4B] bg-[#C0C0C0] w-[30vw]"
          inputType="number"
          divStyle="w-[30vw]"
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <SelectContainer
          labelTitle="Payments"
          labelSelectForId="payment"
          optionExample="Ex. 12"
          divStyle="w-[30vw]"
          arrayItems={allLoans
            .filter((loan) => loan.name === loanSelected)
            .flatMap((loan) => loan.payments)
            .map((payment) => payment.toString())}
          onChange={(e) => setPayments(Number(e.target.value))}
        />

        <Buttons confirmation="Apply" cancel="Cancel" path="/loans" />
        <span className="text-lg text-red-700 font-bold text-center">
          {message}
        </span>
      </FormContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={confirmApplyLoan}
        message="Are you sure you want to request this loan? This action cannot be undone."
        modalStyle="flex flex-col justify-center items-center gap-4 fixed bg-[#5F6F65] border-2 border-solid border-[#3C3D37] text-white pt-2 px-2 top-0 left-0 right-0 bottom-0 w-[36vw] h-[30vh] m-auto rounded-xl text-shadow"
      />
    </main>
  );
}

export default ApplyLoan;
