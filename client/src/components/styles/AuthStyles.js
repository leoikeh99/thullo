import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthCard = styled.div`
  padding: 48px 58px;
  border: 1px solid #bdbdbd;
  border-radius: 24px;
  width: 473px;
`;

export const Header = styled.p`
  color: #333333;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 27px;
`;

export const InputCover = styled.div`
  width: 100%;
  border: 1px solid ${({ error }) => (error ? "red" : "#bdbdbd")};
  border-radius: 8px;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 14px;
  box-sizing: border-box;
`;

export const ErrorLabel = styled.label`
  color: red;
  display: block;
  font-size: 16px;
  margin-bottom: 4px;
`;

export const Icon = styled.i`
  font-size: 20px;
  color: #828282;
`;

export const Input = styled.input`
  width: 100%;
  height: 20px;
  font-size: 17px;
  border: 0px;
  box-sizing: border-box;

  ::placeholder {
    color: #828282;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px 0px;
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  background: #2f80ed;
  border: 0;
  border-radius: 8px;
  margin-top: 12px;
  cursor: pointer;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #828282;
  font-family: "Noto Sans", sans-serif;
  letter-spacing: 1px;
  text-align: center;
  margin: 20px 0px;
`;

export const GoogleButton = styled(Link)`
  width: 100%;
  padding: 12px 0px;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid #828282;
  border-radius: 8px;
  color: #828282;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: #2f80ed;
`;
