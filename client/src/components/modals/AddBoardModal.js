import React, { useState } from "react";
import styled from "styled-components";
import SelectCover from "../select/SelectCover";
import { goDown } from "../styles/animations";
import { ModalWrapper, Overlay } from "../styles/GlobalStyles";
import { Button2, EmptyBtn, IconBtn } from "../styles/Widgets";
import { genImageUrl } from "../../utils/Unsplash";

const Cover = styled.div`
  width: 460px;
  padding: 30px;
  background: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  margin-top: -130px;
  animation: ${goDown} 0.16s ease-in forwards;
  position: relative;
`;

const Banner = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  font-family: "Poppins", sans-serif;
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  margin-bottom: 15px;

  ::placeholder {
    color: #bdbdbd;
  }
`;

export const MidSection = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export const Close = styled.button`
  padding: 7px 12px;
  color: #fff;
  border: 0;
  background: #2f80ed;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  top: 17px;
  right: 17px;

  i {
    font-size: 30px;
  }
`;

const AddBoardModal = ({ show, setShow }) => {
  const [showCover, setShowCover] = useState(false);
  const [cover, setCover] = useState("r2nJPbEYuSQ");
  return (
    <>
      <Overlay />
      <ModalWrapper>
        <Cover>
          <Close onClick={() => setShow(false)}>
            <i class="fas fa-times" />
          </Close>
          <Banner src={genImageUrl(cover, 700, 130)} />
          <Input placeholder="Add board title" />
          <MidSection>
            <Button2 onClick={() => setShowCover(true)}>
              <i className="fas fa-image"></i> Cover
              {showCover && <SelectCover setCover={setCover} />}
            </Button2>
            <Button2>
              <i className="fas fa-lock"></i> Private
            </Button2>
          </MidSection>
          <BottomSection>
            <EmptyBtn onClick={() => setShow(false)}>Cancel</EmptyBtn>
            <IconBtn>
              <i className="fas fa-plus" /> Create
            </IconBtn>
          </BottomSection>
        </Cover>
      </ModalWrapper>
    </>
  );
};

export default AddBoardModal;
