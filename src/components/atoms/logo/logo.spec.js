import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';

import Logo from './index';

describe('Logo', () => {
    it("Logo should render correctly", () => {
        const wrapper = shallow(<Logo />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
