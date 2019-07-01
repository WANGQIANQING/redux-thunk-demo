import * as actionTypes from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionTypes.CHANGE_INPUT_VALUE:
      newState.inputValue = action.value;
      return newState;
    case actionTypes.ADD_TODO_ITEM:
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    case actionTypes.DELETE_TODO_ITEM:
      newState.list.splice(action.index, 1);
      return newState;
    default:
      return state;
  }

}