import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { persistedStore } from "redux/store";
import { joiResolver } from "@hookform/resolvers/joi";
import { logInThunk } from "redux/auth/authThunk";
import { inputLoginSchema } from "middlewares";
import { verifyUserService } from "services/authApi";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
import { errorNotification, successNotification } from "helpers/notification";
import { selectWrongPasswordInputNotification } from "helpers/selectWrongPasswordNotification";
import { showPasswordOnLoginPage } from "helpers/showPasswordHandler";
import { selectWrongPasswordNotification } from "helpers/selectWrongPasswordNotification";
import { loginPageRules } from "constants";
import { MainButton } from "components/common/MainButton/MainButton";
import { ShowPasswordButton } from "components/common/ShowPasswordButton/ShowPasswordButton";
import { Checkbox } from "components/common/CheckBox/CheckBox";
import { InputNotification } from "components/common/InputNotification/InputNotification";
import {
  LoginPageTitle,
  LoginPageLinksWrapper,
  LoginPageLinkForgotPassword,
  LoginPageRedirectLinkWrapper,
  LoginPageRedirectText,
  LoginPageRedirectLink,
  LoginPageForm,
  BlockInputWrapper,
  Icon,
  Lable,
  InputWrapper,
  Input,
  TextAttemptError,
} from "./LoginPage.styled";

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const verifyQuery = { email, token };

  const [wrongPasswordCount, setWrongPasswordCount] = useState(0);
  const [attempts, setAttempts] = useState(3);

  // console.log("wrongPasswordCount", wrongPasswordCount);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (email && token) {
      const verifyUser = async () => {
        try {
          await verifyUserService(verifyQuery);
          successNotification("Verification success!");
        } catch (error) {
          errorNotification(error.message);
        }
      };
      verifyUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    watch,
    handleSubmit,
    // reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(inputLoginSchema),
    defaultValues: {
      login: "",
      password: "",
      rememberMe: true,
    },
  });

  const onSubmit = async ({ login, password, rememberMe }) => {
    try {
      const user = { login: login, password: password };

      // Unwrites the token to LocalStorage
      if (!rememberMe) {
        persistedStore.pause();
        persistedStore.flush().then(() => {
          return persistedStore.purge();
        });
      }

      //Fix when an error code will be sent from the backend
      const data = await dispatch(logInThunk(user));

      if (data.payload[4001]) {
        setWrongPasswordCount(wrongPasswordCount + 1);
        setAttempts(attempts - 1);
      }

      // reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  const navigateToRegister = () => {
    navigate("/register", { replace: true });
  };

  const loginError = selectWrongPasswordInputNotification(
    wrongPasswordCount,
    "login",
    errors["login"]
  );

  const passwordError = selectWrongPasswordInputNotification(
    wrongPasswordCount,
    "password",
    errors["password"]
  );

  return (
    <>
      <LoginPageTitle>Log In</LoginPageTitle>
      <LoginPageForm onSubmit={handleSubmit(onSubmit)}>
        <BlockInputWrapper>
          <Lable
            htmlFor="test"
            error={loginError}
            className="lable"
            wrong={wrongPasswordCount}
          >
            Email or username
          </Lable>
          <InputWrapper>
            <Input
              {...register("login")}
              type="text"
              error={loginError}
              wrong={wrongPasswordCount}
              value={watch("login")}
            />
            <Icon size={28} error={loginError} wrong={wrongPasswordCount} />
          </InputWrapper>
          {loginError ? (
            <InputNotification
              text={loginError}
              wrong={wrongPasswordCount}
              error={loginError}
            />
          ) : (
            <InputNotification
              text={loginPageRules.LOGIN}
              wrong={wrongPasswordCount}
            />
          )}
        </BlockInputWrapper>

        <BlockInputWrapper>
          <Lable
            error={passwordError}
            className="lable"
            wrong={wrongPasswordCount}
          >
            Password
          </Lable>
          <InputWrapper className="password-wrapper">
            <Input
              {...register("password")}
              className="input-password-login"
              type="password"
              name="password"
              error={passwordError}
              wrong={wrongPasswordCount}
              value={watch("password")}
            />
            <ShowPasswordButton
              onClick={showPasswordOnLoginPage}
              className="password"
              error={passwordError}
              wrong={wrongPasswordCount}
            />
          </InputWrapper>
          {passwordError ? (
            <InputNotification
              text={passwordError}
              wrong={wrongPasswordCount}
              error={passwordError}
            />
          ) : (
            <InputNotification
              text={loginPageRules.PASSWORD}
              wrong={wrongPasswordCount}
            />
          )}
        </BlockInputWrapper>

        {wrongPasswordCount < 5 && (
          <Checkbox
            register={register}
            error={errors["rememberMe"]}
            name={"rememberMe"}
            text="Remember me"
          />
        )}

        <TextAttemptError wrong={wrongPasswordCount}>
          {selectWrongPasswordNotification(wrongPasswordCount, attempts)}
        </TextAttemptError>

        {wrongPasswordCount < 3 && (
          <MainButton type="submit" text="Sign in" disabled={!isValid} />
        )}
      </LoginPageForm>

      <LoginPageLinksWrapper>
        <LoginPageLinkForgotPassword to="/forgot-password">
          Forgot Password
        </LoginPageLinkForgotPassword>

        <LoginPageRedirectLinkWrapper>
          <LoginPageRedirectText>Back to</LoginPageRedirectText>
          <LoginPageRedirectLink onClick={navigateToRegister}>
            Sign up
          </LoginPageRedirectLink>
        </LoginPageRedirectLinkWrapper>
      </LoginPageLinksWrapper>
      <AppToastContainer size={30} />
    </>
  );
}

