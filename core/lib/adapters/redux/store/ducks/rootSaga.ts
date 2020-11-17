import { all, takeLatest } from "redux-saga/effects";

import { create, load, remove } from "./accounts/sagas";
import { AccountsTypes } from "./accounts/types";
import { 
  TransactionsTypes, load as loadTransactions, create as createTransaction
} from "./transactions";
import { 
  TransactionCategoriesTypes, load as loadTransactionCategories 
} from "./transactionCategories";
import { 
  BalanceTypes, load as loadBalance 
} from "./balance";

export default function* rootSaga() {
  return yield all([
    takeLatest(AccountsTypes.LOAD_REQUEST, load),
    takeLatest(AccountsTypes.CREATE_ACCOUNT, create),
    takeLatest(AccountsTypes.DELETE_ACCOUNT, remove),

    takeLatest(TransactionsTypes.LOAD_REQUEST, loadTransactions),
    takeLatest(TransactionCategoriesTypes.LOAD_REQUEST, loadTransactionCategories),
    takeLatest(BalanceTypes.LOAD_REQUEST, loadBalance),
    
    takeLatest(TransactionsTypes.CREATE_TRANSACTION, createTransaction),
  ]);
}
