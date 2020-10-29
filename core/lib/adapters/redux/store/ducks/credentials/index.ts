import { Reducer } from 'redux';
import { CredentialsState, CredentialsTypes } from './types';

const INITIAL_STATE: CredentialsState = {
  token: ''
}

const reducer: Reducer<CredentialsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CredentialsTypes.SET_TOKEN:
      return { ...state, token: action.token };
    case CredentialsTypes.GET_TOKEN:
      return { ...state };
    default: 
      return state;
  }
}

export default reducer;
