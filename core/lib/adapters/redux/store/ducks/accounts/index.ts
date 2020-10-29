import { Reducer } from 'redux';
import { AccountsState, AccountsTypes } from './types';

const INITIAL_STATE: AccountsState = {
  data: []
};

const reducer: Reducer<AccountsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AccountsTypes.SAVE_ACCOUNT:
      return { ...state, data: action.payload.data };
    case AccountsTypes.UPDATE_ACCOUNT: 
      return { ...state, data: action.payload.data };
    case AccountsTypes.DELETE_ACCOUNT:
      return { ...state, id: action.payload.id };
    default: 
      return state;
  }
}

export default reducer;
