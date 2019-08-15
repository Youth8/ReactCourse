import roomsJson from "../../data/rooms.json";
import ActionTypes from "../actions/action-types";

export default (state = { rooms: roomsJson.rooms }, action) => {
  switch (action.type) {
    case ActionTypes.ACTION_CHANGE_ROOMS:
      return {
        ...state,
        rooms: action.payload
      };
    default:
      return state;
  }
};
