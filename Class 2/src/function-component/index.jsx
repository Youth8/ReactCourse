import React from "react";
import Test from "./Test";
import PropTypes from "prop-types";

const RoomList = props => {
  const { name } = props;

  //   props.name ='Michael';
  //   props.firstName='Liu';

  // conditional rendering
  return <div>{name ? <Test firstName={props.firstName} /> : null}</div>;
  //   if (name) {
  //       return
  //       <span>
  //           { name}
  //       </span>
  //     // return <span>{`Hello world ${name}`}</span>;
  //     // <span></span>
  //     // <Test />

  //   }

  //   return null;
  // return `Hello world ${name}`;
};

RoomList.propTypes = {
  name: PropTypes.string
};

export default RoomList;
