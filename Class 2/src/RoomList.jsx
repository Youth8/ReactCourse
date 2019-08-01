import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "epc-ui-layout";
import ThemeContext from "./theme-context";

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [...props.rooms]
    };
  }

  render() {
    const { rooms } = this.state;
    return (
      <ThemeContext.Consumer>
        {({theme}) => (
          <ol className={theme}>
            {rooms.map((room, i) => {
              return (
                <li key={i}>
                  <Layout.Row bottom="10px" top="10px" gutter="50px">
                    <span>{room.name}</span>
                    <button
                      onClick={e => {
                        const { rooms } = this.state;
                        const newRooms = [...rooms];
                        console.log(e);
                        // console.log(e.nativeEvent);

                        for (let j = 0; j < 2; j++) {
                          // newRooms.splice(i+j, 1);
                          const newRooms = [...this.state.rooms];
                          console.log(newRooms.length);
                          this.setState({ rooms: newRooms.splice(0, 1) });
                        }

                        // this.setState((preState,props)=> {
                        //   console.log(preState);
                        //   return { rooms: newRooms }
                        // });
                      }}
                    >
                      Detele
                    </button>
                  </Layout.Row>
                </li>
              );
            })}
          </ol>
        )}
      </ThemeContext.Consumer>
    );
  }
}

// const RoomList = props => {
//   const { rooms } = props;
//   props.test = true;
//   return (
//     <ol>
//       {rooms.map((room, i) => {
//         return <li key={i}>{room.name}</li>;
//       })}
//     </ol>
//   );
// };

// RoomList.displayName = "test";

// class RoomList extends Component {
//   //   onDelete(index) {

//   //   }
//   render() {
//     const { rooms } = this.state || this.props;
//     return (
//       <React.Fragment>
//         <Layout.Space left="25px">
//           <h5>Room List</h5>
//         </Layout.Space>
//         <ol>
//           {rooms.map((room, i) => {
//             return (
//               <li className="room-item" key={i}>
//                 <Layout.Row top="10px" gutter="10px">
//                   <span>
//                     {room.name} {room.roomType} {room.roomClass}
//                   </span>
//                   <button
//                     onClick={(e) => {
//                       const { rooms } = this.state || this.props;
//                       const newRooms = [...rooms];
//                       console.log(e);
//                       console.log(e.nativeEvent);
//                       newRooms.splice(i, 1);
//                       this.setState({ rooms: newRooms });
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </Layout.Row>
//               </li>
//             );
//           })}
//         </ol>
//       </React.Fragment>
//     );
//   }
// }

RoomList.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.object)
};

export default RoomList;
