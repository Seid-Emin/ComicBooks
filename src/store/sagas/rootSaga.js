import { takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'

import { searchBookByNameSaga } from './searchActionSaga'
import { getAllBooksSaga } from './groupingCategoriesActionSaga'

export function* watch() {
    yield takeEvery(actionTypes.FETCH_SEARCH, searchBookByNameSaga);
    yield takeEvery(actionTypes.FETCH_ALL_BOOKS, getAllBooksSaga);
}
