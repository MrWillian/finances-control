import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { AccountsState } from './ducks/accounts/types';
import { CredentialsState } from './ducks/credentials/types';
import { TransactionsState } from './ducks/transactions';
import { TransactionCategoriesState } from './ducks/transactionCategories';
import { BalanceState } from './ducks/balance';
import { SettingsState } from './ducks/settings';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  accounts: AccountsState,
  credentials: CredentialsState,
  transactions: TransactionsState,
  transactionCategories: TransactionCategoriesState,
  balance: BalanceState,
  settings: SettingsState,
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
