import React from 'react';
import { shallow } from 'enzyme';
import Summary from '../../components/Summary';

// const formValues = {
//     firstName: 'First name',
//   surname: 'Last name',
//   email: 'test@test.com',
//   query: 'test message'
// }

test('should render Summary correctly', () => {
  const wrapper = shallow(<Summary />);
  expect(wrapper).toMatchSnapshot();
});
