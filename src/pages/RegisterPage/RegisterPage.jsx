import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { joiResolver } from "@hookform/resolvers/joi";
import { registerThunk } from "redux/auth/authThunk";
import { inputRegisterSchema } from "middlewares";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
import { BasicInput } from "components/common/BasicInput/BasicInput";
import { PasswordInput } from "components/common/PasswordInput/PasswordInput";
import { MainButton } from "components/common/MainButton/MainButton";
import { Checkbox } from "components/common/CheckBox/CheckBox";
import { selectInputNotification } from "helpers/selectWrongPasswordNotification";
import {
  RegisterPageTitle,
  RegisterPageForm,
  RegisterPageRedirectLinkWrapper,
  RegisterPageRedirectLink,
} from "./RegisterPage.styled";
import { showPassword, showConfirmPassword } from "helpers/showPasswordHandler";
import { selectAuthRegisterStatus } from "redux/auth/authSelectors";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isRegistered = useSelector(selectAuthRegisterStatus);
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(inputRegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
      agreePolicy: false,
    },
  });

  useEffect(() => {
    if (isRegistered === "fulfilled") {
      navigate(`/verify?email=${email}`, { replace: true });
    }
  }, [isRegistered, email, navigate]);
  const navigateToLogin = () => {
    navigate("/login", { replace: true });
  };

  const onSubmit = async (data) => {
    console.log("onSubmit data", data);
    try {
      const user = {
        email: data.email,
        password: data.password,
        confirm_password: data.confirm,
      };
      setEmail(data.email);
      await dispatch(registerThunk(user));

      reset();
    } catch (error) {}
  };

  return (
    <>
      <RegisterPageTitle>Sign up</RegisterPageTitle>
      <RegisterPageForm onSubmit={handleSubmit(onSubmit)}>
        <BasicInput
          register={register}
          error={selectInputNotification(errors["email"])}
          name="email"
          lable={"Email"}
          type="email"
        />

        <PasswordInput
          register={register}
          error={selectInputNotification(errors["password"])}
          classNameWrapper={"password-wrapper"}
          classNameInput={"input-password-register"}
          classNameButton={"password"}
          name={"password"}
          lable={"Create password"}
          type={"password"}
          onClick={showPassword}
        />

        <PasswordInput
          register={register}
          error={selectInputNotification(errors["confirm"])}
          classNameWrapper={"confirm-password-wrapper"}
          classNameInput={"input-password-register-confirm"}
          classNameButton={"confirm-password"}
          lable={"Confirm password"}
          type={"password"}
          name={"confirm"}
          onClick={showConfirmPassword}
        />

        <Checkbox
          register={register}
          name={"agreePolicy"}
          text="I accept the
        policy and terms"
          error={errors["agreePolicy"]}
        />

        <MainButton type="submit" text="Sign up" disabled={!isValid} />
      </RegisterPageForm>

      <RegisterPageRedirectLinkWrapper>
        <RegisterPageRedirectLink onClick={navigateToLogin}>
          I’am already registered
        </RegisterPageRedirectLink>
      </RegisterPageRedirectLinkWrapper>
      <AppToastContainer size={30} />
    </>
  );
}
