export const theme = {
  breakpoints: ["375px", "768px", "1440px"],

  fonts: {
    Poppins: "'Poppins', sans-serif",
    Inter: "'Inter', sans-serif",
    Roboto: "'Roboto', sans-serif",
  },

  fontSizes: [
    "10px", //0
    "12px", //1
    "14px", //2
    "16px", //3
    "18px", //4
    "24px", //5
    "28px", //6
    "30px", //6
    "32px", //6
    "34px", //6
    "36px", //6
    "38px", //6
    "40px", //6
    "42px", //6
    "44px", //7
    "48px", //8
    "100px", //9
    "32px", //10
  ],

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  radii: {
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "30px",
  },

  shadows: {},

  gradients: {
    main: "linear-gradient(#fad0ae 100%, #fad0ae 47%, #fad0ae 100%)",
  },

  colors: {
    white: {
      100: "#FFFFFF",
    },

    black: {
      100: "#000000",
      200: "#444444", //welcome page button background color
    },
    // export const MAIN_COLOR = "#451952";
    // export const TITLE_COLOR = "#F39F5A";
    // export const TEXT_COLOR = "#000";
    // export const BTN_COLOR = "#662549";
    green: {},
    pink: "#AE445A",
    MAIN_COLOR: "#451952",
    BTN_COLOR_HOVER: "#7E5D88",
    BTN_COLOR: "#662549",
    TITLE_COLOR: "#F39F5A",
    ERROR_BACKGROUND: "#FFF5EC",
    gray: {
      100: "#EBEBEB", //input background color
      200: "#777777", //input notification text
      300: "#B5B5B5", //button disabled color
      400: "#B5B5B5", //button hover/focus
      500: "#F4F4F4", //button edit background color
      600: "#696969",
    },

    red: {
      100: "#e74a3b", // validation error
      200: "#BD2816", // validation error input background validation error
      300:"#FF3D3D",
    },

    blue: {
      100: "#7B97F8",
    },
  },

  transitions: {
    create: createTransitions,
    duration: "250ms",
    easy: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

function createTransitions(
  properties = [],
  duration = "250ms",
  easing = "cubic-bezier(0.4, 0, 0.2, 1)"
) {
  return properties
    .map((property) => `${property} ${duration} ${easing}`)
    .join(", ");
}

theme.breakpoints.mobile = theme.breakpoints[0];
theme.breakpoints.tablet = theme.breakpoints[1];
theme.breakpoints.desktop = theme.breakpoints[2];
