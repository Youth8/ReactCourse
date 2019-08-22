import ActionTypes from "../actions/action-types";

export default (state = false, action) => {
  switch (action.type) {
    case ActionTypes.ACTION_CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
};
