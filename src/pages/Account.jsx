import React, { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import CardAccounts from "../components/CardAccounts";
import Table from "../components/Table";
import "../styles/tables.css";
import CardButtomContainer from "../components/CardButtomContainer";
import RequestButtom from "../components/RequestButtom";
import { Link, useParams } from "react-router-dom";
function Account() {
  const [accounts, setAcoounts] = useState([
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
    {
      id: 3,
      number: "VIN003",
      balance: "50000.0",
      creationDate: "09/21/2021",
      transactions: [
        {
          id: 7,
          transactionType: "CREDIT",
          amount: 25000.0,
          dateTransaction: "12/03/2023",
          description: "Payment",
        },
        {
          id: 8,
          transactionType: "DEBIT",
          amount: -7500.0,
          dateTransaction: "02/06/2023",
          description: "Test credit",
        },
        {
          id: 9,
          transactionType: "DEBIT",
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
          transactionType: "CREDIT",
          amount: 123000.0,
          dateTransaction: "01/03/2022",
          description: "Cable",
        },
        {
          id: 11,
          transactionType: "DEBIT",
          amount: -45000.0,
          dateTransaction: "05/16/2023",
          description: "Food shopping",
        },
        {
          id: 12,
          transactionType: "CREDIT",
          amount: 11500.0,
          dateTransaction: "08/23/2023",
          description: "Debt payment",
        },
      ],
    },
  ]);

  const [accountId, setAccountId] = useState(1);

  // const [accounts, setAccounts] = useState({});

  // const { id } = useParams();

  // const getTransaction = () =>
  //   axios
  //     .get("http://localhost:8080/accounts/" + id)
  //     .then((response) => setAccounts(response.data));

  // useEffect(() => {
  //   console.log("hola");

  //   getTransaction();
  // }, []);

  return (
    <main className="border border-solid min-h-[calc(100vh-23vh)] bg-[#48a6f4]">
      <h1 className="border border-solid border-[#f2c036] text-4xl font-bold text-center mt-8 bg-[#16374e] text-white w-[40vw] py-2 text-center mx-auto my-10 shadow-[8px_8px_6px_rgba(0,0,0,0.7)] rounded-xl">
        Your Transactions
      </h1>

      <CardButtomContainer className="flex justify-center items-center gap-2 mx-10 my-14">
        <div>
          <Link to="/transactions">
            <RequestButtom
              className="border border-solid border-white bg-[#f2c036] text-black font-bold shadow-[7px_7px_5px_rgba(0,0,0,0.7)] transition-colors duration-[0.5s] hover:bg-[#16374e] hover:text-gray-100 hover:border-[#f2c036] hover:border-4 transition-transform hover:translate-y-1 py-3 px-4 text-xl rounded-xl"
              text="Make a new transaction"
            />
          </Link>
        </div>
        <CardContainer className="flex flex-col justify-center items-center gap-16 flex-wrap w-[700px]">
          <CardAccounts
            stylePayments="hidden"
            styleDate="text-lg"
            link="/transactions"
            title="Account number:"
            content={accounts[accountId - 1].number}
            amount={accounts[accountId - 1].balance}
            creationDate={accounts[accountId - 1].creationDate}
          />
          <Table transactions={accounts[accountId - 1].transactions} />
        </CardContainer>
      </CardButtomContainer>
    </main>
  );
}

export default Account;

// const textColor =
// accounts[accountId - 1].transactions.amount <= 0
//   ? "text-red-600"
//   : "text-green-600";
