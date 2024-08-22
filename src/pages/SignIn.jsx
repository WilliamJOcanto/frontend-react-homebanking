import React from "react";
import FormContainer from "../components/FormContainer";
import InputContainer from "../components/InputContainer";
import SingleButton from "../components/SingleButton";

function SignIn() {
  return (
    <main className="border border-solid min-h-[calc(100vh-8vh)] bg-[#48a6f4]">
      <div className="flex">
        <FormContainer
          imgStyle="border-2 border-solid border-[#4B4B4B] rounded-xl w-[150px] h-[150px] mx-auto"
          src="./bankEaseLogo.png"
          formStyle="flex justify-center w-[400px] h-[300px] mx-auto "
          fieldsetStyle="flex flex-col justify-center gap-6 w-[350px]"
          containerStyle="flex flex-col items-center justify-center w-[40vw] min-h-[calc(100vh-8vh)]  bg-[#D9D9D9] gap-10 "
        >
          <InputContainer
            labelStyle="flex flex-col gap-2 font-bold text-xl"
            labelInputForId="email"
            labelTitle="Email"
            inputStyle="font-semibold rounded-lg p-1 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
            inputType="email"
            inputPlaceholder="Ex. client@example.com"
          />
          <InputContainer
            labelStyle="flex flex-col gap-2 font-bold text-xl"
            labelInputForId="password"
            labelTitle="Password"
            inputStyle="font-semibold rounded-lg p-1 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
            inputType="password"
            inputPlaceholder="**********"
          />
          <SingleButton
            containerStyle="flex flex-col gap-2 items-center mt-2"
            buttonStyle="border-2 border-[#B0B0B0] bg-[#003366] border-solid px-4 py-1 rounded-lg text-[#FFFFFF] text-lg font-semibold"
            linkStyle="text-[#0066CC] text-lg underline font-semibold"
            buttonText="Sign in"
            link="/sign-up"
            linkText="Register"
          />
        </FormContainer>
        <img
          className="w-[60vw] h-[200px] min-h-[calc(100vh-8vh)]"
          src="./img-sign-In.jpg"
          alt="img-pc"
        />
      </div>
    </main>
  );
}

export default SignIn;
