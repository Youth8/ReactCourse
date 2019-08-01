import React from "react";
import ReactDOM from "react-dom";
import Room from "./Room";
import RoomData from "../data/rooms-data";
import RoomListWithContext from "./RoomListWithContext";
import "../scss/index.scss";
import RoomTable, {Theme} from "./function-component/RoomTable";
// import RoomList from './function-component';
import RoomList from './function-component/index.jsx';

ReactDOM.render(

  // <RoomList name={true} firstName="Michael" />,
  // <RoomList name={{name:'fc'}} />,
  <RoomTable rooms={RoomData.rooms} />,
  // <RoomListWithContext key="list" rooms={RoomData.rooms} />,
  document.getElementById("content")
);
