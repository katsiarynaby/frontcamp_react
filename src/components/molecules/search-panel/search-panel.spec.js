import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';

import SearchPanel from './index';

describe('SearchPanel', () => {
    it("SearchPanel should render correctly", () => {
        const wrapper = shallow(<SearchPanel />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
