import { Reducer } from 'redux';
import { Account, AccountsState, AccountsTypes } from './types';

const INITIAL_STATE: AccountsState = {
  data: [],
  error: false,
};

const reducer: Reducer<AccountsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AccountsTypes.LOAD_SUCCESS:
      return { ...state, error: false, data: action.payload.data };
    case AccountsTypes.LOAD_FAILURE: 
      return { ...state, error: true, data: action.payload.data };
    case AccountsTypes.DELETE_ACCOUNT:
      return { 
        ...state, error: false, 
        data: state.data.filter((account: Account) => account.id !== action.payload.id )
      };
    default: 
      return state;
  }
}

export default reducer;
