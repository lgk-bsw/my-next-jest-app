import React from "react";
import { Btn } from "./Btn";
import renderer from "react-test-renderer";

test("You can set label", () => {
    const component = renderer.create(
        <Btn label="My label" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});