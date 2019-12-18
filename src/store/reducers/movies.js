const initialState = {
    movies: [],
    count: '',
    film: null,
    genre: '',
};

export default function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MOVIES':
            return {
                ...state,
                movies: action.payload.data,
                count: action.payload.total,
            };
        case 'ADD_FILM':
            return {
                ...state,
                film: action.payload,
            };
        case 'ADD_MOVIE_GENRE':
            return {
                ...state,
                genre: action.payload,
            };
        default: return state;
    };
};