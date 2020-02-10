import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';

import SearchField from './index';

describe('SearchField', () => {
    it("SearchField should render correctly", () => {
        const wrapper = shallow(<SearchField getValue='getValue' />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
