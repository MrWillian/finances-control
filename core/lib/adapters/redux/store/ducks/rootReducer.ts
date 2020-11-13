import { combineReducers } from 'redux';

import accounts from './accounts';
import credentials from './credentials';
import transactions from './transactions';
import transactionCategories from './transactionCategories';

export default combineReducers({
  accounts,
  credentials,
  transactions,
  transactionCategories
});
