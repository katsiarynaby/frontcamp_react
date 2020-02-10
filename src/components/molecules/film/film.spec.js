import React from 'react';
import { shallow } from 'enzyme';
import shallowToJson from 'enzyme-to-json';

import Film from './index';

describe('Film', () => {
    it("Film should render correctly", () => {
        const wrapper = shallow(<Film
            onClickSearch={jest.fn()}
            getFilm={jest.fn()}
            match={{
                path: "/film/:id",
                url: "/film/424785",
                isExact: true,
                params: "{id: \"424785\"}"
            }}
            film={{
                id: 424785,
                title: "Transformers 7",
                tagline: "",
                vote_average: 0,
                vote_count: 0,
                release_date: "2019-06-26",
                poster_path: "https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg",
                overview: "Plot unknown.",
                budget: 0,
                revenue: 0,
                genres: [
                    "Science Fiction",
                    "Action",
                    "Adventure"
                ],
                runtime: null
            }}
        />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
