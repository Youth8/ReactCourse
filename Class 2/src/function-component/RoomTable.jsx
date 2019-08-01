import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "./Table";

class RoomTable extends Component {
  constructor(props) {
    super(props);
    this.state={
      rooms: props.rooms,
      theme: 'dark',
    }
  }
  
  render() {
    const { rooms } = this.state;
    const head = Object.keys(rooms[0]);
    const body = rooms.map((room, i) => {
      const row = [];
      for (let index = 0; index < head.length; index++) {
        const element = head[index];
        row.push(room[element]);
      }

      row.push(
        <button
          onClick={e => {
            const { rooms } = this.state;
            const newRooms = [...rooms];
            newRooms.splice(0, 1)
            // console.log(e);
            // console.log(e.nativeEvent);

            // for (let j = 0; j < 2; j++) {
            //   // newRooms.splice(i+j, 1);
            //   const newRooms = [...this.state.rooms];
            //   // console.log(newRooms.length);
            //   this.setState({ rooms: newRooms.splice(0, 1) });
            // }
// this.state.rooms = newRooms;
           this.setState({rooms:newRooms});
          }}
        >
          Detele
        </button>
      );

      return row;
    });

    return <Table head={head} body={body} title="Room List Table" />;
  }
}

RoomTable.propTypes = {
  rooms: PropTypes.array
};

export const Theme='dark';

export default RoomTable;

// import React from "react";
// import RoomData from "../../data/rooms-data";
// import Table from "./Table";

// const RoomTable = () => {
//   const head = Object.keys(RoomData.rooms[0]);
//   const body = RoomData.rooms.map(room => {
//     const row = [];

//     for (let index = 0; index < head.length; index++) {
//       const element = head[index];
//       row.push(room[element]);
//     }

//     return row;
//   });

//   return <Table title="Room List Table" {...{ head, body }} />;
// };

// export default RoomTable;
