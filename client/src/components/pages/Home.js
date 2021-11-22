import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import AllBoards from "../Boards/AllBoards";
import Navbar from "../layout/nav/Navbar";
import { Container, PageCover } from "../styles/GlobalStyles";

const Home = ({ auth: { user, loader2 } }) => {
  useEffect(() => {
    document.body.style.background = "#F8F9FD";
  });
  return (
    user && (
      <PageCover>
        <Navbar />
        <Container>
          <AllBoards />
        </Container>
      </PageCover>
    )
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(Home);
