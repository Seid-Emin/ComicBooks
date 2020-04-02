import * as actionTypes from './actionTypes'

export const fetchGroupCategoriesStart = () => {
    return {
        type: actionTypes.FETCH_ALL_BOOKS_START
    };
};

export const fetchGroupCategoriesSuccess = (groupCategoriesResults, year, writer, artist, owner, random) => {
    return {
        type: actionTypes.FETCH_ALL_BOOKS_SUCCESS,
        groupCategoriesResults: groupCategoriesResults,
        year: year,
        writer: writer,
        artist: artist,
        owner: owner,
        random: random
    };
};

export const fetchGroupCategoriesFail = (error) => {
    return {
        type: actionTypes.FETCH_ALL_BOOKS_FAIL,
        error: error
    };
};

export const getAllBooks = () => {
    return {
        type: actionTypes.FETCH_ALL_BOOKS
    }
}

export const changeGroupHandler = (type) => {
    return {
        type: actionTypes.CHANGE_GROUP,
        category: type
    }
}