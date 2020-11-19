import { action } from 'typesafe-actions';
import { Action, Reducer } from 'redux';
import { call, put } from 'redux-saga/effects';
import api from '../../../../../../src/services/api';

export enum SettingsTypes {
  LOAD_REQUEST = '@settings/LOAD_REQUEST',
  LOAD_SUCCESS = '@settings/LOAD_SUCCESS',
  LOAD_FAILURE = '@settings/LOAD_FAILURE',
  UPDATE_SETTINGS = '@settings/UPDATE_SETTINGS',
}

export interface Settings {
  id?: number;
  theme?: string;
  language?: string;
  hideTotalOfAccounts?: boolean;
}

export interface SettingsState {
  readonly data: Settings[],
  readonly error: boolean,
}

interface LoadAction extends Action, ISettingsAction { type: "LOAD_SETTING" }
interface UpdateAction extends Action, ISettingsAction { type: "UPDATE_SETTINGS" }

interface ISettingsAction { payload: { data: Settings, token: string }}

const INITIAL_STATE: SettingsState = { data: [], error: false };

export const loadRequest = (token: string) => action(SettingsTypes.LOAD_REQUEST, { token });
export const updateSettings = (data: Settings, token: string) => action(SettingsTypes.UPDATE_SETTINGS, {data, token});
const loadSuccess = (data: Settings[]) => action(SettingsTypes.LOAD_SUCCESS, { data });
const loadFailure = (data: Error) => action(SettingsTypes.LOAD_FAILURE, { data });

const reducer: Reducer<SettingsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SettingsTypes.LOAD_SUCCESS:
      return { ...state, error: false, data: action.payload.data };
    case SettingsTypes.LOAD_FAILURE:
      return { ...state, error: true, data: action.payload.data };
    case SettingsTypes.UPDATE_SETTINGS:
      return { ...state, error: false, data: action.payload.data };
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
    yield put(loadFailure({ name: "Error", message: error, stack: undefined }));
  }
}

export function* update(action: UpdateAction) {
  try {
    console.log('action', action);
    const response = yield call(api.put, 'settings/' + action.payload.data.id, action.payload.data, {
      headers: { Authorization: `Bearer ${action.payload.token}` }
    });
    console.log('response', response.data.data);
    yield put(loadSuccess(response.data.data));
  } catch(error) {
    console.log('error', error);
    yield put(loadFailure({ name: "Error", message: error, stack: undefined }));
  }
}

export default reducer;
