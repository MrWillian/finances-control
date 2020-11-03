export enum AccountsTypes {
  LOAD_REQUEST = '@accounts/LOAD_REQUEST',
  LOAD_SUCCESS = '@accounts/LOAD_SUCCESS',
  LOAD_FAILURE = '@accounts/LOAD_FAILURE',
  LOAD_CREATE_SUCCESS = '@accounts/LOAD_CREATE_SUCCESS',
  LOAD_DELETE_SUCCESS = '@accounts/LOAD_DELETE_SUCCESS',
  CREATE_ACCOUNT = '@accounts/CREATE_ACCOUNT',
  DELETE_ACCOUNT = '@accounts/DELETE_ACCOUNT',
}

export interface Account {
  id?: number;
  name: string;
  description: string;
  amount: string;
}

export interface AccountsState {
  readonly data: Account[],
  readonly error: boolean,
}
