import React from 'react';
import BoxForm from './BoxForm';
import { shallow, mount, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

jest.mock('uuid', () => {
  return {
      v4: jest.fn(() => 1)
  };
});

configure({
  adapter: new Adapter()
});

it('renders without errors', () => {
  shallow(<BoxForm />);
});

it('snapshot matches', () => {
  let wrapper = shallow(<BoxForm />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it("allows for changes in height, width, and color", function() {
  let wrapper = mount(<BoxForm />);
 
  const width = wrapper.find('#width');
  width.instance().value = "100";
  width.simulate("change");
  
  const height = wrapper.find('#height');
  height.instance().value = "100";
  height.simulate("change");
  
  const backgroundColor = wrapper.find('#backgroundColor');
  backgroundColor.instance().value = "#000000";
  backgroundColor.simulate("change");

  expect(wrapper.state().width).toEqual("100");
  expect(wrapper.state().height).toEqual("100");
  expect(wrapper.state().backgroundColor).toEqual("#000000");

});

it("runs a mocked fn on submit", function () {
  const submitFn = jest.fn();
  let wrapper = mount(
    <BoxForm addBox={submitFn} />
  );
  const form = wrapper.find("form")

  form.simulate("submit")

  expect(submitFn).toHaveBeenCalled();
});