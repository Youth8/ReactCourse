import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "../common/Table";
import BaseComponent from "../common/BaseComponent";
import { Button } from "epc-ui-core-react/components/button";
import { Link } from "react-router-dom";
import logic from "./logic";

class RoomTable extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { rooms } = this.context.data;
    if(!rooms || rooms.length<1){
      return <span>There is no room yet. Please create one!</span>;
    }
    const head = Object.keys(rooms[0]);
    const body = rooms.map((room, i) => {
      const row = { key: room.id, cells: [] };
      for (let index = 0; index < head.length; index++) {
        const element = head[index];
        row.cells.push(room[element]);
      }

      row.cells.push(
        <React.Fragment>
          <Link to={`/rooms/edit/${room.id}`}>
            <Button type="action">Edit</Button>
          </Link>
          <Button
            onClick={e => {
              const { rooms } = this.context.data;
              const newRooms = [...rooms];
              const tRoom = logic.findRoom(newRooms, room.id);
              if (tRoom.i > -1) {
                newRooms.splice(tRoom.i, 1);
                this.context.changeContext({ rooms: newRooms });
              }
            }}
            type="action"
          >
            Detele
          </Button>
        </React.Fragment>
      );

      return row;
    });

    return <Table head={head} body={body} title="Room List Table" />;
  }
}

RoomTable.propTypes = {
  rooms: PropTypes.array
};

export default RoomTable;
