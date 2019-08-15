import React, { PureComponent } from "react";
import Layout from "epc-ui-layout";
import AuthWrapper from '../hoc/AuthWrapper';

class Welcome extends PureComponent {
  render() {
    return (
      <Layout.Column align="center" top={{ all: "60px", mobile: "30px" }}>
        <p className="fds-type-bold fds-type-color-info">Class 3</p>
        <p className="fds-type-500">Welcome to ReactJs Code Academy...</p>
      </Layout.Column>
    );
  }
}

export default AuthWrapper(Welcome);
