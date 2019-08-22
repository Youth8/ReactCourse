import "../../__mocks__/epc-ui-layout-mock";
import "../../__mocks__/epc-ui-validation-mock";
import React from "react";
import { render } from "enzyme";
import Login from "../../../src/components/login";

describe("Tests for Login", () => {
  test("Sign in page", () => {
    const instance = render(<Login changeAuth={jest.fn()} />, {
      context: { changeContext: jest.fn() }
    });
    expect(instance).toMatchSnapshot();
  });
});
