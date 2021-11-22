import React, { useState } from "react";
import { Header } from "../styles/BoardStyles";
import { IconBtn } from "../styles/Widgets";
import { SpaceOut } from "../styles/GlobalStyles";
import AddBoardModal from "../modals/AddBoardModal";

const AllBoards = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && <AddBoardModal show={show} setShow={setShow} />}
      <SpaceOut>
        <Header>All Boards</Header>
        <IconBtn onClick={() => setShow(true)}>
          <i className="fas fa-plus" /> Add
        </IconBtn>
      </SpaceOut>
    </>
  );
};

export default AllBoards;
