import React, { useState } from "react";
import CardButtomContainer from "../components/CardButtomContainer";
import CardContainer from "../components/CardContainer";
import PlasticCard from "../components/PlasticCard";
import RequestButtom from "../components/RequestButtom";
import { Link } from "react-router-dom";

function Cards() {
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
          amount: "$ 100.0",
          payments: 12,
        },
        {
          id: 4,
          loanid: 3,
          name: "Automotive",
          amount: "$ 200.0",
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

  const [clientId, setClientId] = useState(1);

  return (
    <main className="border border-solid min-h-[calc(100vh-23vh)] bg-[#48a6f4]">
      <h1 className="border border-solid border-[#f2c036] text-4xl font-bold text-center mt-8 bg-[#16374e] text-white w-[40vw] py-2 text-center mx-auto my-10 shadow-[8px_8px_6px_rgba(0,0,0,0.7)] rounded-xl">
        Your Cards
      </h1>
      <img
        className="w-full h-[310px] mx-auto my-10 object-cover object-middle border-b border-t border-solid shadow-[0px_10px_7px_rgba(0,0,0,0.8)]"
        src="./banner.jpg"
        alt="banner"
      />

      <h2 className="rounded-md text-3xl border-2 border-solid border-[#4B4B4B] bg-[#f2c036] text-black font-bold shadow-[7px_7px_5px_rgba(0,0,0,0.7)] w-[20vw] py-2 text-center mx-auto ">
        Credit
      </h2>
      <CardButtomContainer className="flex flex-col gap-14 justify-center mx-10 mt-16">
        <div className="flex justify-center">
          <Link to="/apply-card">
            <RequestButtom
              className="w-[200px] border border-solid border-white bg-[#f2c036] text-black font-bold shadow-[7px_7px_5px_rgba(0,0,0,0.7)] transition-colors duration-[0.5s] hover:bg-[#16374e] hover:text-gray-100 hover:border-[#f2c036] hover:border-4 transition-transform hover:translate-y-1 py-3 px-2 text-xl rounded-xl"
              text="Request card"
            />
          </Link>
        </div>
        <CardContainer className="flex justify-center gap-24 mb-10">
          {clients[clientId - 1].cards
            .filter((card) => card.cardType === "CREDIT")
            .map((card) => {
              const backgroundCard =
                card.cardColor === "SILVER"
                  ? "bg-[url('./bg-black-silver.jpg')]"
                  : card.cardColor === "GOLD"
                  ? "bg-[url('./bg-gold.jpg')]"
                  : card.cardColor === "TITANIUM"
                  ? "bg-[url('./bg-titanium.jpg')]"
                  : "";

              const textColor =
                card.cardColor === "SILVER"
                  ? "text-white"
                  : card.cardColor === "GOLD"
                  ? "text-black"
                  : card.cardColor === "TITANIUM"
                  ? "text-black"
                  : "";

              return (
                <PlasticCard
                  className={`shadow-[7px_7px_5px_rgba(0,0,0,0.7)] ${backgroundCard} bg-no-repeat bg-cover bg-center flex flex-col gap-5 flex-wrap w-[350px] h-[210px] p-4 border border-solid border-black rounded-xl font-bold ${textColor}`}
                  type="Credit Card"
                  number={card.cardNumber}
                  cvv={card.cvv}
                  cardHolder={card.cardHolder}
                  truDate={card.thruDate}
                />
              );
            })}
        </CardContainer>
        <h2 className="rounded-md text-3xl border-2 border-solid border-[#4B4B4B] bg-[#f2c036] text-black font-bold shadow-[7px_7px_5px_rgba(0,0,0,0.7)] w-[20vw] py-2 text-center mx-auto">
          Debit
        </h2>
      </CardButtomContainer>

      <CardButtomContainer className="flex flex-col gap-14 justify-center mx-10 my-16">
        <CardContainer className="flex justify-center gap-24 mb-10">
          {clients[clientId - 1].cards
            .filter((card) => card.cardType === "DEBIT")
            .map((card) => {
              const backgroundCard =
                card.cardColor === "SILVER"
                  ? "bg-[url('./bg-black-silver.jpg')]"
                  : card.cardColor === "GOLD"
                  ? "bg-[url('./bg-gold.jpg')]"
                  : card.cardColor === "TITANIUM"
                  ? "bg-[url('./bg-titanium.jpg')]"
                  : "";

              const textColor =
                card.cardColor === "SILVER"
                  ? "text-white"
                  : card.cardColor === "GOLD"
                  ? "text-black"
                  : card.cardColor === "TITANIUM"
                  ? "text-black"
                  : "";

              return (
                <PlasticCard
                  className={`shadow-[7px_7px_5px_rgba(0,0,0,0.7)] ${backgroundCard} bg-no-repeat bg-cover bg-center flex flex-col gap-5 flex-wrap w-[350px] h-[210px] p-4 border border-solid border-black rounded-xl font-bold ${textColor}`}
                  type="Credit Card"
                  number={card.cardNumber}
                  cvv={card.cvv}
                  cardHolder={card.cardHolder}
                  truDate={card.thruDate}
                />
              );
            })}
        </CardContainer>
      </CardButtomContainer>
    </main>
  );
}

export default Cards;
