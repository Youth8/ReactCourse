import "../../__mocks__/epc-ui-layout-mock";

jest.mock("react-router-dom", () => ({
  __esModule: true, // this property makes it work
  Redirect: props => {
    if (props.to === "/login") {
      return "no login";
    }

    return "";
  }
}));

import React from "react";
import render from "react-test-renderer";
import Home from "../../../src/components/home";

test("test for home page", () => {
  const result = render.create(<Home />).toJSON();
  expect(result).toMatchSnapshot();
});
