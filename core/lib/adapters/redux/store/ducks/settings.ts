import { action } from 'typesafe-actions';
import { Action, Reducer } from 'redux';
import { call, put } from 'redux-saga/effects';
import api from '../../../../../../src/services/api';

export enum SettingsTypes {
  LOAD_REQUEST = '@balance/LOAD_REQUEST',
  LOAD_SUCCESS = '@balance/LOAD_SUCCESS',
  LOAD_FAILURE = '@balance/LOAD_FAILURE',
}

export interface Settings {
  theme: string;
  language: string;
  hideTotalOfAccounts: boolean;
}

export interface SettingsState {
  readonly data: Settings[],
  readonly error: boolean,
}

interface LoadAction extends Action, ILoad { type: "LOAD_SETTING" }

interface ILoad { payload: { data: Settings, token: string }}

const INITIAL_STATE: SettingsState = { data: [], error: false };

export const loadRequest = (token: string) => action(SettingsTypes.LOAD_REQUEST, { token });
const loadSuccess = (data: Settings[]) => action(SettingsTypes.LOAD_SUCCESS, { data });
const loadFailure = (data: Error) => action(SettingsTypes.LOAD_FAILURE, { data });

const reducer: Reducer<SettingsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SettingsTypes.LOAD_SUCCESS:
      return { ...state, error: false, data: action.payload.data };
    case SettingsTypes.LOAD_FAILURE:
      return { ...state, error: true, data: action.payload.data };
    default: 
      return state;
  }
}

export function* load(action: LoadAction) {
  try {
    const response = yield call(api.get, 'search/setting', {
      headers: { Authorization: `Bearer ${action.payload.token}` }
    });
    yield put(loadSuccess(response.data.data.data));
  } catch(error) {
    console.log('error', error);
    yield put(loadFailure(error));
  }
}

export default reducer;
