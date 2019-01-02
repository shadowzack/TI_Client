import {
    GET_LANGUAGES,
    GET_LANGUAGE,
    LANGUAGE_LOADING
} from '../actions/types';

const initialState = {
    languages: [],
    language: {},
    loading: false
};


export default function (state = initialState, action) {
    switch (action.type) {

        case GET_LANGUAGES:
            return {
                ...state,
                languages: action.payload,
                loading: false
            };
        case GET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
                loading: false
            };
        case LANGUAGE_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }

}