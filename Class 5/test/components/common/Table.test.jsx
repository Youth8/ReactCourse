import React from "react";
import Table from "../../../src/components/common/Table";
import { shallow } from "enzyme";

describe("Tests for Table", () => {
  test("render empty table correctly", () => {
    const table = shallow(<Table head={[]} body={[]} />);
    expect(table).toMatchSnapshot();
  });

  test("render table correctly", () => {
    const head = ["first_name", "last_name"];
    const body = [{ first_name: "Michael", last_name: "Liu" }];
    const table = shallow(<Table head={head} body={body} />);
    expect(table).toMatchSnapshot();
  });
});
