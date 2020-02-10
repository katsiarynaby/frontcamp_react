import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';

import SearchButton from './index';

describe('SearchButton', () => {
    it("SearchButton active should render correctly", () => {
        const wrapper = shallow(<SearchButton
            active={true}
            value="SEARCH"
            onClick={jest.fn()}
        />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it("SearchButton doesn't active should render correctly", () => {
        const wrapper = shallow(<SearchButton
            active={false}
            value="SEARCH"
            onClick={jest.fn()}
        />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});


