import { action } from 'typesafe-actions';
import { AccountsTypes, Account } from './types';

export const saveAccount = (data: Account) => action(AccountsTypes.SAVE_ACCOUNT, { data });

export const updateAccount = (data: Account) => action(AccountsTypes.UPDATE_ACCOUNT, { data });

export const deleteAccount = (id: number) => action(AccountsTypes.DELETE_ACCOUNT, { id });
