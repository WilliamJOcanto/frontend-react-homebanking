import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import SelectContainer from "../components/SelectContainer";
import InputContainer from "../components/InputContainer";
import Buttons from "../components/Buttons";

function ApplyLoan() {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Will",
      lastName: "Ocanto",
      email: "will90@gmail.com",
      accounts: [
        {
          id: 1,
          number: "VIN001",
          balance: "100000.0",
          creationDate: "01/01/2021",
          transactions: [
            {
              id: 1,
              transactionType: "CREDIT",
              amount: 25000.0,
              dateTransaction: "02/03/2023",
              description: "Payment",
            },
            {
              id: 2,
              transactionType: "DEBIT",
              amount: -4500.0,
              dateTransaction: "02/06/2023",
              description: "Test credit",
            },
            {
              id: 3,
              transactionType: "DEBIT",
              amount: -1500.0,
              dateTransaction: "06/23/2023",
              description: "Cable payment",
            },
          ],
        },
        {
          id: 2,
          number: "VIN002",
          balance: "200000.0",
          creationDate: "01/02/2023",
          transactions: [
            {
              id: 4,
              transactionType: "CREDIT",
              amount: 12300.0,
              dateTransaction: "11/03/2022",
              description: "Salary",
            },
            {
              id: 5,
              transactionType: "CREDIT",
              amount: 4500.0,
              dateTransaction: "12/06/2023",
              description: "Refund",
            },
            {
              id: 6,
              transactionType: "DEBIT",
              amount: -1500.0,
              dateTransaction: "08/23/2023",
              description: "Taxes",
            },
          ],
        },
      ],
      loans: [
        {
          id: 3,
          loanid: 2,
          name: "Personal",
          amount: "$ 1000.0",
          payments: 60,
        },
        {
          id: 4,
          loanid: 3,
          name: "Mortgage",
          amount: "$ 2000.0",
          payments: 36,
        },
      ],
      cards: [
        {
          id: 3,
          cardHolder: "Will Ocanto",
          cardColor: "TITANIUM",
          cardType: "CREDIT",
          cardNumber: "1234-8356-2625-9840",
          cvv: "123",
          fromDate: "01/01/2025",
          thruDate: "01/01/2027",
        },
        {
          id: 4,
          cardHolder: "Will Ocanto",
          cardColor: "GOLD",
          cardType: "DEBIT",
          cardNumber: "1234-8552-29946-1234",
          cvv: "456",
          fromDate: "08/11/2025",
          thruDate: "03/01/2027",
        },
        {
          id: 5,
          cardHolder: "Will Ocanto",
          cardColor: "SILVER",
          cardType: "CREDIT",
          cardNumber: "1234-8356-2625-9840",
          cvv: "789",
          fromDate: "12/01/2025",
          thruDate: "08/01/2027",
        },
        {
          id: 6,
          cardHolder: "Will Ocanto",
          cardColor: "GOLD",
          cardType: "CREDIT",
          cardNumber: "1234-8356-2625-9840",
          cvv: "345",
          fromDate: "05/09/2025",
          thruDate: "08/21/2027",
        },
        {
          id: 7,
          cardHolder: "Will Ocanto",
          cardColor: "TITANIUM",
          cardType: "DEBIT",
          cardNumber: "1234-8356-2625-9840",
          cvv: "901",
          fromDate: "01/01/2025",
          thruDate: "01/01/2027",
        },
        {
          id: 8,
          cardHolder: "Will Ocanto",
          cardColor: "SILVER",
          cardType: "DEBIT",
          cardNumber: "1234-8356-2625-9840",
          cvv: "223",
          fromDate: "12/01/2025",
          thruDate: "08/01/2027",
        },
      ],
    },
    {
      id: 2,
      name: "Melba",
      lastName: "Morel",
      email: "melba@mindhub.com",
      accounts: [
        {
          id: 3,
          number: "VIN003",
          balance: "50000.0",
          creationDate: "09/21/2021",
          transactions: [
            {
              id: 7,
              transactiontype: "CREDIT",
              amount: 25000.0,
              dateTransaction: "12/03/2023",
              description: "Payment",
            },
            {
              id: 8,
              transactiontype: "DEBIT",
              amount: -7500.0,
              dateTransaction: "02/06/2023",
              description: "Test credit",
            },
            {
              id: 9,
              transactiontype: "DEBIT",
              amount: -8500.0,
              dateTransaction: "12/05/2023",
              description: "Cable payment",
            },
          ],
        },
        {
          id: 4,
          number: "VIN004",
          balance: "200000.0",
          creationDate: "03/29/2023",
          transactions: [
            {
              id: 10,
              transactiontype: "CREDIT",
              amount: 123000.0,
              dateTransaction: "01/03/2022",
              description: "Cable",
            },
            {
              id: 11,
              transactiontype: "DEBIT",
              amount: -45000.0,
              dateTransaction: "05/16/2023",
              description: "Food shopping",
            },
            {
              id: 12,
              transactiontype: "CREDIT",
              amount: 11500.0,
              dateTransaction: "08/23/2023",
              description: "Debt payment",
            },
          ],
        },
      ],
      loans: [
        {
          id: 2,
          loanid: 2,
          name: "Personal",
          amount: "$ 10000.0",
          payments: 12,
          creationDate: "01/01/2021",
        },
        {
          id: 1,
          loanid: 1,
          name: "Automotive",
          amount: "$ 200000.0",
          payments: 6,
          creationDate: "01/01/2023",
        },
      ],
      cards: [
        {
          id: 2,
          cardHolder: "Melba Morel",
          cardColor: "TITANIUM",
          cardType: "CREDIT",
          cardNumber: "1234-8356-2625-9840",
          cvv: "123",
          fromDate: "01/01/2025",
          thruDate: "01/01/2027",
        },
        {
          id: 1,
          cardHolder: "Melba Morel",
          cardColor: "GOLD",
          cardType: "DEBIT",
          cardNumber: "1234-8552-29946-1234",
          cvv: "456",
          fromDate: "08/11/2025",
          truDate: "03/01/2027",
        },
      ],
    },
  ]);

  const [clientId, setClientId] = useState(2);

  const loansNamePayment = [
    { name: "Mortgage", payments: [12, 24, 36, 48, 60], maxAmount: 500000.0 },
    { name: "Automotive", payments: [6, 12, 24, 36], maxAmount: 300000.0 },
    { name: "Personal", payments: [6, 12, 24], maxAmount: 100000.0 },
  ];

  const [loanSelected, setLoanSelected] = useState("");
  const [maxAmount, setMaxAmount] = useState(0);
  const loanChange = (event) => {
    const selectedLoan = event.target.value;
    setLoanSelected(selectedLoan);

    const selectedMaxAmount =
      selectedLoan === "Mortgage"
        ? 500000.0
        : selectedLoan === "Automotive"
        ? 300000.0
        : selectedLoan === "Personal"
        ? 100000.0
        : 0;

    setMaxAmount(selectedMaxAmount);
  };

  return (
    <main className="border border-solid min-h-[calc(100vh-23vh)] bg-[#48a6f4]">
      <h1 className="border border-solid border-[#f2c036] text-4xl font-bold text-center mt-8 bg-[#16374e] text-white w-[40vw] py-2 text-center mx-auto my-10 shadow-[8px_8px_6px_rgba(0,0,0,0.7)] rounded-xl">
        ApplyLoan
      </h1>
      <FormContainer
        imgStyle="border border-solid border-[#4B4B4B] rounded-xl w-[500px] h-[350px] ml-12"
        src="./img-loans.jpg"
        formStyle="flex justify-center w-[500px] h-[300px] mx-auto "
        fieldsetStyle="flex flex-col justify-center gap-6 w-full"
        containerStyle="flex items-center justify-center w-[88vw] h-[120vh] border border-solid border-[#f2c036] mx-auto my-10  bg-[#D9D9D9] rounded-xl shadow-[7px_7px_5px_rgba(0,0,0,0.7)]"
      >
        <SelectContainer
          labelTitle="Select loan"
          labelSelectForId="select-loan"
          optionExample="Ex. Mortgage"
          arrayItems={loansNamePayment.map((loan) => loan.name)}
          onChange={loanChange}
        />

        <SelectContainer
          labelTitle="Source account"
          labelSelectForId="source-account"
          optionExample="Ex. VINXXX"
          arrayItems={clients[clientId - 1].accounts.map(
            (account) => account.number
          )}
        />

        <InputContainer
          labelStyle="flex flex-col gap-2 font-bold text-xl"
          labelInputForId="amount-loan"
          labelTitle="Amount"
          inputStyle="font-semibold rounded-lg p-2 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
          inputType="number"
          inputPlaceholder={`Max $${maxAmount}`}
          max={maxAmount}
          min={1000}
        />

        <SelectContainer
          labelTitle="Payment"
          labelSelectForId="payment"
          optionExample="Ex. 12"
          arrayItems={loansNamePayment
            .filter((loan) => loan.name === loanSelected)
            .flatMap((loan) => loan.payments)
            .map((payment) => payment.toString())}
        />

        <Buttons confirmation="Apply" cancel="Cancel" path="/loans" />
      </FormContainer>
    </main>
  );
}

export default ApplyLoan;
