import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { inputSchema } from "middlewares";
import { showPassword, showConfirmPassword } from "helpers/showPasswordHandler";
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
import { registerThunk } from "redux/auth/authThunk";
import { useDispatch } from "react-redux";

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
    resolver: joiResolver(inputSchema),
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
            text="I accept the
        policy and terms"
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

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { showPasswordHandler } from "helpers/showPasswordHandler";
// import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
// import { BasicInput } from "components/common/BasicInput/BasicInput";
// import { PasswordInput } from "components/common/PasswordInput/PasswordInput";
// import { MainButton } from "components/common/MainButton/MainButton";
// import { Checkbox } from "components/common/CheckBox/CheckBox";
// import {
//   RegisterPageTitle,
//   RegisterPageWrapper,
//   RegisterPageForm,
//   RegisterPageRedirectLinkWrapper,
//   RegisterPageRedirectLink,
// } from "./RegisterPage.styled";
// import { registerThunk } from "redux/auth/authThunk";
// import { useDispatch } from "react-redux";
// import { registerPageRules } from "constants";

// export const RegisterPage = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [agree, setAgree] = useState(false);

//   const navigate = useNavigate();

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case "email":
//         return setEmail(value);
//       case "password":
//         return setPassword(value);
//       case "confirm-password":
//         return setConfirmPassword(value);
//       default:
//         return;
//     }
//   };

//   const navigateToLogin = () => {
//     navigate("/login", { replace: true });
//   };

//   const handleCheckboxChange = (event) => {
//     setAgree(event.currentTarget.checked);
//   };

//   const validate = () => {
//     if (email.trim() && password.trim() && confirmPassword.trim() && agree) {
//       return true;
//     }

//     return false;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const user = {
//       email: email,
//       password: password,
//       confirm_password: confirmPassword,
//     };

//     dispatch(registerThunk(user));

//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");

//     navigate("/verify", { replace: true });
//   };

//   const showPassword = () => {
//     const visibilityIcons = document.querySelector(
//       "div form div .password-wrapper"
//     );
//     const passwordInput = document.querySelector(
//       "form .input-password-register"
//     );

//     showPasswordHandler(visibilityIcons, passwordInput);
//   };

//   const showConfirmPassword = () => {
//     const visibilityIcons = document.querySelector(
//       "div form div .confirm-password-wrapper"
//     );

//     const passwordInput = document.querySelector(
//       "form .input-password-register-confirm"
//     );

//     showPasswordHandler(visibilityIcons, passwordInput);
//   };

//   return (
//     <>
//       <RegisterPageTitle>Sign up</RegisterPageTitle>
//       <RegisterPageWrapper>
//         <RegisterPageForm onSubmit={handleSubmit}>
//           <BasicInput
//             lable={"Email"}
//             type={"email"}
//             name={"email"}
//             value={email}
//             placeholder={"Enter an email"}
//             required
//             onChange={handleChange}
//             ruleText={registerPageRules.EMAIL}
//           />

//           <PasswordInput
//             classNameWrapper={"password-wrapper"}
//             classNameInput={"input-password-register"}
//             classNameButton={"password"}
//             lable={"Create password"}
//             type={"password"}
//             name={"password"}
//             value={password}
//             placeholder={"Enter a password"}
//             required
//             onChange={handleChange}
//             ruleText={registerPageRules.PASSWORD}
//             onClick={showPassword}
//           />

//           <PasswordInput
//             classNameWrapper={"confirm-password-wrapper"}
//             classNameInput={"input-password-register-confirm"}
//             classNameButton={"confirm-password"}
//             lable={"Confirm password"}
//             type={"password"}
//             name={"confirm-password"}
//             value={confirmPassword}
//             placeholder={"Enter a password"}
//             required
//             onChange={handleChange}
//             ruleText={registerPageRules.CONFIRM_PASSWORD}
//             onClick={showConfirmPassword}
//           />

//           <Checkbox
//             text="I accept the
//         policy and terms"
//             onChange={handleCheckboxChange}
//           />

//           <MainButton
//             type="submit"
//             text="Sign up"
//             disabledHandler={!validate()}
//           />
//         </RegisterPageForm>

//         <RegisterPageRedirectLinkWrapper>
//           <RegisterPageRedirectLink onClick={navigateToLogin}>
//             I’am already registered
//           </RegisterPageRedirectLink>
//         </RegisterPageRedirectLinkWrapper>
//       </RegisterPageWrapper>
//       <AppToastContainer size={30} />
//     </>
//   );
// };

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { showPasswordHandler } from "helpers/showPasswordHandler";
// import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
// import { BasicInput } from "components/common/BasicInput/BasicInput";
// import { PasswordInput } from "components/common/PasswordInput/PasswordInput";
// import { MainButton } from "components/common/MainButton/MainButton";
// import { Checkbox } from "components/common/CheckBox/CheckBox";
// import {
//   RegisterPageTitle,
//   RegisterPageWrapper,
//   RegisterPageForm,
//   RegisterPageRedirectLinkWrapper,
//   RegisterPageRedirectLink,
// } from "./RegisterPage.styled";
// import { registerThunk } from "redux/auth/authThunk";
// import { useDispatch } from "react-redux";
// import { registerPageRules } from "constants";

// export const RegisterPage = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [agree, setAgree] = useState(false);

