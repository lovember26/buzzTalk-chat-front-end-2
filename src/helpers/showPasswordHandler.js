export const showPasswordHandler = (visibilityIcons, passwordInput) => {
  visibilityIcons.classList.toggle("active");

  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
};

export const showPassword = () => {
  const visibilityIcons = document.querySelector(
    "div form div .password-wrapper"
  );
  const passwordInput = document.querySelector("form .input-password-register");

  showPasswordHandler(visibilityIcons, passwordInput);
};

export const showConfirmPassword = () => {
  const visibilityIcons = document.querySelector(
    "div form div .confirm-password-wrapper"
  );

  const passwordInput = document.querySelector(
    "form .input-password-register-confirm"
  );

  showPasswordHandler(visibilityIcons, passwordInput);
};

export const showPasswordOnLoginPage = () => {
  const visibilityIcons = document.querySelector(
    "div form div .password-wrapper"
  );
  const passwordInput = document.querySelector("form .input-password-login");

  showPasswordHandler(visibilityIcons, passwordInput);
};
