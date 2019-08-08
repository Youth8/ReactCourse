import React from "react";
import Layout from "epc-ui-layout";
import { Select, Input } from "epc-ui-validation-ferris";
import Validation from "epc-ui-validation";
import roomTypesAndClass from "../../../data/room-type-class";
import { Button } from "epc-ui-core-react/components/button";
import { Banner } from "epc-ui-core-react/components/banner";
import { Link } from "react-router-dom";
import BaseComponent from "../common/BaseComponent";
import uuid from "uuid";
import logic from './logic';
import Wrapper from "../hoc/AuthWrapper";

class RoomEditor extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setRef = this.setRef.bind(this);

    const { match } = props;
    let room = {
      roomName: "",
      roomType: "",
      roomClass: ""
    };
    if (
      match.params.id &&
      context.data.rooms &&
      context.data.rooms.length > 0
    ) {
      const tRoom = logic.findRoom(context.data.rooms, match.params.id);
      if (tRoom.i > -1) {
        room.roomName = tRoom.room.name;
        room.roomType = tRoom.room.roomType;
        room.roomClass = tRoom.room.roomClass;
        room.id = tRoom.room.id;
      }
    }

    this.state = {
      ...room,
      success: false,
      key: uuid.v4(),
      id: match.params.id
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value, success: false });
  }

  setRef(ref) {
    this.validationRef = ref;
    // this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    const valid = this.validationRef.validate();

    if (valid) {
      const { roomName, roomClass, roomType, id } = this.state;
      const { rooms } = this.context.data;
      let newRoom = {
        id: roomName.replace(" ", ""),
        name: roomName,
        roomType: roomType,
        roomClass: roomClass
      };
      if (id) {
        newRoom = logic.findRoom(this.context.data.rooms, id);
        if (newRoom.i > -1) {
          newRoom.room.name = roomName;
          newRoom.room.roomClass = roomClass;
          newRoom.room.roomType = roomType;
        }

        const newRooms = [...rooms];
        newRooms[newRoom.i] = newRoom.room;
        this.context.changeContext({ rooms: [...newRooms] });
      } else {
        this.context.changeContext({ rooms: [...rooms, newRoom] });
      }

      this.setState({
        success: true,
        roomClass: "",
        roomName: "",
        roomType: "",
        key: uuid.v4()
      });
    }
    // this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { roomName, roomClass, roomType, success, id } = this.state;
    const actionText = id ? "Save" : "Create";
    return (
      <Validation.Core.Context.Root ref={this.setRef}>
        <Layout.Column
          top={{ all: "40px", mobile: "20px" }}
          align="center"
          gutter="20px"
        >
          {success && (
            <Layout.Box width="100%">
              <Banner
                dismiss
                dismissAltText="Close"
                elevation="0"
                headline="A room was created successfully."
                scope="page"
                stacked={false}
                onDismiss={() => {
                  this.setState({ success: false });
                }}
                type="success"
              />
            </Layout.Box>
          )}
          <span>{`${actionText} a room for your property`}</span>
          <Layout.Column
            key={this.state.key}
            width={{ all: "60%", mobile: "100%" }}
            gutter="20px"
          >
            <Input
              name="roomName"
              value={roomName}
              label="Room Name"
              onChange={this.onChange}
              floatLabel={true}
              required
            />
            <Layout.Row wrap gutter="10px">
              <Layout.Box width={{ all: "50%", mobile: "100%" }}>
                <Select
                  required
                  name="roomType"
                  value={roomType}
                  label="Room Type"
                  onChange={this.onChange}
                  optionList={roomTypesAndClass.roomTypes}
                />
              </Layout.Box>
              <Layout.Box width={{ all: "50%", mobile: "100%" }}>
                <Select
                  name="roomClass"
                  value={roomClass}
                  label="Room Class"
                  onChange={this.onChange}
                  optionList={roomTypesAndClass.roomClasses}
                />
              </Layout.Box>
            </Layout.Row>
          </Layout.Column>

          <Layout.Column
            top="30px"
            align="center"
            width={{ all: "60%", mobile: "100%" }}
          >
            <Layout.Row gutter="30px">
              <Button onClick={this.onSubmit}>
                {actionText.toUpperCase()}
              </Button>
              <Link to="/rooms">
                <Button>CANCEL</Button>
              </Link>
            </Layout.Row>
          </Layout.Column>
        </Layout.Column>
      </Validation.Core.Context.Root>
    );
  }
}

export default Wrapper(RoomEditor);
