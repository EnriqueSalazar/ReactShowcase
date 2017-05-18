import {
  TOGGLE, ADD, UPDATE
} from '../constants/ActionTypes'

const initialState = {
  toDos: [],
  textField: ''
}

export default function toDo (state = initialState, action) {
  const toDos = state.toDos.slice()
  switch (action.type) {
    case TOGGLE:
      const item = toDos[action.payload]
      if (item) {
        item.selected = !item.selected
      }
      toDos[action.payload] = item
      return {
        ...state,
        toDos
      }
    case ADD:
      const newItem = Object.assign({}, {selected: false, text: state.textField})
      toDos.push(newItem)
      const textField = ''
      return {
        ...state,
        toDos,
        textField
      }
    case UPDATE:
      return {
        ...state,
        textField: action.payload
      }
    default:
      return state
  }
}
