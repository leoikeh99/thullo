import React from "react";
import {
  Avatar,
  DownArrow,
  Init,
  MenuCover,
  Name,
} from "../../styles/NavStyles";

const Menu = ({ user: { avatar, username } }) => {
  return (
    <MenuCover>
      {avatar ? (
        <Avatar src={avatar} />
      ) : (
        <Init>{username[0].toUpperCase()}</Init>
      )}
      <Name>{username}</Name>
      <DownArrow className="fas fa-caret-down" />
    </MenuCover>
  );
};

export default Menu;
