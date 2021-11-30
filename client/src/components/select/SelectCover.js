import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { genImageUrl, searchImages } from "../../utils/Unsplash";
import { popIn } from "../styles/animations";

const Cover = styled.div`
  width: 330px;
  height: 340px;
  background: #fff;
  position: absolute;
  padding: 15px;
  top: 160px;
  left: 10px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  z-index: 5;
  animation: ease-in 0.2s ${popIn};
`;

const Header = styled.h3`
  color: #4f4f4f;
  text-align: left;
  margin: 0;
  margin-bottom: 2px;
`;

const Text = styled.p`
  color: #828282;
  margin: 0;
  text-align: left;
  font-size: 16px;
`;

const InputCover = styled.div`
  height: 40px;
  width: 100%;
  padding: 2px;
  border-radius: 8px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 4px 12px rgb(0 0 0 / 15%);
  justify-content: space-between;
  margin: 15px 0px;
`;

const Input = styled.input`
  width: 80%;
  height: 95%;
  border: 0;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
`;

const Button = styled.div`
  background: #2f80ed;
  height: 100%;
  width: 30%;
  border: 0;
  flex-basis: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  border-radius: 8px;
  color: #fff;
`;

const Images = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const Close = styled.button`
  padding: 5px 10px;
  color: #fff;
  border: 0;
  background: #2f80ed;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;

  i {
    font-size: 13px;
  }
`;

const Image = styled.img`
  height: 60px;
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
  cursor: pointer;
`;

export const SelectCover = ({ setCover, setShowCover }) => {
  const [images, setImages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const search = async () => {
      const images = await searchImages("landscape");
      setImages(images);
    };
    search();
  }, []);

  const searchPhoto = () => {
    const search = async () => {
      const images = await searchImages(text);
      setImages(images);
    };
    search();
  };

  return (
    <Cover>
      <Close
        onClick={() => {
          setShowCover(false);
          console.log("yes");
        }}>
        <i className="fas fa-times" />
      </Close>
      <Header>Photo Search</Header>
      <Text>Search Unsplash for photos</Text>
      <InputCover>
        <Input onChange={(e) => setText(e.target.value)} value={text} />
        <Button onClick={searchPhoto}>
          <i className="fas fa-search" />
        </Button>
      </InputCover>

      <Images>
        {images.map((id) => (
          <Image
            src={genImageUrl(id, 50, 60)}
            key={id}
            onClick={() => setCover(id)}
          />
        ))}
      </Images>
    </Cover>
  );
};

export default SelectCover;
