import styled, { createGlobalStyle } from "styled-components";
import { overlay } from "../styles/animations";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

body{
    font-family: 'Poppins', sans-serif;
    margin:0;
    font-size:16px;
}
`;

export const PageCover = styled.div`
  padding: 135px 20px;
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: auto;
`;

export const SpaceOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  zindex: 1;
  animation: ${overlay} 0.3s ease-in forwards;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default GlobalStyles;
