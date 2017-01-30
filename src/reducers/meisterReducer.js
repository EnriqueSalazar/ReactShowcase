import {FETCH_SERVICE, ADD_SELECTED} from '../constants/ActionTypes'

const initialState =
    {
        selected: [],
        data: null,
        error: null
    };


export default function todos(state = initialState, action) {
    switch (action.type) {
        case FETCH_SERVICE:
            return {
                ...state,
                data: action.payload.data,
                error: action.payload.error
            };

        case ADD_SELECTED:
            return {
                ...state,
                selected: [...state.selected, action.payload]
            };

        default:
            return state;
    }
}
