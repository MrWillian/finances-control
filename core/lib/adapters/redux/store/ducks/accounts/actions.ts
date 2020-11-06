import { action } from 'typesafe-actions';
import { AccountsTypes, Account } from './types';

export const loadRequest = (token: string) => action(AccountsTypes.LOAD_REQUEST, { token });

export const loadSuccess = (data: Account[]) => action(AccountsTypes.LOAD_SUCCESS, { data });

export const loadFailure = (data: Error) => action(AccountsTypes.LOAD_FAILURE, { data });

export const createAccount = (data: Account, token: string) => action(AccountsTypes.CREATE_ACCOUNT, { data, token });

export const deleteAccount = (id: number, token: string) => action(AccountsTypes.DELETE_ACCOUNT, { id, token });
