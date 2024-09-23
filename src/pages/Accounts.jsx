import React, { useEffect, useState } from "react";
import CardButtomContainer from "../components/CardButtomContainer";
import RequestButtom from "../components/RequestButtom";
import CardContainer from "../components/CardContainer";
import CardAccounts from "../components/CardAccounts";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loadUser, updateAccounts } from "../redux/actions/userAction";
import Modal from "../components/Modal";
import BannerTextImg from "../components/BannerTextImg";
import ImgButtom from "../components/ImgButtom";
import "../styles/textSahdow.css";
function Accounts() {
  const client = useSelector((state) => state.userReducer.userData);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const confirmRequestAccount = () => {
    setMessage(""); // Reiniciar el mensaje
    setVisible(true); // Hacerlo visible al solicitar
    const token = localStorage.getItem("token");

    axios
      .post(
        `http://localhost:8080/api/accounts/clients/current/accounts`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setMessage(response.data);
        dispatch(updateAccounts());
        setTimeout(() => {
          setVisible(false);
        }, 5000);
      })
      .catch((error) => {
        setMessage(error.response.data);
        setTimeout(() => {
          setVisible(false);
        }, 5000);
      });

    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(updateAccounts());
    // dispatch(loadUser());
  }, [dispatch]);

  return (
    <main className="border border-solid min-h-[calc(100vh-23vh)] bg-[#D9D9D9]">
      <h1 className="text-shadow border-2 border-solid border-[#4C4C4A] underline text-4xl font-bold text-center mt-6 bg-[#16374e] text-white w-[38vw] h-[10vh] py-1 text-center mx-auto rounded-lg">
        Welcome {client.firstName} {client.lastName} !
      </h1>
      <img
        className="w-full h-[36vh] mx-auto mt-4 object-cover object-bottom border-b border-t border-solid shadow-[0px_10px_7px_rgba(0,0,0,0.8)]"
        src="./banner2.png"
        alt="banner"
      />

      <BannerTextImg
        ContainerStyle="flex justify-evenly items-center px-16 w-full h-[46vh] border-t-2 border-b-2 border-solid border-black mt-6 bg-[#16374e] text-white p-4"
        ContainerTextStyle="flex flex-col justify-center items-center gap-4"
        titleStyle="text-2xl fonnt-bold underline"
        title="Welcome to Bank Ease!"
        textStyle="text-xl"
        text="On this page you can:"
        ulStyle="inline"
      >
        <ImgButtom
          imgStyle="w-[20vw] h-[30vh] rounded-xl shadow-[6px_6px_6px_rgba(0,0,0,0.8)]"
          imgSrc="./alcancia.jpg"
          imgAlt="piggy-bank"
        >
          <RequestButtom
            className="w-[15vw] h-[8vh] border border-solid border-[#4C4C4A] bg-[#A1ADAD] text-black font-bold shadow-[6px_7px_3px_rgba(0,0,0,0.9)] transition-colors duration-[0.7s] hover:border-2 transition-transform hover:translate-y-[-10px] text-xl rounded-3xl"
            text="Request account"
            onClick={handleOpenModal}
          />
        </ImgButtom>
      </BannerTextImg>

      <CardButtomContainer className="flex flex-col justify-center items-center gap-6 w-full h-[55vh]">
        {visible && (
          <span
            className={`text-xl ${
              message === "Account created" ? "text-[#06D001]" : "text-red-700"
            } font-bold text-center`}
          >
            {message}
          </span>
        )}

        <CardContainer className="flex justify-center gap-10 flex-wrap w-full">
          {client.accounts.map((account) => {
            const dateObject = new Date(account.creationDate);
            const options = { year: "numeric", month: "long", day: "numeric" };
            const formattedDate = dateObject.toLocaleDateString(
              "en-US",
              options
            );
            const formattedbalance = account.balance.toLocaleString("en-US", {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });
            return (
              <CardAccounts
                stylePayments="hidden"
                styleDate="text-lg"
                divSize="w-[380px] h-[260px] shadow-[6px_6px_6px_rgba(0,0,0,0.8)] transition-transform hover:translate-y-[-17px] transition-colors duration-[0.7s]"
                balanceOrAmount="Balance:"
                showLink={true}
                link={`/account/${account.id}`}
                title="Account number:"
                content={account.number}
                amount={formattedbalance}
                creationDate={formattedDate}
              />
            );
          })}
        </CardContainer>
      </CardButtomContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={confirmRequestAccount}
        message="Are you sure you want to request an account?"
        modalStyle="flex flex-col justify-center items-center gap-4 fixed bg-[#5F6F65] border-2 border-solid border-[#3C3D37] text-white pt-2 top-0 left-0 right-0 bottom-0  w-[30vw] h-[25vh] m-auto rounded-xl text-shadow"
      />
    </main>
  );
}

export default Accounts;
