import { action } from 'typesafe-actions';
import { Action, Reducer } from 'redux';
import { call, put } from 'redux-saga/effects';
import api from '../../../../../../src/services/api';

export enum BalanceTypes {
  LOAD_REQUEST = '@balance/LOAD_REQUEST',
  LOAD_SUCCESS = '@balance/LOAD_SUCCESS',
  LOAD_FAILURE = '@balance/LOAD_FAILURE',
}

export interface Balance {
  total: number;
  totalProfit: number;
  totalExpense: number;
  categoriesBalance: CategoryBalance[];
}

export interface CategoryBalance {
  name: string;
  total: number
}

export interface BalanceState {
  readonly data: Balance[],
  readonly error: boolean,
}

interface LoadAction extends Action, ILoad { type: "LOAD_CATEGORY" }

interface ILoad { payload: { data: Balance, token: string }}

const INITIAL_STATE: BalanceState = { data: [], error: false };

export const loadRequest = (token: string) => action(BalanceTypes.LOAD_REQUEST, { token });
const loadSuccess = (data: Balance[]) => action(BalanceTypes.LOAD_SUCCESS, { data });
const loadFailure = (data: Error) => action(BalanceTypes.LOAD_FAILURE, { data });

const reducer: Reducer<BalanceState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BalanceTypes.LOAD_SUCCESS:
      return { ...state, error: false, data: action.payload.data };
    case BalanceTypes.LOAD_FAILURE:
      return { ...state, error: true, data: action.payload.data };
    default: 
      return state;
  }
}

export function* load(action: LoadAction) {
  try {
    const header = { Authorization: `Bearer ${action.payload.token}` }
    const responseBalance = yield call(api.get, 'balance', { headers: header });
    const responseCategories = yield call(api.get, 'total_for_category', { headers: header });

    const balanceData: Balance[] = [{
      total: responseBalance.data.data.total,
      totalProfit: responseBalance.data.data.profits,
      totalExpense: responseBalance.data.data.expenses,
      categoriesBalance: responseCategories.data.data
    }];

    yield put(loadSuccess(balanceData));
  } catch(error) {
    console.log('error', error);
    yield put(loadFailure(error));
  }
}

export default reducer;
