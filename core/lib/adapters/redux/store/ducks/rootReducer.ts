import { combineReducers } from 'redux';

import accounts from './accounts';
import credentials from './credentials';
import transactions from './transactions';
import transactionCategories from './transactionCategories';
import balance from './balance';
import settings from './settings';

export default combineReducers({
  accounts,
  credentials,
  transactions,
  transactionCategories,
  balance,
  settings,
});
