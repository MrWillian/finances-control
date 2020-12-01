import { action } from 'typesafe-actions';
import { Action, Reducer } from 'redux';
import { call, put } from 'redux-saga/effects';
import api from '../../../../../../src/services/api';
import { showMessage } from 'react-native-flash-message';

export enum TransactionsTypes {
  LOAD_REQUEST = '@transactions/LOAD_REQUEST',
  LOAD_SUCCESS = '@transactions/LOAD_SUCCESS',
  LOAD_FAILURE = '@transactions/LOAD_FAILURE',
  LOAD_CREATE_SUCCESS = '@transactions/LOAD_CREATE_SUCCESS',
  LOAD_DELETE_SUCCESS = '@transactions/LOAD_DELETE_SUCCESS',
  CREATE_TRANSACTION = '@transactions/CREATE',
}

export interface Transaction {
  id?: number;
  account_id?: number;
  category_id?: number;
  description: string;
  type: string;
  date: string;
  value: number;
}

export interface TransactionsState {
  readonly data: Transaction[],
  readonly error: boolean,
}

interface LoadAction extends Action, ILoad { type: "LOAD_TRANSACTION" }
interface CreateAction extends Action, ICreate { type: "CREATE_TRANSACTION" }

interface ILoad { payload: { data: Transaction, token: string } }
interface ICreate { payload: { data: Transaction, token: string } }

const INITIAL_STATE: TransactionsState = { data: [], error: false };

export const loadRequest = (token: string) => action(TransactionsTypes.LOAD_REQUEST, { token });
const loadSuccess = (data: Transaction[]) => action(TransactionsTypes.LOAD_SUCCESS, { data });
const loadFailure = (data: Error) => action(TransactionsTypes.LOAD_FAILURE, { data });
export const createTransaction = (data: Transaction, token: string) => 
  action(TransactionsTypes.CREATE_TRANSACTION, { data, token });

const reducer: Reducer<TransactionsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TransactionsTypes.LOAD_SUCCESS:
      return { ...state, error: false, data: action.payload.data };
    case TransactionsTypes.LOAD_FAILURE:
      return { ...state, error: true, data: action.payload.data };
    default: 
      return state;
  }
}

export function* load(action: LoadAction) {
  try {
    const response = yield call(api.get, 'search/transactions', {
      headers: { Authorization: `Bearer ${action.payload.token}` }
    });
    yield put(loadSuccess(response.data.data.data));
  } catch(error) {
    console.log(error);
    yield put(loadFailure(error));
  }
}

export function* create(action: CreateAction) {
  try {
    const response = yield call(api.post, 'transactions', action.payload.data, {
      headers: { Authorization: `Bearer ${action.payload.token}` }
    });
    showMessage({ message: "Movimentação cadastrada", type: "success" });
    yield put(loadSuccess(response.data.data));
  } catch (error) {
    showMessage({ 
      message: "Erro!", description: "Erro ao tentar criar a movimentação, tente novamente!", type: "danger" 
    });
    yield put(loadFailure(error));
  }
}

export default reducer;
