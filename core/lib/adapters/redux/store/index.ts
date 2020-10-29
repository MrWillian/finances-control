import { createStore, Store } from 'redux';
import { AccountsState } from './ducks/accounts/types';
import { CredentialsState } from './ducks/credentials/types';
import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  accounts: AccountsState,
  credentials: CredentialsState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
