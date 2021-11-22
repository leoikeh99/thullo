import React from "react";
import { connect } from "react-redux";
import logo from "../../../images/Logo.svg";
import { LeftSide, NavBar, RightSide } from "../../styles/NavStyles";
import Menu from "./Menu";
import Search from "./Search";

const Navbar = ({ auth: { user } }) => {
  return (
    user && (
      <NavBar>
        <LeftSide>
          <img src={logo} />
        </LeftSide>
        <RightSide>
          <Search />
          <Menu user={user} />
        </RightSide>
      </NavBar>
    )
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(Navbar);
