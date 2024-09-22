import React, { useEffect, useState } from "react";
import CardButtomContainer from "../components/CardButtomContainer";
import CardContainer from "../components/CardContainer";
import PlasticCard from "../components/PlasticCard";
import RequestButtom from "../components/RequestButtom";
import { Link, useLocation } from "react-router-dom";
import BannerTextImg from "../components/BannerTextImg";
import ImgButtom from "../components/ImgButtom";
import { useDispatch, useSelector } from "react-redux";
import { updateCards } from "../redux/actions/userAction";

function Cards() {
  const clientCards = useSelector((state) => state.userReducer.userData.cards);
  const dispatch = useDispatch();
  const location = useLocation();
  const message = location.state?.message;
  const [visible, setVisible] = useState(true);

  console.log(clientCards);

  useEffect(() => {
    dispatch(updateCards());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="border border-solid min-h-[calc(100vh-23vh)] bg-[#D9D9D9]">
      <h1 className="text-shadow border-2 border-solid border-[#4C4C4A] underline text-4xl bg-[#16374e] font-bold text-white w-[23vw] h-[10vh] py-1 text-center mx-auto my-4 rounded-lg">
        Your Cards
      </h1>
      <img
        className="w-full h-[36vh] mx-auto mb-6 object-cover object-middle border-b border-t border-solid shadow-[0px_10px_7px_rgba(0,0,0,0.8)]"
        src="./banner.jpg"
        alt="banner"
      />
      <BannerTextImg
        ContainerStyle="flex justify-center items-center gap-32 px-16 w-[95vw] h-[54vh] mb-6 border-t-2 border-b-2 border-solid border-black  bg-[#16374e] text-white rounded-xl mx-auto"
        ContainerTextStyle="flex flex-col gap-8 items-center"
        titleStyle="text-2xl w-[30vw] font-bold underline"
        title="Welcome to your card space!"
        textStyle="text-lg w-[30vw]"
        text="Here you can manage all your cards easily and quickly. Check the details of your current cards and take the opportunity to request a new one. Your finances at a click!"
        ulStyle="hidden"
      >
        <ImgButtom
          imgStyle="w-[30vw] h-[35vh] border-2 border-solid border-[#4C4C4A] rounded-xl shadow-[7px_7px_5px_rgba(0,0,0,0.7)]"
          imgSrc="./card1-img.jpg"
          imgAlt="img-card"
        >
          <Link to="/apply-card">
            <RequestButtom
              className="w-[200px] border border-solid border-[#4C4C4A] bg-[#A1ADAD] text-black font-bold shadow-[6px_7px_3px_rgba(0,0,0,0.9)] transition-colors duration-[0.7s] hover:border-2 transition-transform hover:translate-y-[-10px] py-4 px-4 text-xl rounded-3xl"
              text="Request card"
            />
          </Link>
        </ImgButtom>
      </BannerTextImg>

      {visible && (
        <p className="text-3xl text-[#06D001] font-bold text-center my-6">
          {message}
        </p>
      )}

      <CardButtomContainer className="flex gap-52 justify-center mx-auto mt-2">
        <CardContainer className="flex flex-col justify-start items-center gap-14 mb-10">
          {clientCards.filter((card) => card.cardtype === "CREDIT").length >
          0 ? (
            <>
              <span className="text-shadow rounded-lg text-4xl underline text-white font-bold w-[15vw] h-[9vh] pt-1 text-center border-2 border-solid border-[#4C4C4A] bg-[#16374e]">
                Credit
              </span>
              {clientCards
                .filter((card) => card.cardtype === "CREDIT")
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
            </>
          ) : (
            <p className="text-center text-red-600 font-bold text-xl w-[25vw]">
              You don't have credit cards. You can request it by clicking on the
              'Request card' button
            </p>
          )}
        </CardContainer>

        <CardContainer className="flex flex-col items-center justify-start gap-14 mb-10">
          {clientCards.filter((card) => card.cardtype === "DEBIT").length >
          0 ? (
            <>
              <span className="text-shadow rounded-lg text-4xl underline text-white font-bold w-[15vw] h-[9vh] pt-1 text-center border-2 border-solid border-[#4C4C4A] bg-[#16374e] ">
                Debit
              </span>
              {clientCards
                .filter((card) => card.cardtype === "DEBIT")
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
                      type="Debit Card"
                      number={card.cardNumber}
                      cvv={card.cvv}
                      cardHolder={card.cardHolder}
                      truDate={card.thruDate}
                    />
                  );
                })}
            </>
          ) : (
            <p className="text-center text-red-600 font-bold text-xl w-[25vw]">
              You don't have debit cards. You can request it by clicking on the
              'Request card' button
            </p>
          )}
        </CardContainer>
      </CardButtomContainer>
    </main>
  );
}

export default Cards;
