import { action } from 'typesafe-actions';
import { Action, Reducer } from 'redux';
import { call, put } from 'redux-saga/effects';
import api from '../../../../../../src/services/api';

export enum TransactionCategoriesTypes {
  LOAD_REQUEST = '@transactionCategories/LOAD_REQUEST',
  LOAD_SUCCESS = '@transactionCategories/LOAD_SUCCESS',
  LOAD_FAILURE = '@transactionCategories/LOAD_FAILURE',
}

export interface TransactionCategory {
  id?: number;
  name: string;
}

export interface TransactionCategoriesState {
  readonly data: TransactionCategory[],
  readonly error: boolean,
}

interface LoadAction extends Action, ILoad { type: "LOAD_CATEGORY" }

interface ILoad { payload: { data: TransactionCategory, token: string }}

const INITIAL_STATE: TransactionCategoriesState = { data: [], error: false };

export const loadRequest = (token: string) => action(TransactionCategoriesTypes.LOAD_REQUEST, { token });
const loadSuccess = (data: TransactionCategory[]) => action(TransactionCategoriesTypes.LOAD_SUCCESS, { data });
const loadFailure = (data: Error) => action(TransactionCategoriesTypes.LOAD_FAILURE, { data });

const reducer: Reducer<TransactionCategoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TransactionCategoriesTypes.LOAD_SUCCESS:
      return { ...state, error: false, data: action.payload.data };
    case TransactionCategoriesTypes.LOAD_FAILURE:
      return { ...state, error: true, data: action.payload.data };
    default: 
      return state;
  }
}

export function* load(action: LoadAction) {
  try {
    const response = yield call(api.get, 'categories', {
      headers: { Authorization: `Bearer ${action.payload.token}` }
    });
    yield put(loadSuccess(response.data.data));
  } catch(error) {
    yield put(loadFailure(error));
  }
}

export default reducer;
