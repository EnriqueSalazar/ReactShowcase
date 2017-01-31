import * as types from '../constants/ActionTypes'
import trafficMeister from '../service';

const fetchService = payload => ({type: types.FETCH_SERVICE, payload});
export const fetchMeister = () => {
    return (dispatch)=>{
        trafficMeister.fetchData((error, data) => {
            dispatch(fetchService({error, data}));
        });
    }
}

export const addSelected = payload => ({type: types.ADD_SELECTED, payload});

export const filterTypes = data => {
    let vehicleTypes = [];
    data.map(item => {
        let type = vehicleTypes.find(type => {
            return item.type === type.option;
        });
        if (typeof type === "undefined") {
            vehicleTypes.push({value: item.type, option: item.type});
        }
    });
    return {type: types.FILTER_TYPES, vehicleTypes};
};

export const filterBrands = (data, type) => {
    let vehicleBrands = [];
    data.map(item => {
        if (item.type === type) {
            vehicleBrands.push({value: item.id, option: item.brand});
        }
    });
    return {type: types.FILTER_BRANDS, vehicleBrands};
};

export const filterBrandColors = (data, selectedBrandId) => {
    let vehicleBrandColors = [];
    let selectedBrand = data.find(item => {
        return item.id === selectedBrandId;
    });
    selectedBrand.colors.map(color => {
        vehicleBrandColors.push({value: color, option: color});
    });
    return {type: types.FILTER_BRAND_COLORS, vehicleBrandColors};
};