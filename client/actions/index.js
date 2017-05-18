import * as types from '../constants/ActionTypes'

export const add = () =>
({type: types.ADD})

export const toggle = index =>
({type: types.TOGGLE, payload: index})

export const update = text =>
({type: types.UPDATE, payload: text})

// loads data emulating a fetch service. Data was modify to user proper images.
// export const loadData = () => {
//     return (dispatch) => {
//             dispatch(fetchService(boltaartData.data));
//     }
// };
