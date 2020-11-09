import React from 'react';
import { shallow } from 'enzyme';
import Form from '../../components/Form';

test('should render Form correctly', () => {
  // @ts-ignore
  const wrapper = shallow(<Form />);
  expect(wrapper).toMatchSnapshot();
});

test('should not call onSubmit for empty form submission', () => {
  const onFormSubmit = jest.fn();
  // @ts-ignore
  const wrapper = shallow(<Form onFormSubmit={onFormSubmit} />);
  wrapper.find('form').simulate('submit');
  expect(onFormSubmit).not.toHaveBeenCalled();
});

test('should call onSubmit and submit form', () => {
  const firstName = 'your name';
  const surname = 'Surname';
  const email = 'test@test.com';
  const onFormSubmit = jest.fn();
  // @ts-ignore
  const wrapper = shallow(<Form onFormSubmit={onFormSubmit} />);
  wrapper.find('Field').at(0).simulate('change', firstName);
  wrapper.find('Field').at(1).simulate('change', surname);
  wrapper.find('Field').at(2).simulate('change', email);
  wrapper.find('form').simulate('submit');
  expect(onFormSubmit).toHaveBeenCalled();
});
