import { all, takeLatest } from "redux-saga/effects";

import { create, load, remove } from "./accounts/sagas";
import { AccountsTypes } from "./accounts/types";
import { TransactionsTypes, load as loadTransactions } from "./transactions";
import { 
  TransactionCategoriesTypes, load as loadTransactionCategories 
} from "./transactionCategories";

export default function* rootSaga() {
  return yield all([
    takeLatest(AccountsTypes.LOAD_REQUEST, load),
    takeLatest(AccountsTypes.CREATE_ACCOUNT, create),
    takeLatest(AccountsTypes.DELETE_ACCOUNT, remove),

    takeLatest(TransactionsTypes.LOAD_REQUEST, loadTransactions),
    takeLatest(TransactionCategoriesTypes.LOAD_REQUEST, loadTransactionCategories),
  ]);
}
