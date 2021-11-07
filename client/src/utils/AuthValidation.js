import emailValidator from "email-validator";

export const validateAuth = (email, password) => {
  if (emailValidator.validate(email)) {
    if (password.length >= 6) {
      return null;
    } else {
      return {
        type: "pass",
        msg: "*Password should be more than 6 characters",
      };
    }
  } else {
    return { type: "email", msg: "*Invalid email" };
  }
};
