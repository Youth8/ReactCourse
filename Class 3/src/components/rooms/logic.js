const findRoom = (rooms, id) => {
  let result = { i: -1 };
  for (let index = 0; index < rooms.length; index++) {
    const rm = rooms[index];
    if (rm.id.toString() === id) {
      const room = {
        ...rm
      };
      result.room = room;
      result.i = index;
      break;
    }
  }

  return result;
};

export default {
  findRoom
};
