import React from "react";
// import AppContext from "../context";
import { Redirect } from "react-router-dom";
import BaseComponent from "../common/BaseComponent";

const Wrapper = Inner => {
  class AuthWrapper extends BaseComponent {
    constructor(props, context) {
      super(props, context);
    }

    render() {
      if (!this.context.data.auth) {
        return <Redirect to="/login" />;
      }

      return <Inner {...this.props} />;
    }
  }

  return AuthWrapper;
};

export default Wrapper;
