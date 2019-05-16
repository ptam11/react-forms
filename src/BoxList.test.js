import React from 'react';
import BoxList from './BoxList';
import { shallow, mount, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

jest.mock("uuid/v4", () => {
  let value = 0;
  return () => value++;
});

configure({
  adapter: new Adapter()
});


it('renders without errors', () => {
  shallow(<BoxList />);
});

it('snapshot matches', () => {
  let wrapper = shallow(<BoxList />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
