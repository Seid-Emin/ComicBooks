import * as actions from '../actions/index'
import axios from 'axios'
import { comicApi } from '../../apiConfig/apiConfig'

import { put } from 'redux-saga/effects'

export function* searchBookByNameSaga(action) {
    yield put(actions.fetchSearchStart());

    try {
        const response = yield axios.get(`${comicApi.baseUrl}?q=${action.query}`, {
            headers: {
                'Authorization': comicApi.headers.Authorization
            }
        })
        // check for writer in the url
        // if true compare and pick only the matching book and set as unique result
        if (action.writer) {
            const singleBook = [];
            response.data.map(res => {
                if (res.name.split('#')[0] === action.query && res.writer === action.writer) {
                    singleBook.push(res);
                }
                return singleBook
            });

            yield put(actions.fetchSearchSuccess(singleBook))
        } else {
            yield put(actions.fetchSearchSuccess(response.data));
        }

    } catch (error) {
        yield put(actions.fetchSearchFail(error));
    }
}