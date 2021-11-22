import styled from "styled-components";
import { darken } from "polished";

export const NavBar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  padding: 21px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
`;

export const LeftSide = styled.div``;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const SearchCover = styled.div`
  width: 360px;
  height: 42px;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 2px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  box-sizing: border-box;
`;

export const SearchInput = styled.input`
  hieght: 100%;
  width: 100%;
  padding: 0px 15px;
  background: #fff;
  border: 0;

  ::placeholder {
    font-family: "Poppins", sans-serif;
  }
`;

export const SearchBtn = styled.button`
  hieght: 100%;
  width: 140px;
  background: #2f80ed;
  color: #fff;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  border: 0;

  &:hover {
    background: ${darken(0.1, "#2f80ed")};
  }
`;

export const MenuCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

export const Avatar = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 8px;
`;

export const Init = styled.div`
  height: 32px;
  width: 32px;
  font-size: 18px;
  border-radius: 8px;
  background: #bdbdbd;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const Name = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  margin: 0;
`;

export const DownArrow = styled.i``;
