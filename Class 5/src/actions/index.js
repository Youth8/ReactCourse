import ActionTypes from './action-types';

export const changeAuth = isAuth => {
  return {
    type: ActionTypes.ACTION_CHANGE_AUTH,
    payload: isAuth
  };
};

export const changeRooms = rooms => {
  return {
    type: ActionTypes.ACTION_CHANGE_ROOMS,
    payload: rooms
  };
};
