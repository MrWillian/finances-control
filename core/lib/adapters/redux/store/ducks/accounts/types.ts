export enum AccountsTypes {
  LOAD_REQUEST = '@accounts/LOAD_REQUEST',
  LOAD_SUCCESS = '@accounts/LOAD_SUCCESS',
  LOAD_FAILURE = '@accounts/LOAD_FAILURE',
  DELETE_ACCOUNT = '@accounts/DELETE_ACCOUNT',
}

export interface Account {
  id: number;
  name: string;
  description: string;
  amount: string;
}

export interface AccountsState {
  readonly data: Account[],
  readonly error: boolean,
}
