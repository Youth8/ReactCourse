import React from "react";
import { Link, NavLink } from "react-router-dom";
import Layout from "epc-ui-layout";
import AppContext from "./context";

const Header = () => {
  return (
    <AppContext.Consumer>
      {({ data }) => (
        <Layout.Row
          width={{ all: "80%", mobile: "90%" }}
          top="20px"
          bottom="10px"
          gutter="20px"
        >
          <NavLink activeClassName="current-page" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="current-page" to="/rooms">
            Rooms
          </NavLink>
          <Layout.Box selfAlign="right">
            <NavLink activeClassName="current-page" to="/login">
              {data.auth ? "Sign out" : "Sign in"}
            </NavLink>
          </Layout.Box>
        </Layout.Row>
      )}
    </AppContext.Consumer>
  );
};

export default Header;
