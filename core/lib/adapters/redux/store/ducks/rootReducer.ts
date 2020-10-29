import { combineReducers } from 'redux';

import accounts from './accounts';
import credentials from './credentials';

export default combineReducers({
  accounts,
  credentials,
});
