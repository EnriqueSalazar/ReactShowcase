import * as types from '../constants/ActionTypes'
import trafficMeister from '../service';
import _ from 'lodash';

const fetchService = payload => ({type: types.FETCH_SERVICE, payload});
export const fetchMeister = () => {
    return (dispatch) => {
        trafficMeister.fetchData((error, data) => {
            dispatch(fetchService({error, data}));
        });
    }
};

export const addSelected = payload => ({type: types.ADD_SELECTED, payload});

export const filter = (data, criteria, field) => {
    const filteredData = _.filter(data, criteria);
    const fieldValues = _.map(filteredData, field)
    return _.uniq(fieldValues);
};



export const filterTypes = (data) => {
    const vehicleTypes = filter(data, {}, 'type');
    const vehicleBrands = [];
    const vehicleBrandColors = [];
    return {type: types.FILTER_TYPES, vehicleTypes, vehicleBrands, vehicleBrandColors};
};
export const filterBrands = (data, type) => {
    const vehicleBrands = filter(data, {type}, 'brand');
    const vehicleBrandColors = [];
    return {type: types.FILTER_BRANDS, vehicleBrands, vehicleBrandColors};
};

export const filterBrandColors = (data, type, brand) => {
    const vehicleBrandColors = filter(data, {type, brand}, 'colors')[0];
    return {type: types.FILTER_BRAND_COLORS, vehicleBrandColors};
};