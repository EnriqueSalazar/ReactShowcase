import * as types from '../constants/ActionTypes'

export const add = () =>
({type: types.ADD})

export const toggle = index =>
({type: types.TOGGLE, payload: index})

export const update = text =>
({type: types.UPDATE, payload: text})
