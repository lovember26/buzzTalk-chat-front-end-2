import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { joiResolver } from "@hookform/resolvers/joi";
import { registerThunk } from "redux/auth/authThunk";
import { inputRegisterSchema } from "middlewares";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
import { BasicInput } from "components/common/BasicInput/BasicInput";
import { PasswordInput } from "components/common/PasswordInput/PasswordInput";
import { MainButton } from "components/common/MainButton/MainButton";
import { Checkbox } from "components/common/CheckBox/CheckBox";
import {
  RegisterPageTitle,
  RegisterPageWrapper,
  RegisterPageForm,
  RegisterPageRedirectLinkWrapper,
  RegisterPageRedirectLink,
} from "./RegisterPage.styled";
import { showPassword, showConfirmPassword } from "helpers/showPasswordHandler";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

      dispatch(registerThunk(user));
      navigate("/verify", { replace: true });
      reset();
    } catch (error) {}
  };

  return (
    <>
      <RegisterPageTitle>Sign up</RegisterPageTitle>
      <RegisterPageWrapper>
        <RegisterPageForm onSubmit={handleSubmit(onSubmit)}>
          <BasicInput
            register={register}
            error={errors["email"]}
            name="email"
            lable={"Email"}
            type="email"
            placeholder={"Enter an email"}
          />

          <PasswordInput
            register={register}
            error={errors["password"]}
            classNameWrapper={"password-wrapper"}
            classNameInput={"input-password-register"}
            classNameButton={"password"}
            name={"password"}
            lable={"Create password"}
            type={"password"}
            placeholder={"Enter a password"}
            onClick={showPassword}
          />

          <PasswordInput
            register={register}
            error={errors["confirm"]}
            classNameWrapper={"confirm-password-wrapper"}
            classNameInput={"input-password-register-confirm"}
            classNameButton={"confirm-password"}
            lable={"Confirm password"}
            type={"password"}
            name={"confirm"}
            placeholder={"Enter a password"}
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
      </RegisterPageWrapper>
      <AppToastContainer size={30} />
    </>
  );
};
