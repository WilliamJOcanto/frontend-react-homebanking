import React, { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import CardAccounts from "../components/CardAccounts";
import Table from "../components/Table";
import "../styles/tables.css";
import CardButtomContainer from "../components/CardButtomContainer";
import RequestButtom from "../components/RequestButtom";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Account() {
  const [accounts, setAccounts] = useState({});

  const { id } = useParams();

  const getTransaction = () =>
    axios
      .get(`http://localhost:8080/api/accounts/${id}`)
      .then((response) => setAccounts(response.data));

  useEffect(() => {
    console.log(accounts);

    getTransaction();
  }, []);

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
            content={accounts.number}
            amount={accounts.balance}
            creationDate={accounts.creationDate}
          />
          <Table transactions={accounts.transactions} />
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
