import * as actions from '../actions/index'
import { put } from 'redux-saga/effects'
import axios from 'axios'

import { comicApi } from '../../apiConfig/apiConfig'
import { removeDublicated } from '../../utils/helperFuncs'

export function* getAllBooksSaga(action) {
    let year = [],
        writer = [],
        artist = [],
        owner = [],
        random = ['year', 'writer', 'artist', 'owner'];

    yield put(actions.fetchGroupCategoriesStart());
    try {
        const response = yield axios.get(comicApi.baseUrl, {
            headers: {
                'Authorization': comicApi.headers.Authorization
            }
        })
        // initialy store some extra data
        // later used for grouping
        yield response.data.map(groupRes => {
            return (year.push(groupRes.year),
                writer.push(groupRes.writer),
                artist.push(groupRes.artist),
                owner.push(groupRes.owner))
        });
        year = removeDublicated(year).reverse();
        writer = removeDublicated(writer);
        artist = removeDublicated(artist);
        owner = removeDublicated(owner);
        yield put(actions.fetchGroupCategoriesSuccess(response.data, year, writer, artist, owner, random));
    }
    catch (error) {
        yield put(actions.fetchGroupCategoriesFail(error));
    }
}
