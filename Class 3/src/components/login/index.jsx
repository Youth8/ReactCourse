import React, { PureComponent } from "react";
import Layout from "epc-ui-layout";
import { Input } from "epc-ui-validation-ferris";
import { Button } from "epc-ui-core-react/components/button";
import Validation from "epc-ui-validation";
import AppContext from "../context";
import { Redirect } from "react-router-dom";

class Login extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userName: "",
      pwd: "",
      auth: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.setRef = this.setRef.bind(this);
    context.changeContext({ auth: false });
  }

  setRef(ref) {
    this.validationRef = ref;
  }

  onChange(e) {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  }

  onSignIn() {
    const valid = this.validationRef.validate();
    if (valid) {
      this.context.changeContext({ auth: true });
    }
  }

  render() {
    if (this.context.data.auth) {
      return <Redirect to="/" />;
    }

    const { userName, pwd } = this.state;
    return (
      <Validation.Core.Context.Root ref={this.setRef}>
        <Layout.Column align="center">
          <Layout.Column
            top={{ all: "60px", mobile: "30px" }}
            width={{ all: "300px", mobile: "100%" }}
            gutter="10px"
          >
            <Input
              name="userName"
              label="User Name:"
              floatLabel={true}
              required
              onChange={this.onChange}
              value={userName}
            />
            <Input
              name="pwd"
              onChange={this.onChange}
              label="Password:"
              type="password"
              required
              floatLabel={true}
              value={pwd}
            />
            <br />
            <Button onClick={this.onSignIn}>Sign in</Button>
          </Layout.Column>
        </Layout.Column>
      </Validation.Core.Context.Root>
    );
  }
}

Login.contextType = AppContext;

export default Login;
