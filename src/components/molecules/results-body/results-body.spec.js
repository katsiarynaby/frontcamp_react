import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';

import ResultsBody from './index';

describe('ResultsBody', () => {
    it("ResultsBody should render correctly", () => {
        const wrapper = shallow(<ResultsBody
            showSearchPanel={true}
            movies={[{
                budget: 0,
                genres: ["Action", "Science Fiction"],
                id: 320288,
                overview: "Gathered together by Professor Charles Xavier to protect a world that fears and hates them, the X-Men had fought many battles, been on adventures that spanned galaxies, grappled enemies of limitless might, but none of this could prepare them for the most shocking struggle they would ever face. One of their own members, Jean Grey, has gained power beyond all comprehension, and that power has corrupted her absolutely! Now, they must decide if the life of the woman they cherish is worth the existence of the entire universe!",
                poster_path: "https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg",
                release_date: "2019-02-14",
                revenue: 0,
                runtime: null,
                tagline: "",
                title: "X-Men: Dark Phoenix",
                vote_average: 0,
                vote_count: 0,
            }
            ]} />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
