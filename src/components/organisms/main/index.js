import React, { Component } from 'react';

import SearchPanel from '../../molecules/search-panel/index';
import ResultsBody from '../../molecules/results-body/index';

import { MOVIES_API } from '../../../api/index';

import './main.scss';

const blockName = 'main';

export default class Main extends Component {

    state = {
        film: null,
        movies: [],
        genre: '',
        count: '',
        showSearchPanel: true,

    };

    getMovie = (id) => {
        MOVIES_API.fetchMovie(id)
            .then(result => {
                this.setState({ film: result })
            })
            .catch(error => {
                console.log(error)
            })
    };

    getMovies = () => {
        MOVIES_API.fetchMovies()
            .then(result => {
                console.log(result)
                this.setState({ movies: result.data, count: result.total })
            }
            )
        console.log(this.state)
    }

    render() {
        const { movie, movies, count, genre, showSearchPanel } = this.state;

        return (
            <main className={blockName}>
                {showSearchPanel ?
                    <SearchPanel
                        getSearchParams={this.getMovies}
                    /> :
                    <Film 
                        movie={movie}
                    />
                }
                <ResultsBody
                    movies={movies}
                    genre={genre}
                    count={count}
                    showSearchPanel={showSearchPanel}
                    />
            </main>
        )

    };
}