// import * as React from "react";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { persistedStore } from "redux/store";
// import { joiResolver } from "@hookform/resolvers/joi";
// import { logInThunk } from "redux/auth/authThunk";
// import { inputLoginSchema } from "middlewares";
// import { verifyUserService } from "services/authApi";
// import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
// import { errorNotification, successNotification } from "helpers/notification";
// import { selectWrongPasswordInputNotification } from "helpers/selectWrongPasswordNotification";
// import { showPasswordOnLoginPage } from "helpers/showPasswordHandler";
// import { selectWrongPasswordNotification } from "helpers/selectWrongPasswordNotification";
// import { loginPageRules } from "constants";
// import { MainButton } from "components/common/MainButton/MainButton";
// import { ShowPasswordButton } from "components/common/ShowPasswordButton/ShowPasswordButton";
// import { Checkbox } from "components/common/CheckBox/CheckBox";
// import { InputNotification } from "components/common/InputNotification/InputNotification";
// import {
//   LoginPageTitle,
//   LoginPageLinksWrapper,
//   LoginPageLinkForgotPassword,
//   LoginPageRedirectLinkWrapper,
//   LoginPageRedirectText,
//   LoginPageRedirectLink,
//   LoginPageForm,
//   BlockInputWrapper,
//   Icon,
//   Lable,
//   InputWrapper,
//   Input,
//   TextAttemptError,
// } from "./LoginPage.styled";

// export default function LoginPage() {
//   const [searchParams] = useSearchParams();
//   const email = searchParams.get("email");
//   const token = searchParams.get("token");
//   const verifyQuery = { email, token };

//   const [wrongPasswordCount, setWrongPasswordCount] = useState(0);
//   const [attempts, setAttempts] = useState(3);

//   // console.log("wrongPasswordCount", wrongPasswordCount);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (email && token) {
//       const verifyUser = async () => {
//         try {
//           await verifyUserService(verifyQuery);
//           successNotification("Verification success!");
//         } catch (error) {
//           errorNotification(error.message);
//         }
//       };
//       verifyUser();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const {
//     register,
//     watch,
//     handleSubmit,
//     // reset,
//     formState: { errors, isValid },
//   } = useForm({
//     mode: "onChange",
//     resolver: joiResolver(inputLoginSchema),
//     defaultValues: {
//       login: "",
//       password: "",
//       rememberMe: true,
//     },
//   });

