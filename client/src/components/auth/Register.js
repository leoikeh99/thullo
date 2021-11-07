import React, { useEffect } from "react";
import {
  AuthCard,
  AuthContainer,
  Button,
  Header,
  Input,
  InputCover,
  Text,
  Icon,
  GoogleButton,
  ButtonLink,
  ErrorLabel,
} from "../styles/AuthStyles";
import logo from "../../images/Logo.svg";
import { useState } from "react";
import { validateAuth } from "../../utils/AuthValidation";

export const Register = () => {
  const [error, setError] = useState(null);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setError(null);
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setError(validateAuth(loginData.email, loginData.password));
  };

  return (
    <AuthContainer>
      <AuthCard>
        <img src={logo} alt="" />
        <Header>Login</Header>
        <form action="" onSubmit={(e) => submit(e)}>
          {error && error.type === "email" && (
            <ErrorLabel>{error.msg}</ErrorLabel>
          )}
          <InputCover error={error && error.type === "email" && true}>
            <Icon className="fas fa-envelope" />
            <Input
              placeholder="Email"
              value={loginData.email}
              name="email"
              onChange={onChange}
            />
          </InputCover>
          {error && error.type === "pass" && (
            <ErrorLabel>{error.msg}</ErrorLabel>
          )}
          <InputCover error={error && error.type === "pass" && true}>
            <Icon className="fas fa-lock" />
            <Input
              placeholder="Password"
              value={loginData.password}
              name="password"
              onChange={onChange}
            />
          </InputCover>
          <Button type="submit">Sign Up</Button>
        </form>
        <Text>OR</Text>
        <GoogleButton to="http://localhost:5000/auth/google">
          <Icon className="fab fa-google" /> Continue with Google
        </GoogleButton>
        <Text>
          Already have an account ? <ButtonLink to="/login">Login</ButtonLink>
        </Text>
      </AuthCard>
    </AuthContainer>
  );
};

export default Register;
