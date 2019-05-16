import React from 'react';
import BoxForm from './BoxForm';
import { shallow, mount, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

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

xit('it renders initial message', () => {
  let wrapper = mount(<BoxForm />);
  expect(wrapper.exists('p')).toEqual(true);
  expect(wrapper.html()).toContain("Think of a Question");
});

xit('it renders correct message', () => {
  let wrapper = mount(<BoxForm />);
  wrapper.setState({ msg: "Hello", color: "rebeccapurple" });
  let p_elem = wrapper.find('p').first();
  expect(p_elem.equals(<p>Hello</p>)).toEqual(true);
});

const shortList = [
  { msg: "Whiskey is a dog.", color: "green" },
  { msg: "Whiskey likes food.", color: "green" },
  { msg: "Whiskey likes sleeping.", color: "green" },
]

xit('it changes default message on click', () => {
  let wrapper = mount(<BoxForm  answers={shortList}/>);
  wrapper.simulate("click");
  expect(wrapper.html()).toContain("Whiskey");
});