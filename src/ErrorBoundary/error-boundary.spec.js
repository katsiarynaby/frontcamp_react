import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';

import ErrorBoundary from './index';

describe('ErrorBoundary', () => {
  it("ErrorBoundary should render correctly", () => {
    const wrapper = shallow(<ErrorBoundary />);

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});