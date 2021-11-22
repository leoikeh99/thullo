import { keyframes } from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  1;
}
`;
export const overlay = keyframes`
from {
  opacity: 0;
}

to {
  opacity:0.2;
}`;

export const goDown = keyframes`
from {
  transform:translateY(-15px);
  opacity: 0;
}

to {
  transform:translateY(0px); 
  opacity:1;
}
`;
