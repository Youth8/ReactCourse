import React from "react";
import Layout from "epc-ui-layout";
import { Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import RoomList from "./rooms";
import RoomEditor from "./rooms/Editor";

const Body = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/add" component={RoomEditor} />
      <Route path="/rooms/edit/:id" component={RoomEditor} />
      <Route path="/rooms" exact component={RoomList} />
      <Route path="/login" exact component={Login} />
    </React.Fragment>
  );
};

export default Body;
