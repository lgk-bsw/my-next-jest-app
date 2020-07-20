import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { List } from "./List";

Enzyme.configure({ adapter: new Adapter() });

test("Adding list item", () => {
    const fakeEvent = { preventDefault: () => console.log("preventDefault") }
    const listComponent = shallow(<List />);
    expect(listComponent.find("ul > li").length).toBe(0);
    listComponent.find("form").simulate("submit", fakeEvent);
    expect(listComponent.find("ul > li").length).toBe(1);
});