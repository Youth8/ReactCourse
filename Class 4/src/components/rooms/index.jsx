import React from "react";
import Wrapper from "../hoc/AuthWrapper";
import RoomTable from "./ReduxContainerForRoomTable";
import Layout from "epc-ui-layout";
import { Button } from "epc-ui-core-react/components/button";
import { Link } from "react-router-dom";

const RoomList = () => {
  return (
    <Layout.Column gutter="10px">
      <Layout.Box>
        <Link to="/rooms/add">
          <Button type="action">Create a room</Button>
        </Link>
      </Layout.Box>
      <RoomTable />
    </Layout.Column>
  );
};

export default Wrapper(RoomList);
