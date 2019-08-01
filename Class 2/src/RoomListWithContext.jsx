import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "epc-ui-layout";
import ThemeContext from "./theme-context";
import RoomData from "../data/rooms-data";
import ThemeSelect from "./ThemeSelect";
import RoomList from "./RoomList";

class RoomListWithContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "green"
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(e) {
    this.setState({ theme: e.target.value });
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          changeTheme: this.changeTheme
        }}
      >
        <ThemeSelect />
        <RoomList key="list" rooms={RoomData.rooms} />
      </ThemeContext.Provider>
    );
  }
}

export default RoomListWithContext;
