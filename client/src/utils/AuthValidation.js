import emailValidator from "email-validator";

export const validateRegister = (email, username, password) => {
  if (!emailValidator.validate(email))
    return { type: "email", msg: "*Invalid email" };
  if (username.trim() === "")
    return { type: "username", msg: "*Username is required" };
  if (password.length < 6)
    return {
      type: "pass",
      msg: "*Password should be more than 6 characters",
    };
  return null;
};

export const validateLogin = (email, password) => {
  if (emailValidator.validate(email)) {
    if (password.trim() !== "") {
      return null;
    } else {
      return {
        type: "pass",
        msg: "*Password is required",
      };
    }
  } else {
    return { type: "email", msg: "*Invalid email" };
  }
};
