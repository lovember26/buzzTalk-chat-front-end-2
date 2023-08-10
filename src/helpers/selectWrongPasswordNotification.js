// import { registerPageRules, loginPageRules } from "constants";

export const selectWrongPasswordNotification = (
  wrongPasswordCount,
  attempts
) => {
  if (wrongPasswordCount === 1 || wrongPasswordCount === 2) {
    return `Email or password entered incorrectly. You have ${attempts} attempts left.`;
  }
  if (wrongPasswordCount >= 3) {
    return "You have entered incorrect data 3 times. You can try again in 2 hours. Or recover your password with the button Forgot password below.";
  }
};

export const selectWrongPasswordInputNotification = (
  wrongPasswordCount,
  name,
  error
) => {
  if (wrongPasswordCount >= 1) {
    switch (name) {
      case "login":
        return "*Login may be wrong";
      case "password":
        return "*Password may be failed";
      default:
        return;
    }
  }

  // if (!error) {
  //   switch (name) {
  //     case "email":
  //       return registerPageRules.EMAIL;
  //     case "password":
  //       return loginPageRules.PASSWORD;
  //     case "login":
  //       return loginPageRules.LOGIN;
  //     case "confirm":
  //       return loginPageRules.CONFIRM_PASSWORD;
  //     default:
  //       return;
  //   }
  // }

  if (error) return error.message;
};

export const selectInputNotification = (error) => {
  if (error) return error.message;
};
