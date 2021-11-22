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
  Alert,
  Loader,
} from "../styles/AuthStyles";
import logo from "../../images/Logo.svg";
import { useState } from "react";
import { validateLogin } from "../../utils/AuthValidation";
import { connect } from "react-redux";
import { auth, clearError } from "../../actions/authActions";

export const Login = ({
  auth,
  clearError,
  authState: { token, loader, authError },
  history,
}) => {
  const [error, setError] = useState(null);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setError(null);
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    const validate = validateLogin(loginData.email, loginData.password);
    clearError();
    setError(validate);

    if (!validate) {
      auth("login", loginData);
    }
  };

  useEffect(() => {
    if (token) {
      history.push("/");
    }
    //eslint-disable-next-line
  }, [token, history]);

  return (
    <AuthContainer>
      <AuthCard>
        <img src={logo} alt="" />
        <Header>Login</Header>
        <Alert error={authError}>
          {authError}
          <i className="fas fa-times" onClick={() => clearError()} />
        </Alert>
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
          <Button type="submit">
            <Loader className="fas fa-circle-notch" loader={loader} /> Login
          </Button>
        </form>
        <Text>OR</Text>
        <GoogleButton href="http://localhost:5000/api/auth/google">
          <Icon className="fab fa-google" /> Login Using Google
        </GoogleButton>
        <Text>
          Don’t have an account yet?{" "}
          <ButtonLink to="/register">Register</ButtonLink>
        </Text>
      </AuthCard>
    </AuthContainer>
  );
};

const mapStateToProps = (state) => ({ authState: state.auth });

export default connect(mapStateToProps, { auth, clearError })(Login);
