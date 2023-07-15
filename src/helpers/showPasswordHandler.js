export const showPasswordHandler = (visibilityIcons, passwordInput) => {
  visibilityIcons.classList.toggle("active");

  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
};
