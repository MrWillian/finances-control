import { Action } from 'redux';
import { call, put } from 'redux-saga/effects';
import api from '../../../../../../../src/services/api';

import { loadSuccess, loadFailure } from './actions';
import { Account } from './types';

interface CreateAction extends Action, ICreate { type: "CREATE_ACCOUNT" }
interface DeleteAction extends Action, IDelete { type: "DELETE_ACCOUNT" }

interface ICreate {
  payload: {
    data: Account,
    token: string
  }
}

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

export function* create(action: CreateAction) {
  try {
    const response = yield call(api.post, 'accounts', action.payload.data, {
      headers: { Authorization: `Bearer ${action.payload.token}` }
    });
    yield put(loadSuccess(response.data.data));
  } catch (error) {
    console.log(error);
    yield put(loadFailure(error));
  }
}

export function* remove(action: DeleteAction) {
  try {
    const response = yield call(api.delete, 'accounts/'+action.payload.id, { 
      headers: { Authorization: `Bearer ${action.payload.token}` }
    });
    yield put(loadSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(loadFailure(error));
  }
}
