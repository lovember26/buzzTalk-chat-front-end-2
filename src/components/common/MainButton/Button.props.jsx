import PropTypes from "prop-types";

export const ButtonPropTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.function,
};
