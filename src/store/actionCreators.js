import * as actionTypes from "./actionTypes";
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: actionTypes.CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: actionTypes.ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
  type: actionTypes.DELETE_TODO_ITEM,
  index
});

const initListAction = (data) => ({
  type: actionTypes.INIT_LIST_ACTION,
  data
});

export const getTodoList = () => {
  return (dispatch,getState) => {
    axios.get('/api/list.json').then((res) => {
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);
      // console.log(getState());
    });
  };
};
