import { Action } from 'redux';
import { call, put } from 'redux-saga/effects';
import api from '../../../../../../../src/services/api';

import { loadSuccess, loadFailure } from './actions';

interface DeleteAction extends Action, IDelete { type: "DELETE_ACCOUNT" }

interface IDelete {
  payload: {
    id: number,
    token: string
  }
}

export function* load() {
  try {
    const response = yield call(api.get, 'accounts');
    yield put(loadSuccess(response.data.data));
  } catch(error) {
    yield put(loadFailure(error));
  }
}

export function* remove(action: DeleteAction) {
  try {
    const response = yield call(api.delete, 'accounts/'+action.payload.id, {
      headers: { Authorization: `Bearer ${action.payload.token}` 
    }});
    yield put(loadSuccess(response));
  } catch (error) {
    yield put(loadFailure(error));
  }
}
