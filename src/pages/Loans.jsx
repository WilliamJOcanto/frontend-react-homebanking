import React, { useEffect, useState } from "react";
import CardButtomContainer from "../components/CardButtomContainer";
import CardContainer from "../components/CardContainer";
import RequestButtom from "../components/RequestButtom";
import CardAccounts from "../components/CardAccounts";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadLoans } from "../redux/actions/loanAction";
import BannerTextImg from "../components/BannerTextImg";
import ImgButtom from "../components/ImgButtom";
import { loadUser } from "../redux/actions/userAction";

function Loans() {
  const clientLoan = useSelector((state) => state.userReducer.userData.loans);
  const allLoans = useSelector((state) => state.loanReducer.availableLoans);
  const dispatch = useDispatch();

  console.log(allLoans);

  useEffect(() => {
    dispatch(loadLoans());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <main className="border border-solid min-h-[calc(100vh-23vh)] bg-[#D9D9D9]">
      <h1 className="text-shadow border-2 border-solid border-[#4C4C4A] underline text-4xl font-bold text-center bg-[#16374e] text-white w-[23vw] h-[10vh] py-1 text-center mx-auto my-6 rounded-lg">
        Your Loans
      </h1>
      <CardButtomContainer className="flex flex-col justify-center intems-center w-[95vw] my-8 mx-auto gap-10">
        <BannerTextImg
          ContainerStyle="flex justify-center items-center gap-32 px-16 w-[95vw] h-[53vh] border-t-2 border-b-2 border-solid border-black  bg-[#16374e] text-white rounded-xl mx-auto"
          ContainerTextStyle="flex flex-col gap-6 items-center"
          titleStyle="text-2xl w-[30vw] font-bold underline"
          title="We offer financial solutions adapted to your needs."
          textStyle="text-lg w-[30vw]"
          text="Whether it's for a vehicle, a personal project, or your ideal home, you'll find flexible options here. Next, you can explore the loans available to help you take control of your financial future."
          ulStyle="hidden"
        >
          <ImgButtom
            imgStyle="w-[30vw] h-[35vh] border-2 border-solid border-[#4C4C4A] rounded-xl shadow-[7px_7px_5px_rgba(0,0,0,0.7)]"
            imgSrc="./img-loan.jpg"
            imgAlt="img-loan"
          >
            {Array.isArray(allLoans) && allLoans.length > 0 && (
              <Link to="/apply-loan">
                <RequestButtom
                  className=" border border-solid border-[#4C4C4A] bg-[#A1ADAD] w-[15vw] h-[8vh] text-black font-bold shadow-[6px_7px_3px_rgba(0,0,0,0.9)] transition-colors duration-[0.7s] hover:border-2 transition-transform hover:translate-y-[-10px]  text-xl rounded-3xl"
                  text="Apply loan"
                />
              </Link>
            )}
          </ImgButtom>
        </BannerTextImg>
        <p className="text-shadow rounded-lg text-4xl underline text-white font-bold w-[35vw] h-[9vh] pt-1 text-center border-2 border-solid border-[#4C4C4A] bg-[#16374e] mx-auto">
          Loans Availables
        </p>
        <CardContainer className="flex justify-center items-center gap-16 flex-wrap w-[90vw] mx-auto">
          {Array.isArray(allLoans) && allLoans.length > 0 ? (
            allLoans.map((loan) => {
              const formattedMaxAmount = loan.maxAmount.toLocaleString(
                "en-US",
                {
                  style: "decimal",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }
              );
              return (
                <CardAccounts
                  title="Type of Loan:"
                  styleDate="hidden"
                  stylePayments="text-xl"
                  divSize="w-[300px] h-[280px] transition-transform hover:translate-y-[-17px] transition-colors duration-[0.7s]"
                  balanceOrAmount="Max. Amount:"
                  showLink={false}
                  payments={loan.payments.join(", ")}
                  content={loan.name}
                  amount={formattedMaxAmount}
                  textPayments="Installments:"
                  StylePerMonth="hidden"
                />
              );
            })
          ) : (
            <p className="text-center text-red-700 font-bold text-xl">
              You have already applied for all the loans available on the
              platform! Currently, there are no other options for you at this
              time.
            </p>
          )}
        </CardContainer>
        <span className="text-shadow rounded-lg text-4xl underline text-white font-bold w-[25vw] h-[9vh] pt-1 text-center border-2 border-solid border-[#4C4C4A] bg-[#16374e] mx-auto">
          Your loans
        </span>
      </CardButtomContainer>
      <div className="flex justify-center items-center gap-16 flex-wrap w-[90vw] mx-auto my-6">
        {Array.isArray(clientLoan) && clientLoan.length > 0 ? (
          clientLoan.map((loan) => {
            const formattedMaxAmount = loan.amount.toLocaleString("en-US", {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });
            return (
              <CardAccounts
                title="Type of Loan:"
                styleDate="hidden"
                stylePayments="text-xl"
                divSize="w-[300px] h-[310px] transition-transform hover:translate-y-[-17px] transition-colors duration-[0.7s]"
                balanceOrAmount="Balance to pay:"
                showLink={false}
                payments={loan.payments}
                content={loan.name}
                amount={formattedMaxAmount}
                textPayments="Selected installment:"
                paymentPerMonth={loan.amount / loan.payments}
                StylePerMonth="flex justify-between gap-4 items-center w-full text-lg mt-4"
              />
            );
          })
        ) : (
          <p className="text-center text-red-700 font-bold text-xl">
            You do not have loans requested yet. You can request it by clicking
            on the 'Apply loan' button
          </p>
        )}
      </div>
    </main>
  );
}

export default Loans;
