import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import InputContainer from "../components/InputContainer";
import SingleButton from "../components/SingleButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../components/Modal";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const confirmRegister = async (e) => {
    e.preventDefault();

    const userRegister = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    console.log(userRegister);

    axios
      .post(
        "https://backend-java-homebanking.onrender.com/api/auth/register",
        userRegister
      )
      .then((response) => {
        console.log(response);
        navigate("/sign-in", { state: { message: response.data + " !" } });
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

  return (
    <main className="border border-solid min-h-[calc(100vh-8vh)] bg-[#D9D9D9]">
      <div className="flex">
        <FormContainer
          imgStyle="border-2 border-solid border-[#4B4B4B] rounded-xl w-[120px] h-[120px] mx-auto mt-6"
          src="./bankEaseLogo.png"
          formStyle="flex justify-center w-[400px] h-[77vh] mx-auto"
          fieldsetStyle="flex flex-col justify-center gap-4 w-[350px]  py-2"
          containerStyle="flex flex-col items-center justify-center w-[40vw] h-[106vh]  bg-[#D9D9D9] gap-4 py-2"
          onSubmit={handleOpenModal}
        >
          <InputContainer
            labelStyle="flex flex-col gap-1 font-bold text-xl"
            labelInputForId="first-name"
            labelTitle="First Name"
            inputStyle="font-semibold rounded-lg p-1 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
            inputType="text"
            inputPlaceholder="Ex. John"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <InputContainer
            labelStyle="flex flex-col gap-1 font-bold text-xl"
            labelInputForId="last-name"
            labelTitle="Last Name"
            inputStyle="font-semibold rounded-lg p-1 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
            inputType="text"
            inputPlaceholder="Ex. Smith"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <InputContainer
            labelStyle="flex flex-col gap-1 font-bold text-xl"
            labelInputForId="email"
            labelTitle="Email"
            inputStyle="font-semibold rounded-lg p-1 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
            inputType="email"
            inputPlaceholder="Ex. client@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputContainer
            labelStyle="flex flex-col gap-1 font-bold text-xl"
            labelInputForId="password"
            labelTitle="Password"
            inputStyle="font-semibold rounded-lg p-1 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
            inputType="text"
            inputPlaceholder="Ex. password123"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span className="text-lg text-red-700 font-bold">{message}</span>
          <SingleButton
            containerStyle="flex flex-col gap-1 items-center"
            buttonStyle="border-2 border-[#B0B0B0] bg-[#003366] border-solid px-4 py-1 rounded-lg text-[#FFFFFF] text-lg font-semibold"
            linkStyle="text-[#0066CC] text-lg underline font-semibold"
            buttonText="Register"
            link="/sign-in"
            linkText="Sign In"
          />
        </FormContainer>
        <img
          className="w-[60vw] h-[200px] h-[109vh]"
          src="./img-sign-up.jpg"
          alt="img-pc"
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={confirmRegister}
        message=" If you are sure the information is correct, click 'Confirm'. If you want to make changes, select 'Cancel'."
        modalStyle="flex flex-col justify-center items-center gap-4 fixed bg-[#5F6F65] border-2 border-solid border-[#9CA986] text-white pt-2 px-2 top-0 left-0 right-0 bottom-0 w-[36vw] h-[30vh] m-auto rounded-xl text-shadow"
      />
    </main>
  );
}

export default SignUp;
