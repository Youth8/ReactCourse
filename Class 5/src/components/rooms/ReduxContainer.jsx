import { connect } from "react-redux";
import { changeRooms } from "../../actions";

export default Inner =>
  connect(
    state => ({ rooms: state.Rooms.rooms }),
    dispatch => ({ changeRooms: rooms => dispatch(changeRooms(rooms)) })
  )(Inner);
