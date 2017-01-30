import {combineReducers} from 'redux'
import meister from './meisterReducer'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    meister,
    routing: routerReducer
});

export default rootReducer
