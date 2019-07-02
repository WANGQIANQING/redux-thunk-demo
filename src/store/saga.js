import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actionCreators from './actionCreators';
import axios from 'axios';

function* getInitList() {

  try {
    const res = yield axios.get('/api/list.json');
    const action = actionCreators.initListAction(res.data);
    yield put(action);
  }catch (e) {
    console.log('list.json网络请求失败');
  }

}

function* mySaga() {
  yield takeEvery(actionTypes.GET_INIT_LIST, getInitList);
}

export default mySaga;