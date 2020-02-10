import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';

import CardFilm from './index';
import { movie } from './test.data';

describe('CardFilm', () => {
    it("CardFilm should render correctly", () => {
        const wrapper = shallow(<CardFilm
            onClick={jest.fn()}
            movie={movie}
        />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});


