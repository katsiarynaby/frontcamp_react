import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';

import SearchFilter from './index';

describe('SearchFilter', () => {
    it("SearchFilter should render correctly", () => {
        const wrapper = shallow(<SearchFilter
            title="SEARCH BY"
            filters={[{
                key: 'title',
                name: 'title'
            },
            {
                key: 'genres',
                name: 'genres'
            }]}
            activeFilter="title"
            getActiveFilter={jest.fn()}
        />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
