import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Dashboard from '../../components/Dashboard';
import Form from '../../components/Form';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Dashboard />);
});

test('should render Dashboard correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ADD button in Summary component', () => {
  expect(wrapper.find('button').exists()).toBe(true);
});
