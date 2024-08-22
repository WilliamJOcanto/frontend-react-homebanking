import React from "react";
import FormContainer from "../components/FormContainer";
import InputContainer from "../components/InputContainer";
import SingleButton from "../components/SingleButton";

function SignUp() {
  return (
    <main className="border border-solid min-h-[calc(100vh-8vh)] bg-[#48a6f4]">
      <main className="border border-solid min-h-[calc(100vh-8vh)] bg-[#48a6f4]">
        <div className="flex">
          <FormContainer
            imgStyle="border-2 border-solid border-[#4B4B4B] rounded-xl w-[120px] h-[120px] mx-auto mt-6"
            src="./bankEaseLogo.png"
            formStyle="flex justify-center w-[400px] h-[75vh] mx-auto "
            fieldsetStyle="flex flex-col justify-center gap-4 w-[350px]"
            containerStyle="flex flex-col items-center justify-center w-[40vw] h-[105vh]  bg-[#D9D9D9] gap-4 py-2"
          >
            <InputContainer
              labelStyle="flex flex-col gap-2 font-bold text-xl"
              labelInputForId="first-name"
              labelTitle="First Name"
              inputStyle="font-semibold rounded-lg p-1 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
              inputType="text"
              inputPlaceholder="Ex. John"
            />
            <InputContainer
              labelStyle="flex flex-col gap-2 font-bold text-xl"
              labelInputForId="last-name"
              labelTitle="Last Name"
              inputStyle="font-semibold rounded-lg p-1 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
              inputType="text"
              inputPlaceholder="Ex. Smith"
            />
            <InputContainer
              labelStyle="flex flex-col gap-2 font-bold text-xl"
              labelInputForId="email"
              labelTitle="Email"
              inputStyle="font-semibold rounded-lg p-1 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
              inputType="email"
              inputPlaceholder="Ex. client@example.com"
            />
            <InputContainer
              labelStyle="flex flex-col gap-1 font-bold text-xl"
              labelInputForId="password"
              labelTitle="Password"
              inputStyle="font-semibold rounded-lg p-1 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
              inputType="text"
              inputPlaceholder="Ex. password123"
            />
            <SingleButton
              containerStyle="flex flex-col gap-1 items-center mt-1"
              buttonStyle="border-2 border-[#B0B0B0] bg-[#003366] border-solid px-4 py-1 rounded-lg text-[#FFFFFF] text-lg font-semibold"
              linkStyle="text-[#0066CC] text-lg underline font-semibold"
              buttonText="Register"
              link="/sign-in"
              linkText="Sign In"
            />
          </FormContainer>
          <img
            className="w-[60vw] h-[200px] h-[105vh]"
            src="./img-sign-up.jpg"
            alt="img-pc"
          />
        </div>
      </main>
    </main>
  );
}

export default SignUp;
