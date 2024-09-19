import isEmail from "validator/lib/isEmail";

export const verifyEmail = (input) => {
  return isEmail(input.toLowerCase());
};
