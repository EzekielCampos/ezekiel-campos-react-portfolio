import isEmail from "validator/lib/isEmail";

// This function uses validator library to indicate if the input is an email
export const verifyEmail = (input) => {
  return isEmail(input.toLowerCase());
};
