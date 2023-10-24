import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { registerThunk } from "redux/auth/authThunk";
import { inputRegisterSchema } from "middlewares";
import { selectInputNotification } from "helpers/selectWrongPasswordNotification";
import { showPassword, showConfirmPassword } from "helpers/showPasswordHandler";
import { registerPageRules } from "constants";
import { MainButton } from "components/common/MainButton/MainButton";
import { ShowPasswordRegisterPageButton } from "components/common/ShowPasswordRegisterPageButton/ShowPasswordRegisterPageButton";
import { Checkbox } from "components/common/CheckBox/CheckBox";
import { InputNotification } from "components/common/InputNotification/InputNotification";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
import {
  AuthTitle,
  RegisterPageRedirectLinkWrapper,
  RegisterPageRedirectLink,
  RegisterPageForm,
  BlockInputWrapper,
  Label,
  InputWrapper,
  Input,
  Icon,
  Wrapper,
} from "./RegisterPage.styled";
import { selectAuthRegisterStatus } from "redux/auth/authSelectors";
import { Container } from "components/common/Container/Container.styled";

export default function RegisterPage() {
  const navigate = useNavigate();
  const isRegistered = useSelector(selectAuthRegisterStatus);
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (isRegistered === "fulfilled") {
      navigate(`/verify?email=${email}`, { replace: true });
    }
  }, [isRegistered, email, navigate]);
  const navigateToLogin = () => {
    navigate("/login", { replace: true });
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
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

  const onSubmit = async (data) => {
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
  const emailError = selectInputNotification(errors["email"]);
  const passwordError = selectInputNotification(errors["password"]);
  const confirmPasswordError = selectInputNotification(errors["confirm"]);

  return (
    <Container>
      <Wrapper>
        <AuthTitle>Sign up</AuthTitle>
        <RegisterPageForm onSubmit={handleSubmit(onSubmit)}>
          <BlockInputWrapper>
            <Label htmlFor="test" error={emailError}>
              Email
            </Label>
            <InputWrapper>
              <Input
                {...register("email")}
                type="email"
                error={emailError}
                value={watch("email")}
              />
              <Icon size={28} error={emailError} />
            </InputWrapper>
            {emailError ? (
              <InputNotification
                text={emailError}
                error={emailError}
                registerError={emailError}
                color={"#BD2816"}
              />
            ) : (
              <InputNotification text={registerPageRules.EMAIL} />
            )}
          </BlockInputWrapper>

          <BlockInputWrapper>
            <Label error={passwordError}>Create password</Label>
            <InputWrapper className="password-wrapper">
              <Input
                {...register("password")}
                className="input-password-register"
                type="password"
                value={watch("password")}
                name="password"
                error={passwordError}
              />
              <ShowPasswordRegisterPageButton
                onClick={showPassword}
                className="password"
                error={passwordError}
              />
            </InputWrapper>
            {passwordError ? (
              <InputNotification
                text={passwordError}
                error={passwordError}
                color={"#BD2816"}
              />
            ) : (
              <InputNotification text={registerPageRules.PASSWORD} />
            )}
          </BlockInputWrapper>

          <BlockInputWrapper>
            <Label error={confirmPasswordError}>Confirm password</Label>
            <InputWrapper className="confirm-password-wrapper">
              <Input
                {...register("confirm")}
                className="input-password-register-confirm"
                type="password"
                name="confirm"
                value={watch("confirm")}
                error={confirmPasswordError}
              />
              <ShowPasswordRegisterPageButton
                onClick={showConfirmPassword}
                className="confirm-password"
                error={confirmPasswordError}
              />
            </InputWrapper>
            {confirmPasswordError ? (
              <InputNotification
                text={confirmPasswordError}
                error={confirmPasswordError}
                color={"#BD2816"}
              />
            ) : (
              <InputNotification text={registerPageRules.CONFIRM_PASSWORD} />
            )}
          </BlockInputWrapper>

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
      </Wrapper>
    </Container>
  );
}
