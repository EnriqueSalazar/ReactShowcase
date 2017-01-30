import * as types from '../constants/ActionTypes'
import trafficMeister from '../service';

export const fetchService = payload => ({type: types.FETCH_SERVICE, payload});

export const addSelected = payload => ({type: types.ADD_SELECTED, payload})

