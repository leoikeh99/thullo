import React from "react";
import styled from "styled-components";
import { popIn } from "../styles/animations";

const Cover = styled.div`
  width: 330px;
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
  margin-bottom: 12px;
`;

const SmallText = styled.p`
  color: #828282;
  margin: 0;
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
`;

const Option = styled.div`
  padding: 15px;
  margin-top: 12px;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background: #f2f2f2;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Icon = styled.i`
  color: #4f4f4f;
`;

const SelectAccess = () => {
  return (
    <Cover>
      <Header>Visibility</Header>
      <Text>Choose who can see to this board.</Text>
      <Option>
        <Flex>
          <Icon className="fas fa-globe" />
          <Header>Public</Header>
        </Flex>
        <SmallText>Anyone on the internet can see this.</SmallText>
      </Option>
      <Option>
        <Flex>
          <Icon className="fas fa-lock" />
          <Header>Private</Header>
        </Flex>
        <SmallText>Only board members can see this</SmallText>
      </Option>
    </Cover>
  );
};

export default SelectAccess;
