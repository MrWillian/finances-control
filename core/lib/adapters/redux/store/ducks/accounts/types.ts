export enum AccountsTypes {
  SAVE_ACCOUNT = '@accounts/SAVE_ACCOUNT',
  UPDATE_ACCOUNT = '@accounts/UPDATE_ACCOUNT',
  DELETE_ACCOUNT = '@accounts/DELETE_ACCOUNT',
}

export interface Account {
  id: number;
  name: string;
  description: string;
  amount: string;
}

export interface AccountsState {
  readonly data: Account[]
}
