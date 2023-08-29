import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
import {
  RegisterPageTitle,
  RegisterPageRedirectLinkWrapper,
  RegisterPageRedirectLink,
} from "./RegisterPage.styled";
import { selectAuthRegisterStatus } from "redux/auth/authSelectors";
import { RegisterForm } from "components/RegisterForm/RegisterForm";

export default function RegisterPage() {
  const navigate = useNavigate();
  const isRegistered = useSelector(selectAuthRegisterStatus);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isRegistered === "fulfilled") {
      navigate(`/verify?email=${email}`, { replace: true });
    }
  }, [isRegistered, email, navigate]);
  const navigateToLogin = () => {
    navigate("/login", { replace: true });
  };

  return (
    <>
      <RegisterPageTitle>Sign up</RegisterPageTitle>
      <RegisterForm setEmail={setEmail} />
      <RegisterPageRedirectLinkWrapper>
        <RegisterPageRedirectLink onClick={navigateToLogin}>
          I’am already registered
        </RegisterPageRedirectLink>
      </RegisterPageRedirectLinkWrapper>
      <AppToastContainer size={30} />
    </>
  );
}