//   const [emailDirty, setEmailDirty] = useState(false);
//   const [passwordDirty, setPasswordDirty] = useState(false);
//   const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);

//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [confirmPasswordError, setConfirmPasswordError] = useState("");

//   const navigate = useNavigate();

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case "email":
//         setEmail(value);
//         if (
//           !String(value)
//             .toLowerCase()
//             .match(
//               /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//             )
//         ) {
//           setEmailError("*The email address format is incorrect");
//         } else {
//           setEmailError("");
//         }
//         return;
//       case "password":
//         setPassword(value);
//         if (
//           !String(value)
//             .toLowerCase()
//             .match(/^(?=.*\d)\w{3,20}$/m)
//         ) {
//           setPasswordError("*The password format is incorrect");
//         } else {
//           setPasswordError("");
//         }
//         return;
//       case "confirm-password":
//         setConfirmPassword(value);
//         if (password !== confirmPassword) {
//           setPasswordError(
//             "*The passwords don’t match. Re-enter your passwords"
//           );
//         } else {
//           setConfirmPasswordError("");
//         }
//         return;
//       default:
//         return;
//     }
//   };

//   const navigateToLogin = () => {
//     navigate("/login", { replace: true });
//   };

//   const handleCheckboxChange = (event) => {
//     setAgree(event.currentTarget.checked);
//   };

//   const validate = () => {
//     if (email.trim() && password.trim() && confirmPassword.trim() && agree) {
//       return true;
//     }

//     return false;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const user = {
//       email: email,
//       password: password,
//       confirm_password: confirmPassword,
//     };

//     dispatch(registerThunk(user));

//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");

//     navigate("/verify", { replace: true });
//   };

//   const showPassword = () => {
//     const visibilityIcons = document.querySelector(
//       "div form div .password-wrapper"
//     );
//     const passwordInput = document.querySelector(
//       "form .input-password-register"
//     );

//     showPasswordHandler(visibilityIcons, passwordInput);
//   };

//   const showConfirmPassword = () => {
//     const visibilityIcons = document.querySelector(
//       "div form div .confirm-password-wrapper"
//     );

//     const passwordInput = document.querySelector(
//       "form .input-password-register-confirm"
//     );

//     showPasswordHandler(visibilityIcons, passwordInput);
//   };

//   const blurHandler = ({ target: { name, value } }) => {
//     switch (name) {
//       case "email":
//         setEmailDirty(true);
//         if (value.trim() === "") {
//           setEmailError("*This field is required");
//         }
//         break;
//       case "password":
//         setPasswordDirty(true);
//         if (value.trim() === "") {
//           setPasswordError("*This field is required");
//         }
//         break;
//       case "confirm-password":
//         setConfirmPasswordDirty(true);
//         break;
//       default:
//         return;
//     }
//   };

//   return (
//     <>
//       <RegisterPageTitle>Sign up</RegisterPageTitle>
//       <RegisterPageWrapper>
//         <RegisterPageForm onSubmit={handleSubmit} className="form">
//           <BasicInput
//             classNameInput={"input-email"}
//             classNameInputNotification={"input-email-notification"}
//             lable={"Email"}
//             type={"email"}
//             name={"email"}
//             value={email}
//             placeholder={"Enter an email"}
//             required
//             onChange={handleChange}
//             onBlur={(event) => blurHandler(event)}
//             ruleText={registerPageRules.EMAIL}
//             errorText={emailError}
//             emailDirty={emailDirty}
//             emailError={emailError}
//           />

//           <PasswordInput
//             classNameWrapper={"password-wrapper"}
//             classNameInput={"input-password-register"}
//             classNameButton={"password"}
//             lable={"Create password"}
//             type={"password"}
//             name={"password"}
//             value={password}
//             placeholder={"Enter a password"}
//             required
//             onChange={handleChange}
//             ruleText={registerPageRules.PASSWORD}
//             errorText={passwordError}
//             onClick={showPassword}
//             onBlur={(event) => blurHandler(event)}
//             passwordDirty={passwordDirty}
//             passwordError={passwordError}
//           />

//           <PasswordInput
//             classNameWrapper={"confirm-password-wrapper"}
//             classNameInput={"input-password-register-confirm"}
//             classNameButton={"confirm-password"}
//             lable={"Confirm password"}
//             type={"password"}
//             name={"confirm-password"}
//             value={confirmPassword}
//             placeholder={"Enter a password"}
//             required
//             onChange={handleChange}
//             ruleText={registerPageRules.CONFIRM_PASSWORD}
//             errorText={confirmPasswordError}
//             onClick={showConfirmPassword}
//             setConfirmPasswordDirty={confirmPasswordDirty}
//             setConfirmPasswordError={confirmPasswordError}
//           />

//           <Checkbox
//             className="checkbox"
//             text="I accept the
//         policy and terms"
//             onChange={handleCheckboxChange}
//           />

//           <MainButton
//             type="submit"
//             text="Sign up"
//             disabledHandler={!validate()}
//           />
//         </RegisterPageForm>

//         <RegisterPageRedirectLinkWrapper>
//           <RegisterPageRedirectLink onClick={navigateToLogin}>
//             I’am already registered
//           </RegisterPageRedirectLink>
//         </RegisterPageRedirectLinkWrapper>
//       </RegisterPageWrapper>
//       <AppToastContainer size={30} />
//     </>
//   );
// };