//   const onSubmit = async ({ login, password, rememberMe }) => {
//     try {
//       const user = { login: login, password: password };

//       // Unwrites the token to LocalStorage
//       if (!rememberMe) {
//         persistedStore.pause();
//         persistedStore.flush().then(() => {
//           return persistedStore.purge();
//         });
//       }

//       //Fix when an error code will be sent from the backend
//       const data = await dispatch(logInThunk(user));

//       if (data.payload[4001]) {
//         setWrongPasswordCount(wrongPasswordCount + 1);
//         setAttempts(attempts - 1);
//       }

//       // reset();
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const navigateToRegister = () => {
//     navigate("/register", { replace: true });
//   };

//   const loginError = selectWrongPasswordInputNotification(
//     wrongPasswordCount,
//     "login",
//     errors["login"]
//   );

//   const passwordError = selectWrongPasswordInputNotification(
//     wrongPasswordCount,
//     "password",
//     errors["password"]
//   );

//   return (
//     <>
//       <LoginPageTitle>Log In</LoginPageTitle>
//       <LoginPageForm onSubmit={handleSubmit(onSubmit)}>
//         <BlockInputWrapper>
//           <Lable
//             htmlFor="test"
//             error={loginError}
//             className="lable"
//             wrong={wrongPasswordCount}
//           >
//             Email or username
//           </Lable>
//           <InputWrapper>
//             <Input
//               {...register("login")}
//               type="text"
//               error={loginError}
//               wrong={wrongPasswordCount}
//               value={watch("login")}
//             />
//             <Icon size={28} error={loginError} wrong={wrongPasswordCount} />
//           </InputWrapper>
//           {loginError ? (
//             <InputNotification
//               text={loginError}
//               wrong={wrongPasswordCount}
//               error={loginError}
//             />
//           ) : (
//             <InputNotification
//               text={loginPageRules.LOGIN}
//               wrong={wrongPasswordCount}
//             />
//           )}
//         </BlockInputWrapper>

//         <BlockInputWrapper>
//           <Lable
//             error={passwordError}
//             className="lable"
//             wrong={wrongPasswordCount}
//           >
//             Password
//           </Lable>
//           <InputWrapper className="password-wrapper">
//             <Input
//               {...register("password")}
//               className="input-password-login"
//               type="password"
//               name="password"
//               error={passwordError}
//               wrong={wrongPasswordCount}
//               value={watch("password")}
//             />
//             <ShowPasswordButton
//               onClick={showPasswordOnLoginPage}
//               className="password"
//               error={passwordError}
//               wrong={wrongPasswordCount}
//             />
//           </InputWrapper>
//           {passwordError ? (
//             <InputNotification
//               text={passwordError}
//               wrong={wrongPasswordCount}
//               error={passwordError}
//             />
//           ) : (
//             <InputNotification
//               text={loginPageRules.PASSWORD}
//               wrong={wrongPasswordCount}
//             />
//           )}
//         </BlockInputWrapper>

//         {wrongPasswordCount < 5 && (
//           <Checkbox
//             register={register}
//             error={errors["rememberMe"]}
//             name={"rememberMe"}
//             text="Remember me"
//           />
//         )}

//         <TextAttemptError wrong={wrongPasswordCount}>
//           {selectWrongPasswordNotification(wrongPasswordCount, attempts)}
//         </TextAttemptError>

//         {wrongPasswordCount < 3 && (
//           <MainButton type="submit" text="Sign in" disabled={!isValid} />
//         )}
//       </LoginPageForm>

//       <LoginPageLinksWrapper>
//         <LoginPageLinkForgotPassword to="/forgot-password">
//           Forgot Password
//         </LoginPageLinkForgotPassword>

//         <LoginPageRedirectLinkWrapper>
//           <LoginPageRedirectText>Back to</LoginPageRedirectText>
//           <LoginPageRedirectLink onClick={navigateToRegister}>
//             Sign up
//           </LoginPageRedirectLink>
//         </LoginPageRedirectLinkWrapper>
//       </LoginPageLinksWrapper>
//       <AppToastContainer size={30} />
//     </>
//   );
// }
