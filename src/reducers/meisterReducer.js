import {
    FETCH_SERVICE,
    ADD_SELECTED,
    FILTER_TYPES,
    FILTER_BRANDS,
    FILTER_BRAND_COLORS,
} from '../constants/ActionTypes'

const initialState =
    {
        selected: [],
        data: null,
        error: null,
        vehicleTypes: [],
        vehicleBrands: [],
        vehicleBrandColors: [],
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
        case FILTER_TYPES:
            return {
                ...state,
                vehicleTypes: action.vehicleTypes,
            };
        case FILTER_BRANDS:
            return {
                ...state,
                vehicleBrands: action.vehicleBrands,
            };
        case FILTER_BRAND_COLORS:
            return {
                ...state,
                vehicleBrandColors: action.vehicleBrandColors,
            };
        default:
            return state;
    }
}
