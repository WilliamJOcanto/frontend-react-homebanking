import React, { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer";
import InputContainer from "../components/InputContainer";
import SingleButton from "../components/SingleButton";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/authenticationAction";
import { loadUser } from "../redux/actions/userAction";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const messageRegister = location.state?.message;
  const [visible, setVisible] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:8080/api/auth/login", user)
      .then((response) => {
        console.log(response);

        dispatch(loginAction(response.data));
        dispatch(loadUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data);
        setMessage(error.response.data);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10000);

    return () => clearTimeout(timer); // Limpia el timer al desmontar
  }, []);

  return (
    <main className="border border-solid min-h-[calc(100vh-8vh)] bg-[#D9D9D9]">
      <div className="flex">
        <FormContainer
          imgStyle="border-2 border-solid border-[#4B4B4B] rounded-xl w-[150px] h-[150px] mx-auto mb-4"
          src="./bankEaseLogo.png"
          formStyle="flex justify-center w-[400px] h-[300px] mx-auto "
          fieldsetStyle="flex flex-col justify-center gap-6 w-[350px]"
          containerStyle="flex flex-col items-center justify-center w-[40vw] min-h-[calc(100vh-8vh)]  bg-[#D9D9D9] gap-8 "
          onSubmit={handleSubmit}
        >
          <InputContainer
            labelStyle="flex flex-col gap-2 font-bold text-xl"
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
            labelStyle="flex flex-col gap-2 font-bold text-xl"
            labelInputForId="password"
            labelTitle="Password"
            inputStyle="font-semibold rounded-lg p-1 border border-solid border-[#4B4B4B] bg-[#C0C0C0]"
            inputType="password"
            inputPlaceholder="**********"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {visible && (
            <p className="text-lg text-[#06D001] font-bold text-center ">
              {messageRegister}
            </p>
          )}
          <span className="text-lg text-red-700 font-bold">{message}</span>
          <SingleButton
            containerStyle="flex flex-col items-center mt-1"
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
