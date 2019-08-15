const findRoom = (rooms, id) => {
  let result = { i: -1 };
  for (let index = 0; index < rooms.length; index++) {
    const rm = rooms[index];
    if (rm.id.toString() === id.toString()) {
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

const covertToTableData = (arr, refineRow) => {
  const head = Object.keys(arr[0]);
  const body = arr.map((item, i) => {
    const row = { key: item.id, cells: [] };
    for (let index = 0; index < head.length; index++) {
      const element = head[index];
      row.cells.push(item[element]);
    }

    return refineRow(item, row);
  });

  return { head, body };
};

export default {
  findRoom,
  covertToTableData
};
