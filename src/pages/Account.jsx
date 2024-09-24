import React, { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import CardAccounts from "../components/CardAccounts";
import Table from "../components/Table";
import "../styles/tables.css";
import CardButtomContainer from "../components/CardButtomContainer";
import RequestButtom from "../components/RequestButtom";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAccounts } from "../redux/actions/userAction";
function Account() {
  const allAccounts = useSelector(
    (state) => state.userReducer.userData.accounts
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  const account = allAccounts.find((account) => account.id === Number(id));
  const location = useLocation();
  const message = location.state?.message;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    dispatch(updateAccounts());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="border border-solid min-h-[calc(100vh-23vh)] bg-[#D9D9D9]">
      <div className="flex justify-center items-center mx-auto gap-16 mt-8">
        <h1 className="text-shadow border-2 border-solid border-[#4C4C4A] text-4xl font-bold bg-[#16374e] h-[10vh] underline text-white w-[26vw] py-1 text-center rounded-lg">
          Your Transactions
        </h1>
        <img
          className="w-[30vw] h-[30vh] rounded-xl shadow-[8px_8px_6px_rgba(0,0,0,0.7)] border border-solid border-[#4c4c4a]"
          src="../transaction-img.jpg"
          alt="transaction-img"
        />
      </div>

      {visible && (
        <p className="text-3xl text-[#06D001] font-bold text-center mt-8">
          {message}
        </p>
      )}

      <CardButtomContainer className="flex justify-center  mx-auto w-[90vw] min-h-[50vh] my-10">
        <CardContainer className="flex justify-center items-center gap-16 flex-wrap w-full">
          {account && (
            <>
              {(() => {
                const formattedBalance = account.balance.toLocaleString(
                  "en-US",
                  {
                    style: "decimal",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                );
                return (
                  <>
                    <CardAccounts
                      stylePayments="hidden"
                      styleDate="text-lg"
                      divSize="w-[380px] h-[260px] "
                      balanceOrAmount="Balance:"
                      showLink={false}
                      title="Account number:"
                      StylePerMonth="hidden"
                      content={account.number}
                      amount={formattedBalance}
                      creationDate={new Date(
                        account.creationDate
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    />

                    <div className="flex flex-col justify-center items-center gap-4">
                      <Link to="/transactions">
                        <RequestButtom
                          className="border border-solid border-[#4C4C4A] bg-[#A1ADAD] text-black font-bold shadow-[6px_7px_3px_rgba(0,0,0,0.9)] transition-colors duration-[0.9s] hover:border-[#4C4C4A] hover:border-2 transition-transform hover:translate-y-[-15px] py-4 px-5 text-xl rounded-3xl"
                          text="Make a new transaction"
                        />
                      </Link>
                      {account.transactions &&
                      account.transactions.length > 0 ? (
                        <Table transactions={account.transactions} />
                      ) : (
                        <p className="text-center text-red-600 font-bold text-2xl">
                          No transactions have been made yet.
                        </p>
                      )}
                    </div>
                  </>
                );
              })()}
            </>
          )}
        </CardContainer>
      </CardButtomContainer>
    </main>
  );
}

export default Account;
