import Joi from "joi";
import * as yup from "yup";

export const inputRegisterSchema = Joi.object({
  email: Joi.string()
    .regex(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    )
    .required()
    .messages({
      "string.pattern.base": "*The email address format is incorrect",
      "string.empty": "*This field is required",
      "any.required": "*This field is required",
    }),
  password: Joi.string()
    .min(8)
    .max(20)
    .regex(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/
    )
    .required()
    .messages({
      "string.min": "*The password should be minimum 8 characters long",
      "string.max": "*The password exceeds the maximum allowed length",
      "string.pattern.base":
        "*At least one uppercase letter, one lowercase letter and one number",
      "string.empty": "*This field is required",
      "any.required": "*This field is required",
    }),
  confirm: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.empty": "*This field is required",
    "any.required": "*This field is required",
    "any.only": "*Passwords do not match",
  }),

  agreePolicy: Joi.boolean()
    .valid(true)
    .required()
    .messages({ "any.only": "*Required" }),
});

export const inputLoginSchema = Joi.object({
  login: Joi.string().required().messages({
    "string.empty": "*This field is required",
    "any.required": "*This field is required",
  }),
  password: Joi.string()
    .min(8)
    .max(20)
    .regex(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/
    )
    .required()
    .messages({
      "string.min": "*The password should be minimum 8 characters long",
      "string.max": "*The password exceeds the maximum allowed length",
      "string.pattern.base":
        "*At least one uppercase letter, one lowercase letter and one number",
      "string.empty": "*This field is required",
      "any.required": "*This field is required",
    }),
  rememberMe: Joi.boolean(),
});

export const inputEmailSchema = Joi.object({
  email: Joi.string()
    .regex(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    )
    .required()
    .messages({
      "string.pattern.base": "*The email address format is incorrect",
      "string.empty": "*This field is required",
      "any.required": "*This field is required",
    }),
});

export const inputResetPasswordSchema = Joi.object({
  password: Joi.string()
    .min(8)
    .max(20)
    .regex(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/
    )
    .required()
    .messages({
      "string.min": "*The password should be minimum 8 characters long",
      "string.max": "*The password exceeds the maximum allowed length",
      "string.pattern.base":
        "*At least one uppercase letter, one lowercase letter and one number",
      "string.empty": "*This field is required",
      "any.required": "*This field is required",
    }),
  confirm: Joi.string()
    .valid(Joi.ref("password"))
    .min(8)
    .max(20)
    .regex(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/
    )
    .required()
    .messages({
      "string.min": "*The password should be minimum 8 characters long",
      "string.max": "*The password exceeds the maximum allowed length",
      "string.pattern.base":
        "*At least one uppercase letter, one lowercase letter and one number",
      "string.empty": "*This field is required",
      "any.required": "*This field is required",
      "any.only": "*Passwords do not match",
    }),
});

export const inputEditUserSchema = yup.object({
  name: yup.string().min(1).max(150),
  //   .messages({
  //   "string.min": "*The username should be minimum 1 characters long",
  //   "string.max": "*The username exceeds the maximum 150 length",
  //   "string.pattern.base":
  //     "*At least one uppercase letter, one lowercase letter and one number",
  // }),
  aboutMe: yup.string().min(1).max(150),
  // .messages({
  // "string.min": "*The username should be minimum 1 characters long",
  // "string.max": "*The username exceeds the maximum 150 length",
  //   "string.pattern.base":
  //     "*At least one uppercase letter, one lowercase letter and one number",
  // }),
});
